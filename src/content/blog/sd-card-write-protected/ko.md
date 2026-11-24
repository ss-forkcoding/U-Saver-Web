---
title: "SD 카드 쓰기 금지 해제: 잠금 탭, 윈도우 읽기 전용 속성, 정책 순서로 확인하기"
description: "SD 카드 쓰기 금지 메시지가 뜨면 잠금 탭, 윈도우 디스크의 읽기 전용 속성, BitLocker 정책, 카드 고장 순서로 원인을 좁힙니다. diskpart로 읽기 전용 속성을 지우는 순서와 해제 전에 사진을 복사하는 이유를 Apple, Microsoft, SD Association 안내 기준으로 정리했습니다."
date: 2026-11-25
---

## 핵심 요약

SD 카드 쓰기 금지는 카드에 파일을 저장하거나 지우지 못하게 막힌 상태입니다. 원인은 카드의 잠금 탭, 윈도우 디스크의 읽기 전용 속성, 회사 PC의 BitLocker 정책, 카드 자체의 고장 중 하나인 경우가 많습니다.

잠금 탭부터 봅니다. 탭이 잠금 해제 쪽인데도 윈도우에서 "디스크가 쓰기 금지되어 있습니다"가 뜨면 `diskpart`로 읽기 전용 속성을 확인합니다.

쓰기 금지 상태에서도 카드를 읽을 수는 있는 경우가 많습니다. 해제를 시도하기 전에 필요한 사진을 다른 저장장치로 먼저 복사합니다.

"카메라에서는 잘 쓰던 카드인데 PC에서 쓰기 금지래요." "잠금 탭을 풀었는데도 똑같아요." SD 카드 쓰기 금지를 해제하려는 분들이 자주 묻는 질문입니다. 잠금 탭 자체의 사용법은 [SD 카드 잠금 스위치](/blog/ko/sd-card-lock-switch)에 정리했습니다. 이 글은 탭 말고 다른 원인까지 순서대로 확인하는 방법을 다룹니다.

## SD 카드 쓰기 금지는 왜 걸리나요?

원인마다 해제하는 곳이 다릅니다. 아래 표에서 내 상황을 찾으세요.

| 원인 | 이런 때 의심합니다 | 해제하는 곳 |
| --- | --- | --- |
| 카드의 잠금 탭 | 모든 기기에서 쓰기가 안 됨 | 카드 옆면의 탭 |
| microSD 어댑터의 잠금 탭 | microSD를 SD 어댑터에 넣어 씀 | 어댑터 옆면의 탭 |
| 윈도우 디스크의 읽기 전용 속성 | 특정 윈도우 PC에서만 쓰기 금지 | `diskpart`의 `attributes` 명령 |
| BitLocker 쓰기 거부 정책 | 회사·학교 PC에서만 쓰기 금지 | PC 관리자 |
| 파일 시스템 오류 | 열리지만 오류가 나고 저장이 안 됨 | `chkdsk`, 디스크 유틸리티 응급 처치 |
| 카드 자체의 고장 | 여러 기기와 리더에서 같은 증상 | 카드 제조사 |

이 글은 특정 카드나 리더를 시험하지 않았고 특정 제품을 추천하지 않습니다.

## 잠금 탭으로 SD 카드 쓰기 금지를 해제하려면?

