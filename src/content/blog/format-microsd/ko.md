---
title: "마이크로 SD 카드 포맷 방법: 다른 기기에서 쓰던 microSD 다시 포맷하기"
description: "마이크로 SD 카드 포맷 방법을 정리했습니다. 휴대폰이나 카메라에서 쓰던 microSD를 아이폰, Mac, 윈도우에서 다시 포맷하는 순서와 용량별 형식, 포맷 전 확인할 항목을 SD Association과 Apple 안내 기준으로 살펴보세요."
date: 2026-11-12
---

## 핵심 요약

마이크로 SD 카드 포맷은 SD 카드 포맷과 순서가 같습니다. 카드의 자료를 다른 곳에 복사하고, 용량에 맞는 형식을 고른 뒤 포맷합니다. 포맷하면 카드의 자료가 모두 지워집니다.

microSD는 SD 카드보다 작을 뿐 내부 논리와 전자 구조가 같습니다. 그래서 형식 기준도 같습니다. 32GB 이하 microSDHC는 FAT32, 32GB를 넘는 microSDXC는 exFAT이 기본입니다.

다른 점은 연결입니다. microSD 자리가 있는 카드 리더나 SD 크기 어댑터에 넣어야 아이폰이나 PC에 연결할 수 있습니다.

"휴대폰에서 빼낸 microSD가 아이폰에서 안 보여요." "액션캠에 쓰던 카드를 비우고 다시 쓰고 싶어요." 다른 기기에서 쓰던 카드를 다시 포맷하려는 분들이 자주 묻는 질문입니다. 일반 SD 카드의 기기별 순서는 [SD 카드 포맷 방법](/blog/ko/format-sd-card)에 정리했습니다. 이 글은 microSD에서 확인할 부분을 중심으로 다룹니다.

## 마이크로 SD 카드 포맷 전에 무엇을 확인하나요?

포맷하면 카드에 있던 파일이 모두 지워집니다. 아래 네 가지를 먼저 확인하세요.

| 확인할 것 | 해야 할 일 |
| --- | --- |
| 카드에 남길 자료 | 다른 저장장치에 먼저 복사합니다 |
| 카드에 적힌 규격 | microSD, microSDHC, microSDXC 중 무엇인지 보고 형식을 고릅니다 |
| 연결 방법 | microSD 자리가 있는 리더나 SD 크기 어댑터를 준비합니다 |
| 포맷할 장치 | 카드 이름과 용량을 보고 다른 드라이브를 고르지 않았는지 확인합니다 |

카드의 사진과 영상을 아이폰으로 먼저 옮기려면 [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd)의 가져오기 순서를 따르세요.

## microSD 카드는 SD 카드와 포맷 방법이 다른가요?

