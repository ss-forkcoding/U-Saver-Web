---
title: "마이크로 SD 카드 쓰기 금지 해제: 스위치 없는 microSD에서 막힌 곳 찾기와 강제 포맷 순서"
description: "마이크로 SD 카드 쓰기 금지 해제는 카드에 스위치가 없어서 어댑터, 리더, 윈도우 읽기 전용 속성, 카드 고장 순서로 원인을 좁힙니다. 사진을 먼저 복사하고, SD Card Formatter와 diskpart clean으로 강제 포맷하는 순서를 SD Association과 Microsoft 문서 기준으로 정리했습니다."
date: 2026-11-25
---

## 핵심 요약

마이크로 SD 카드 쓰기 금지 해제는 일반 SD 카드와 순서가 다릅니다. microSD 카드에는 쓰기 방지 스위치가 없습니다. 그래서 카드 대신 SD 어댑터의 탭, 카드 리더, 윈도우의 읽기 전용 속성, 카드 자체를 차례로 봅니다.

해제를 시도하기 전에 읽히는 사진부터 복사합니다. 강제 포맷은 카드의 모든 자료를 지웁니다.

포맷까지 실패하면 카드가 더는 쓰기를 받지 않는 상태일 수 있습니다. 이때는 카드 제조사에 문의합니다.

"휴대폰에서 빼서 PC에 꽂았더니 쓰기 금지래요." "microSD에는 잠금 탭이 없는데 왜 잠겼죠?" 마이크로 SD 카드 쓰기 금지를 해제하려는 분들이 자주 묻는 질문입니다. 잠금 탭이 있는 일반 SD 카드는 [SD 카드 쓰기 금지 해제](/blog/ko/sd-card-write-protected)에서 다뤘습니다. 이 글은 microSD에서 막힌 곳을 찾고, 마지막 수단인 강제 포맷까지 가는 순서를 다룹니다.

## 마이크로 SD 카드에는 쓰기 금지 스위치가 있나요?