[Apple의 Mac SD 카드 슬롯 안내](https://support.apple.com/en-us/102352)는 "cannot be modified" 메시지가 나오면 SD 카드가 잠겨 있을 수 있다고 설명합니다. Apple이 적은 순서입니다.

1. 카드를 꺼내기 한 뒤 기기에서 뺍니다.
2. 카드의 잠금 탭을 잠금 해제 쪽으로 밉니다.
3. 카드를 다시 넣습니다.

탭 위치는 카드마다 다르므로 Apple은 제조사 안내를 보라고 적습니다. [SD Association FAQ](https://www.sdcard.org/consumers/faq/)에 따르면 microSD에는 쓰기 방지 스위치가 없습니다. microSD를 SD 어댑터에 넣어 쓴다면 어댑터의 탭을 확인하세요. 두 카드의 차이는 [microSD와 SD 차이](/blog/ko/microsd-vs-sd)에 있습니다.

## 윈도우에서 SD 카드 쓰기 금지를 diskpart로 해제하려면?

잠금 탭이 풀려 있는데 특정 윈도우 PC에서만 쓰기 금지가 뜨면 디스크에 읽기 전용 속성이 붙어 있을 수 있습니다. [Microsoft의 attributes disk 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attributes-disk)는 이 속성을 보고, 붙이고, 지우는 명령을 설명합니다.

[Microsoft의 diskpart 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart)에 따르면 diskpart는 관리자 권한이 있어야 실행됩니다.

1. 시작 메뉴에서 명령 프롬프트를 마우스 오른쪽 버튼으로 누르고 관리자 권한으로 실행을 고릅니다.
2. `diskpart`를 입력합니다.
3. `list disk`를 입력해 디스크 목록을 봅니다. 크기로 SD 카드를 찾습니다.
4. `select disk 2`처럼 카드의 번호를 고릅니다. 2는 예시입니다.
5. `attributes disk`를 입력해 현재 속성을 봅니다. 읽기 전용 항목을 확인합니다.
6. `attributes disk clear readonly`를 입력해 읽기 전용 속성을 지웁니다.
7. `exit`로 나온 뒤 카드를 안전 제거하고 다시 꽂습니다.

번호를 잘못 고르면 PC의 다른 디스크 속성을 바꿉니다. [Microsoft의 select disk 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/select-disk)는 디스크 번호가 재부팅 뒤 바뀔 수 있다고 적습니다. 매번 `list disk`로 크기를 다시 확인하세요.

볼륨에도 읽기 전용 속성이 따로 있습니다. [Microsoft의 attributes volume 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attributes-volume)에 따라 `list volume`으로 카드 볼륨을 찾고 `select volume`으로 고른 뒤 `attributes volume clear readonly`를 입력합니다.

| 명령 | 하는 일 |
| --- | --- |
| `attributes disk` | 고른 디스크의 속성을 봅니다 |
| `attributes disk clear readonly` | 디스크의 읽기 전용 속성을 지웁니다 |
| `attributes volume` | 고른 볼륨의 속성을 봅니다 |
| `attributes volume clear readonly` | 볼륨의 읽기 전용 속성을 지웁니다 |

## 회사 PC에서만 SD 카드가 쓰기 금지되면?

조직의 BitLocker 정책일 수 있습니다. [Microsoft의 BitLocker 설정 문서](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/configure)에 따르면 "BitLocker로 보호되지 않는 이동식 드라이브에 대한 쓰기 액세스 거부" 정책을 켜면 BitLocker로 보호되지 않은 이동식 드라이브는 모두 읽기 전용으로 연결됩니다.

| 상황 | 할 일 |
| --- | --- |
| 집 PC에서는 쓰기가 되고 회사 PC에서만 막힘 | 회사 IT 관리자에게 문의합니다 |
| 회사 PC에서 BitLocker로 암호화하라는 안내가 뜸 | 회사 규정에 따라 IT 관리자와 상의합니다 |

이 정책은 관리자가 정합니다. 사용자가 diskpart로 풀 수 있는 속성이 아닙니다. 회사 규정을 우회하지 마세요.

## SD 카드 쓰기 금지를 해제하기 전에 사진부터 복사해야 하나요?

복사합니다. 쓰기 금지 상태에서도 파일을 읽을 수 있다면 지금이 사진을 옮길 기회입니다. 아래 검사와 포맷은 카드 내용을 바꾸거나 지웁니다.

1. 카드의 사진과 영상을 PC나 다른 저장장치로 복사합니다.
2. 복사한 파일이 열리는지 몇 개 확인합니다.
3. 그다음에 아래 검사나 포맷으로 넘어갑니다.

카드를 PC에 연결하는 방법은 [SD 카드 컴퓨터 연결 방법](/blog/ko/sd-card-to-pc)에 있습니다.

## 그래도 SD 카드 쓰기 금지가 풀리지 않으면?

다른 원인을 차례로 봅니다.

1. 다른 리더나 다른 컴퓨터에 꽂아 봅니다. 한쪽에서만 막히면 그 PC의 속성이나 정책을 의심합니다.
2. 파일 시스템을 검사합니다. 윈도우는 [Microsoft의 chkdsk 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk)대로 `chkdsk E: /f`를 관리자 권한으로 실행합니다. E는 예시입니다. Mac은 [디스크 유틸리티 응급 처치](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac)를 씁니다.
3. 사진을 옮긴 뒤 [SD Association의 포맷 프로그램](https://www.sdcard.org/downloads/formatter/)으로 다시 포맷합니다. 순서는 [SD 카드 포맷 프로그램 사용법](/blog/ko/sd-card-formatter)에 있습니다.
4. 여러 기기에서 같은 증상이 나오면 카드 제조사에 문의합니다. SD Association FAQ는 SD Association이 카드를 만들지 않으므로 제조사에 문의하고, 교환이 필요하면 구입처에 문의하라고 안내합니다.

포맷이 끝까지 진행되지 않는 경우는 [SD 카드 포맷 안될 때](/blog/ko/sd-card-not-working)에서 증상별로 다룹니다.

## 아이폰에서 SD 카드에 저장이 안 되면?

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 따르면 아이폰은 데이터 파티션이 하나이고 APFS, macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나로 포맷된 저장장치를 씁니다. 잠금 탭과 함께 형식도 확인하세요.

| 확인할 것 | 볼 곳 |
| --- | --- |
| 잠금 탭 | 카드나 어댑터의 탭 |
| 카드 형식 | Apple 목록에 있는 형식인지 |
| 복사 순서 | [아이폰 사진 SD 카드로 옮기기](/blog/ko/iphone-photos-to-sd-card) |

## 아이폰 사진을 USB 메모리에 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. USB 메모리 연결 조건은 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에, 형식을 바꾸는 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## SD 카드 쓰기 금지 자주 묻는 질문

### SD 카드 쓰기 금지는 어디서 해제하나요?

카드 옆면의 잠금 탭부터 봅니다. 탭이 풀려 있는데 윈도우 PC에서만 막히면 `diskpart`의 `attributes disk clear readonly`로 읽기 전용 속성을 지웁니다.

### 잠금 탭이 없는 microSD도 쓰기 금지가 되나요?

microSD 카드에는 쓰기 방지 스위치가 없습니다. SD 어댑터에 넣어 쓴다면 어댑터의 탭을 확인하세요. 탭 말고 윈도우 속성, 정책, 카드 고장도 원인이 될 수 있습니다.

### diskpart 명령을 쓰면 카드 자료가 지워지나요?

`attributes` 명령은 속성을 보고 바꾸는 명령입니다. 같은 diskpart의 `clean` 명령은 Microsoft 문서에 따르면 디스크의 파티션과 볼륨 포맷을 모두 지웁니다. 명령을 입력하기 전에 한 번 더 읽으세요.

### 회사 노트북에서만 SD 카드가 쓰기 금지돼요.

Microsoft 문서에 따르면 BitLocker 정책이 켜져 있으면 BitLocker로 보호되지 않은 이동식 드라이브는 읽기 전용으로 연결됩니다. 회사 IT 관리자에게 문의하세요.

### 모든 방법을 써도 SD 카드 쓰기 금지가 풀리지 않아요.

여러 기기와 리더에서 같은 증상이면 카드 자체를 의심합니다. 읽히는 동안 사진을 먼저 복사하고, 카드 제조사에 문의하세요.
