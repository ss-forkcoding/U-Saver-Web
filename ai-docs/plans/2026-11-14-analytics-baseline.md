---
title: GA·GSC 기준선과 1차 개선 측정 계획
type: plan
status: in_progress
summary: 2026-11-14 기준 GA4·Search Console 숫자를 박제하고, 같은 날 넣은 전환 측정·QR·스니펫 수정의 효과를 4주 뒤 같은 쿼리로 비교한다.
created: 2026-11-14
tags: [analytics, ga4, search-console, seo, conversion]
---

# GA·GSC 기준선과 1차 개선 측정 계획

## 접근 경로

- GCP 프로젝트 `starlight-web-analytics`, 서비스 계정 `web-analytics-reader@starlight-web-analytics.iam.gserviceaccount.com`.
- 키는 `~/.config/nextgenai/web-analytics-reader.json`(저장소 밖)에 둔다.
- GA4 속성은 `563323647`(측정 ID `G-FPGBR792PD`)이고, GSC 속성은 `sc-domain:usaver.fork-coding.com`이다.

## 기준선 (2026-11-14 조회)

### GA4 28일

- 사용자는 41명이고 page_view는 58회다.
- App Store 링크 클릭은 1회다(향상된 측정의 외부 링크 클릭). 주요 이벤트는 0개다.
- 기기별 사용자는 데스크톱 27명(Windows 11, Mac 8, 기타 8), iOS 모바일 12명이다.
- 랜딩별 숫자:

  | 랜딩 | 세션 | 참여율 | 참여 시간(초) | 비고 |
  |---|---|---|---|---|
  | `/ko` | 14 | 35.7% | 230 | |
  | `/en` | 9 | 11.1% | 10 | 9세션 모두 direct, 대부분 미국 |
  | `/blog/ko/iphone-photos-to-usb` | 4 | 0% | 0 | 모두 google organic 모바일, 한국 |

### GSC (2026-08-16 ~ 2026-11-12)

- 합계는 클릭 5, 노출 133, CTR 3.8%, 평균 9.5위다. 노출은 11월 8일 주에 몰려 있다.
- 수정 대상 페이지:

  | 페이지 | 노출 | 클릭 | 순위 |
  |---|---|---|---|
  | `en/iphone-otg-usb` | 33 | 1 | 9.5 |
  | `ja/iphone-flash-drive-guide` | 22 | 0 | 8.8 |
  | `ja/backup-iphone-without-computer` | 10 | 0 | 14.5 |
  | `ko/iphone-photos-to-usb` | 10 | 0 | 6.6 |

## 2026-11-14 변경

- [x] `app_store_click`(파라미터 `placement`, `page_lang`)을 GA로 보낸다. 자체 `/api/track` 집계는 그대로 둔다.
- [x] 데스크톱(마우스 포인터, 폭 861px 이상)의 홈 히어로에 App Store QR을 둔다. 화면에 보이면 `app_store_qr_view`를 보낸다.
- [x] App Store 링크 캠페인 파라미터 코드(`appStoreLink`)를 넣었다. `appStoreProviderToken`이 null이라 지금은 원래 주소를 쓴다.
- [x] 스니펫을 수정했다.
  - `en/iphone-otg-usb`: 제목을 "Does iPhone Support OTG?"로 바꾸고 설명에 iPhone 15·16을 넣었다.
  - `ja/iphone-flash-drive-guide`: 제목과 설명을 검색어 "取り外し"에 맞췄다.
  - `ko/iphone-photos-to-usb`: 제목과 설명에 "화질 그대로"를 넣었다.
- [x] `ja/iphone-flash-drive-guide`(참여 339초)에서 `ja/backup-iphone-without-computer`로 내부 링크를 걸었다.
- [x] 점검: `/en`과 `ko/iphone-photos-to-usb`는 실서버에서 정상 로드된다(load 1.2초, 0.54초). GA 태그도 들어 있다. 페이지 결함은 찾지 못했다.

## 남은 일

- [ ] 배포 후 24시간 안에 GA 관리 > 이벤트에서 `app_store_click`에 별표를 쳐 주요 이벤트로 지정한다. GA는 수집된 적 없는 이벤트를 주요 이벤트로 만들 수 없다.
- [ ] App Store Connect > 앱 분석 > 캠페인 링크 생성기에서 공급자 토큰(pt)을 확인해 `src/content/site.ts`의 `appStoreProviderToken`에 넣는다.
- [ ] 2026-12-12에 같은 쿼리로 비교한다.
  - 수정 페이지 4개의 CTR과 순위를 본다.
  - `app_store_click`을 placement·page_lang별로 본다.
  - `app_store_qr_view` 대비 홈 클릭을 본다.
- [ ] 재검토 조건:
  - 4주 노출이 페이지당 50 미만이면 CTR 비교를 판정하지 않고 기간을 늘린다.
  - QR 노출 대비 앱 분석의 `web_home_qr_*` 설치가 0이면 QR 문구나 위치를 바꾼다.

## 해석 메모

- `/en`의 낮은 참여는 direct·미국에 몰려 있다. 앱 심사(11월 11일 전후) 중 심사자가 마케팅 URL을 연 기록일 가능성이 있다. 확정은 못 한다. 실제 영어권 검색 유입이 쌓이기 전에는 `/en` 문구를 바꾸지 않는다.
- 블로그 글에는 App Store 링크가 없다. 블로그 유입(유기 검색의 대부분)은 홈을 거쳐야 설치로 이어진다.