없습니다. [SD Association FAQ](https://www.sdcard.org/consumers/faq/)는 microSD와 SD 카드의 차이가 크기, 핀 수, 쓰기 방지 스위치 유무뿐이라고 설명합니다. 내부 논리와 전자 회로는 같습니다.

그래서 microSD가 쓰기 금지로 뜨면 카드 밖의 부품부터 의심합니다.

| 원인 | 이런 때 의심합니다 | 확인하는 곳 |
| --- | --- | --- |
| SD 어댑터의 잠금 탭 | microSD를 SD 어댑터에 넣어 PC나 카메라에 꽂음 | 어댑터 옆면의 탭 |
| 카드 리더 | 리더 하나에서만 쓰기 금지 | 다른 리더나 다른 슬롯 |
| 윈도우 읽기 전용 속성 | 특정 윈도우 PC에서만 쓰기 금지 | `diskpart`의 `attributes` 명령 |
| 회사 PC의 BitLocker 정책 | 회사·학교 PC에서만 쓰기 금지 | PC 관리자 |
| 카드 자체의 고장 | 여러 기기와 리더에서 같은 증상, 포맷도 실패 | 카드 제조사 |

이 글은 특정 카드나 리더를 시험하지 않았고 특정 제품을 추천하지 않습니다. 두 카드의 차이는 [microSD와 SD 차이](/blog/ko/microsd-vs-sd)에 있습니다.

## SD 어댑터 때문에 마이크로 SD 카드가 쓰기 금지되나요?

그럴 수 있습니다. microSD를 SD 어댑터에 넣으면 어댑터의 탭이 잠금 탭 역할을 합니다. [Apple의 Mac SD 카드 슬롯 안내](https://support.apple.com/en-us/102352)는 "cannot be modified" 메시지가 나오면 카드가 잠겨 있을 수 있다고 설명합니다.

1. 어댑터를 꺼내기 한 뒤 기기에서 뺍니다.
2. 어댑터 옆면의 탭을 잠금 해제 쪽으로 밉니다.
3. 어댑터를 다시 넣습니다.
4. 그래도 막히면 다른 어댑터나 USB 카드 리더로 바꿔 꽂아 봅니다.

탭 위치와 방향은 제품마다 다르므로 Apple은 제조사 안내를 보라고 적습니다. 탭을 쓰는 방법은 [SD 카드 잠금 스위치](/blog/ko/sd-card-lock-switch)에 정리했습니다.

## 마이크로 SD 카드 쓰기 금지를 해제하기 전에 무엇부터 하나요?

읽히는 사진과 영상을 먼저 복사합니다. 아래의 속성 변경은 자료를 지우지 않지만, 강제 포맷은 카드를 비웁니다.

1. 카드의 사진과 영상을 PC나 다른 저장장치로 복사합니다.
2. 복사한 파일이 열리는지 몇 개 확인합니다.
3. 휴대폰, 카메라처럼 카드를 쓰던 기기에서 오류 메시지가 있었다면 적어 둡니다.

SD Association FAQ는 카드가 기기에서 동작하지 않을 때 기기 설명서대로 카드를 넣었는지 확인하고, 오류 메시지를 적어 설명서를 보라고 안내합니다. 휴대폰에서 카드를 다루는 순서는 [안드로이드폰 microSD 사용법](/blog/ko/android-microsd)에 있습니다.

## 윈도우에서 마이크로 SD 카드 쓰기 금지를 해제하려면?

어댑터와 리더를 바꿔도 특정 윈도우 PC에서만 막히면 디스크의 읽기 전용 속성을 확인합니다. [Microsoft의 attributes disk 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attributes-disk)는 이 속성을 보고 지우는 명령을 설명합니다. [diskpart 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart)에 따르면 diskpart는 관리자 권한이 있어야 실행됩니다.

1. 명령 프롬프트를 관리자 권한으로 실행합니다.
2. `diskpart`를 입력합니다.
3. `list disk`로 디스크 목록을 보고 크기로 microSD를 찾습니다.
4. `select disk 2`처럼 카드 번호를 고릅니다. 2는 예시입니다.
5. `attributes disk`로 읽기 전용 항목을 확인합니다.
6. `attributes disk clear readonly`로 읽기 전용 속성을 지웁니다.
7. `exit`로 나온 뒤 카드를 안전 제거하고 다시 꽂습니다.

[Microsoft의 select disk 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/select-disk)는 디스크 번호가 재부팅 뒤 바뀔 수 있다고 적습니다. 매번 `list disk`로 크기를 다시 확인하세요. 회사 PC에서만 막힌다면 BitLocker 정책일 수 있으니 [SD 카드 쓰기 금지 해제](/blog/ko/sd-card-write-protected)의 정책 항목을 보고 IT 관리자에게 문의하세요.

## 마이크로 SD 카드를 강제 포맷하려면?

속성을 지워도 저장이 안 되면 사진을 옮긴 뒤 포맷합니다. 가벼운 방법부터 씁니다.

| 순서 | 방법 | 자료 |
| --- | --- | --- |
| 1 | SD Memory Card Formatter로 포맷 | 모두 지워짐 |
| 2 | diskpart `clean`으로 파티션 정보를 지우고 새로 만듦 | 모두 지워짐 |
| 3 | 그래도 실패하면 제조사 문의 | - |

### 1. SD Memory Card Formatter로 포맷하기

[SD Association의 포맷 프로그램 페이지](https://www.sdcard.org/downloads/formatter/)는 운영체제의 포맷 도구보다 SD Memory Card Formatter를 쓰라고 강하게 권합니다. 실행에는 Windows와 macOS 모두 관리자 권한이 필요합니다. BitLocker To Go로 암호화된 카드는 지원하지 않으므로 잠금을 먼저 풉니다. 빠른 포맷과 덮어쓰기 포맷의 차이는 [SD 카드 포맷 프로그램 사용법](/blog/ko/sd-card-formatter)에 있습니다.

### 2. diskpart clean으로 다시 만들기

포맷 프로그램이 실패할 때 쓰는 마지막 수단입니다. [Microsoft의 clean 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/clean)에 따르면 `clean`은 선택한 디스크의 모든 파티션과 볼륨 포맷을 지웁니다. 디스크 번호를 잘못 고르면 PC의 다른 디스크가 지워집니다.

1. 관리자 권한 명령 프롬프트에서 `diskpart`를 입력합니다.
2. `list disk`로 microSD의 번호를 크기로 확인합니다.
3. `select disk 2`처럼 카드를 고릅니다. 2는 예시입니다.
4. `list disk`를 한 번 더 입력해 고른 디스크 앞에 별표(*)가 있는지 확인합니다. [Microsoft의 list 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/list)에 따르면 별표는 선택된 대상을 뜻합니다.
5. `clean`을 입력합니다.
6. `create partition primary`로 파티션을 새로 만듭니다. [Microsoft 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/create-partition-primary)에 따르면 크기를 정하지 않으면 남은 공간을 모두 씁니다.
7. `assign`으로 드라이브 문자를 붙입니다. [Microsoft의 assign 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/assign)에 따르면 문자를 정하지 않으면 다음 빈 문자가 붙습니다.
8. `exit`로 나온 뒤 SD Memory Card Formatter로 다시 포맷합니다.

포맷도 카드에 쓰는 작업입니다. 위 순서가 모두 실패하면 카드가 쓰기를 받지 않는 상태일 수 있습니다. 포맷이 중간에 멈추는 경우는 [SD 카드 포맷 안될 때](/blog/ko/sd-card-not-working)에서 증상별로 다룹니다.

## 강제 포맷도 안 되는 마이크로 SD 카드는 어떻게 하나요?

여러 기기와 리더에서 같은 증상이면 카드 제조사에 문의합니다. SD Association FAQ는 SD Association이 카드를 만들지 않으므로 제조사에 문의하고, 교환 절차가 필요하면 구입처에 문의하라고 안내합니다.

| 상황 | 할 일 |
| --- | --- |
| 사진이 아직 읽힘 | 다른 저장장치로 복사부터 합니다 |
| 포맷 프로그램과 `clean` 모두 실패 | 카드 제조사에 문의합니다 |
| 교환이 필요함 | 구입처에 문의합니다 |

## 아이폰에서 마이크로 SD 카드를 쓰려면?

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 따르면 아이폰은 데이터 파티션이 하나이고 APFS, macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나로 포맷된 저장장치를 씁니다. 강제 포맷 뒤 아이폰에서 쓸 카드라면 형식을 확인하세요. 연결 방법은 [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd)에, 다시 포맷하는 순서는 [마이크로 SD 카드 포맷 방법](/blog/ko/format-microsd)에 있습니다.

## 아이폰 사진을 USB 메모리에 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. USB 메모리 연결 조건은 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에, 형식을 바꾸는 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 마이크로 SD 카드 쓰기 금지 자주 묻는 질문

### 마이크로 SD 카드 쓰기 금지 해제 스위치는 어디 있나요?

microSD 카드에는 쓰기 방지 스위치가 없습니다. SD 어댑터에 넣어 쓴다면 어댑터의 탭을 확인하세요.

### 휴대폰에서는 되는데 PC에서만 쓰기 금지돼요.

어댑터의 탭, 카드 리더, 그 PC의 읽기 전용 속성을 차례로 봅니다. 회사 PC라면 BitLocker 정책일 수 있으니 IT 관리자에게 문의하세요.

### 강제 포맷하면 사진이 지워지나요?

지워집니다. SD Memory Card Formatter와 diskpart `clean` 모두 카드를 비웁니다. 읽히는 동안 사진을 먼저 복사하세요.

### diskpart의 attributes 명령도 자료를 지우나요?

`attributes`는 속성을 보고 바꾸는 명령입니다. 자료를 지우는 명령은 `clean`입니다. 입력하기 전에 고른 디스크 번호를 한 번 더 확인하세요.

### 강제 포맷도 실패하면 고칠 방법이 있나요?

여러 기기와 리더에서 같은 증상이면 카드 자체를 의심합니다. 카드 제조사에 문의하고, 교환이 필요하면 구입처에 문의하세요.