다르지 않습니다. [SD Association FAQ](https://www.sdcard.org/consumers/faq/)에 따르면 microSD와 SD 카드는 모양, 크기, 핀 수, 쓰기 방지 스위치 유무만 다릅니다. 내부 논리와 전자 구조는 같습니다.

| 구분 | 크기 | 포맷할 때 연결 방법 |
| --- | --- | --- |
| SD | 32 x 24 x 2.1mm | SD 자리가 있는 리더에 넣습니다 |
| microSD | 11 x 15 x 1.0mm | microSD 자리가 있는 리더나 SD 크기 어댑터에 넣습니다 |

크기는 [SD Association의 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 기준입니다. 크기가 작으므로 SD 자리만 있는 리더에는 그대로 넣을 수 없습니다. 이 글은 타사 리더와 어댑터를 시험하지 않았고 특정 제품을 추천하지 않습니다.

## 마이크로 SD 카드는 용량별로 어떤 형식으로 포맷하나요?

용량 규격마다 기본 파일 시스템이 정해져 있습니다. [SD Association의 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 기준입니다.

| 카드에 적힌 규격 | 용량 | 기본 파일 시스템 |
| --- | --- | --- |
| microSD | 2GB까지 | FAT12, FAT16 |
| microSDHC | 2GB 초과 32GB까지 | FAT32 |
| microSDXC | 32GB 초과 2TB까지 | exFAT |

FAT32는 4GB가 넘는 파일을 저장하지 못합니다. [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)는 FAT32의 최대 파일 크기를 4GiB로 적습니다. 긴 영상을 담을 카드라면 exFAT을 고르세요. 32GB를 넘는 카드를 FAT32로 쓰려는 경우는 [USB FAT32 포맷 방법](/blog/ko/format-usb-fat32)에 정리했습니다.

## 다른 기기에서 쓰던 microSD는 왜 다시 포맷하나요?

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 따르면 아이폰은 데이터 파티션이 하나인 저장장치만 씁니다. 형식도 APFS, macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나여야 합니다.

| 카드 상태 | 아이폰에서 생기는 일 | 할 일 |
| --- | --- | --- |
| NTFS로 포맷된 카드 | Apple 형식 목록에 없습니다 | exFAT이나 FAT32로 다시 포맷합니다 |
| 데이터 파티션이 여러 개인 카드 | Apple 조건에 맞지 않습니다 | Mac 디스크 유틸리티에서 맨 위 항목을 지웁니다 |
| 목록에 있는 형식, 파티션 하나 | 파일 앱에서 열 수 있습니다 | 포맷하지 않아도 됩니다 |

카드가 리더에서 인식되지 않는다면 포맷 전에 연결부터 확인하세요. SD Association FAQ는 기기 설명서대로 카드를 넣었는지 보고, 오류 메시지를 기록하고, 카드 제조사에 문의하라고 안내합니다.

## SD Association 포맷 프로그램으로 마이크로 SD 카드를 포맷하는 방법

[SD Association의 포맷 프로그램 안내](https://www.sdcard.org/downloads/formatter/)는 운영체제의 포맷 도구보다 SD Memory Card Formatter를 쓰라고 강하게 권합니다. 운영체제 도구는 SD 카드에 최적화되지 않아 성능이 떨어질 수 있다고 설명합니다.

1. SD Association 사이트에서 윈도우용이나 Mac용 SD Memory Card Formatter를 내려받아 설치합니다.
2. microSD를 리더의 microSD 자리나 SD 크기 어댑터에 넣고 PC나 Mac에 연결합니다.
3. 프로그램을 열고 포맷할 카드를 고릅니다. 이름과 용량을 다시 확인합니다.
4. 포맷을 실행합니다.

같은 안내에 따르면 윈도우 BitLocker To Go로 암호화한 카드는 지원하지 않습니다. 먼저 잠금을 풀고 포맷하세요.

## 아이폰에서 마이크로 SD 카드를 포맷하는 방법

[Apple의 파일 앱 안내](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)에 따르면 USB-C 단자가 있는 아이폰은 파일 앱에서 외부 저장장치의 형식을 바꿀 수 있습니다.

1. microSD를 리더에 넣고 리더를 아이폰에 연결합니다. 카드는 한 방향으로만 들어가니 억지로 밀지 마세요.
2. 파일 앱을 열고 둘러보기를 누릅니다.
3. 위치 아래의 카드 이름을 길게 누른 뒤 지우기를 누릅니다.
4. 포맷 목록에서 ExFAT이나 MS-DOS(FAT)를 고르고 지우기를 한 번 더 누릅니다.

32GB를 넘는 카드는 ExFAT, 32GB 이하 카드는 MS-DOS(FAT)를 고르세요. Lightning 아이폰은 이 안내의 대상이 아니므로 Mac이나 윈도우 PC를 쓰세요. 아이폰에 맞는 리더 조건은 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에 있습니다.

## Mac에서 마이크로 SD 카드를 포맷하는 방법

Mac에서는 디스크 유틸리티를 씁니다. [Apple의 윈도우용 포맷 안내](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac)를 따른 순서입니다. 이 방법은 파티션이 여러 개인 카드에도 씁니다.

1. 응용 프로그램의 유틸리티 폴더에서 디스크 유틸리티를 엽니다.
2. 메뉴에서 보기, 모든 기기 보기를 선택합니다.
3. 사이드바에서 카드의 맨 위 항목을 선택하고 지우기를 누릅니다.
4. 설계에서 파티션 방식을 고릅니다.
5. 포맷에서 32GB 이하 카드는 MS-DOS(FAT), 32GB를 넘는 카드는 ExFAT을 고릅니다.
6. 이름을 입력합니다. 이름은 11자까지 쓸 수 있습니다.
7. 지우기를 누른 뒤 완료를 누릅니다.

[Apple의 디스크 유틸리티 안내](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac)에 따르면 설계 메뉴가 보이지 않으면 맨 위 항목을 고르지 않은 것입니다.

## 윈도우에서 마이크로 SD 카드를 포맷하는 방법

윈도우에서는 파일 탐색기에서 포맷합니다.

1. microSD를 넣은 리더를 PC에 연결하고 파일 탐색기에서 내 PC를 엽니다.
2. 카드 드라이브를 마우스 오른쪽 버튼으로 누르고 포맷을 선택합니다.
3. 파일 시스템에서 32GB 이하 카드는 FAT32, 32GB를 넘는 카드는 exFAT을 고릅니다.
4. 볼륨 레이블에 카드 이름을 입력합니다.
5. 시작을 누르고 확인합니다.

명령 프롬프트에서는 `format E: /FS:exFAT /V:MICROSD`처럼 입력합니다. E는 예시이므로 내 카드의 드라이브 문자로 바꾸세요. 문자를 잘못 입력하면 다른 드라이브가 지워집니다.

`/Q`를 붙이면 빠른 포맷이 됩니다. [Microsoft의 format 명령 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format)는 불량 섹터가 없을 때만 이 옵션을 쓰라고 설명합니다. 다른 기기에서 오류를 내던 카드라면 빠른 포맷을 끄세요.

윈도우 포맷은 드라이브 문자 하나에만 적용됩니다. 파티션이 여러 개인 카드는 SD Association 포맷 프로그램이나 Mac 디스크 유틸리티를 쓰세요.

## 마이크로 SD 카드 포맷 뒤에 아이폰에서 확인하는 방법

카드를 넣은 리더를 아이폰에 연결하고 파일 앱의 둘러보기 화면에서 위치 목록을 봅니다. 카드 이름이 보이면 파일을 복사할 수 있습니다. 위치가 보이지 않으면 둘러보기를 한 번 더 누릅니다.

사진을 카드로 옮기는 순서는 [아이폰 사진 SD 카드로 옮기기](/blog/ko/iphone-photos-to-sd-card)에 있습니다.

## USB 메모리에 정기적으로 백업하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. 카드 리더에서의 동작은 확인하지 않았습니다. USB 메모리 형식을 바꾸는 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비 중이며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 마이크로 SD 카드 포맷 자주 묻는 질문

### 마이크로 SD 카드를 포맷하면 자료가 지워지나요?

지워집니다. Apple 안내도 저장장치를 지우면 모든 내용이 삭제된다고 설명합니다. 남길 파일은 포맷 전에 다른 곳에 복사하세요.

### microSD와 SD 카드는 같은 형식으로 포맷하나요?

같습니다. SD Association FAQ에 따르면 둘은 크기와 모양 등만 다르고 내부 논리가 같습니다. 용량 규격에 맞춰 FAT32나 exFAT을 고르세요.

### 64GB microSD는 FAT32와 exFAT 중 무엇이 맞나요?

32GB를 넘는 microSDXC의 기본 형식은 exFAT입니다. FAT32만 읽는 기기에 꽂을 카드가 아니라면 exFAT으로 포맷하세요.

### 휴대폰에서 쓰던 microSD가 아이폰에서 안 보이면 어떻게 하나요?

카드 형식이 Apple 목록에 있는지, 데이터 파티션이 하나인지 확인하세요. 둘 중 하나라도 맞지 않으면 자료를 옮긴 뒤 다시 포맷합니다.

### 포맷 프로그램은 꼭 써야 하나요?

SD Association은 자체 포맷 프로그램을 강하게 권합니다. 운영체제 도구로도 포맷은 되지만 SD 카드에 최적화되지 않아 성능이 떨어질 수 있다고 설명합니다.
