// U-Saver 지원 페이지 의견을 시트에 쌓는 Apps Script 웹 앱의 원본.
// 스크립트 속성 FEEDBACK_SECRET 값과 요청의 secret 이 같아야 저장한다.
var FEEDBACK = {
  contractVersion: 1,
  sheetId: 0,
  messageMax: 2000,
  emailMax: 254,
  hourlyCap: 120,
  dedupeSeconds: 600,
  categories: { bug: '오류나 문제', idea: '개선 제안', question: '질문', other: '기타' },
  headers: ['접수 시각', '종류', '내용', '답변 이메일'],
};

function doPost(e) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return reply_({ ok: false, code: 'BUSY' });
  try {
    return reply_(handleFeedback_(e));
  } catch (error) {
    console.error(error);
    return reply_({ ok: false, code: 'INTERNAL' });
  } finally {
    lock.releaseLock();
  }
}

function handleFeedback_(e) {
  var body = JSON.parse(e.postData.contents);
  if (body.contractVersion !== FEEDBACK.contractVersion) return { ok: false, code: 'UNSUPPORTED_VERSION' };

  var secret = PropertiesService.getScriptProperties().getProperty('FEEDBACK_SECRET');
  if (!secret || body.secret !== secret) return { ok: false, code: 'UNAUTHORIZED' };

  var category = FEEDBACK.categories[body.category];
  var message = String(body.message || '');
  var email = String(body.email || '');
  if (!category || message === '' || message.length > FEEDBACK.messageMax || email.length > FEEDBACK.emailMax) {
    return { ok: false, code: 'INVALID_INPUT' };
  }

  var cache = CacheService.getScriptCache();
  var hourKey = 'count:' + Math.floor(Date.now() / 3600000);
  var count = Number(cache.get(hourKey) || 0);
  if (count >= FEEDBACK.hourlyCap) return { ok: false, code: 'RATE_LIMITED' };

  // 재시도로 같은 내용이 다시 와도 한 줄만 남기고 성공으로 답한다.
  var duplicateKey = 'dup:' + digest_(body.category + '\n' + message + '\n' + email);
  if (cache.get(duplicateKey)) return { ok: true, duplicate: true };

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetById(FEEDBACK.sheetId);
  if (sheet.getLastRow() === 0) sheet.appendRow(FEEDBACK.headers);
  sheet.appendRow([new Date(), category, plainText_(message), plainText_(email)]);

  cache.put(hourKey, String(count + 1), 3700);
  cache.put(duplicateKey, '1', FEEDBACK.dedupeSeconds);
  return { ok: true };
}

// 사용자가 쓴 글이 시트에서 수식으로 실행되지 않게 한다.
function plainText_(value) {
  return /^[=+\-@\t\r]/.test(value) ? "'" + value : value;
}

function digest_(value) {
  return Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value, Utilities.Charset.UTF_8));
}

function reply_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
