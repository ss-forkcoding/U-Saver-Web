---
title: "SD 카드 포맷 방법: 용량별 형식 고르기와 아이폰, Mac, 윈도우 순서"
description: "SD 카드 포맷 방법을 아이폰 파일 앱, Mac 디스크 유틸리티, 윈도우, SD Association 포맷 프로그램 순서로 정리했습니다. 용량별로 FAT32와 exFAT 중 무엇을 고를지도 확인하세요."
date: 2026-11-12
---

## 핵심 요약

SD 카드 포맷 방법은 기기마다 다르지만 순서는 같습니다. 카드의 자료를 다른 곳에 복사하고, 용량에 맞는 형식을 고른 뒤 포맷합니다. 포맷하면 카드의 자료가 모두 지워집니다.

SD Association은 32GB 이하 SDHC 카드에 FAT32, 32GB를 넘는 SDXC 카드에 exFAT을 기본 형식으로 정해 두었습니다. 아이폰은 두 형식을 모두 읽습니다.

SD Association은 운영체제의 포맷 도구보다 자체 포맷 프로그램인 SD Memory Card Formatter를 쓰라고 권합니다. 아이폰에서만 쓸 카드라면 USB-C 아이폰의 파일 앱으로도 포맷할 수 있습니다.

"카메라에서 쓰던 카드를 아이폰에서 쓰려는데 열리지 않아요." "SD 카드를 FAT32로 포맷하고 싶은데 메뉴에 없어요." SD 카드 포맷을 찾는 분들이 자주 묻는 질문입니다. 이 글은 카드 용량에 맞는 형식을 고르는 기준부터 기기별 순서까지 다룹니다.

## SD 카드 포맷 전에 무엇을 확인하나요?

포맷하면 카드에 있던 파일이 모두 지워집니다. 아래 세 가지를 먼저 확인하세요.

| 확인할 것 | 해야 할 일 |
| --- | --- |
| 카드에 남길 자료 | 다른 저장장치에 먼저 복사합니다 |
| 포맷할 장치 | 카드 이름과 용량을 보고 다른 드라이브를 고르지 않았는지 확인합니다 |
| 카드에 적힌 규격 | SD, SDHC, SDXC 중 무엇인지 보고 형식을 고릅니다 |

카드 사진을 아이폰으로 먼저 옮기려면 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)을 따르세요.

## SD 카드는 용량별로 어떤 형식으로 포맷하나요?

SD 카드는 용량 규격마다 기본 파일 시스템이 정해져 있습니다. [SD Association의 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 기준입니다.

| 카드에 적힌 규격 | 용량 | 기본 파일 시스템 |
| --- | --- | --- |
| SD | 2GB까지 | FAT12, FAT16 |
| SDHC | 2GB 초과 32GB까지 | FAT32 |
| SDXC | 32GB 초과 2TB까지 | exFAT |
| SDUC | 2TB 초과 128TB까지 | exFAT |

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 따르면 아이폰은 exFAT, FAT32, FAT, APFS, macOS 확장(HFS+) 형식을 읽습니다. 데이터 파티션은 하나여야 합니다. NTFS는 이 목록에 없습니다.

FAT32는 4GB가 넘는 파일을 저장하지 못합니다. [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)는 FAT32의 최대 파일 크기를 4GiB로 적습니다. 긴 영상을 담을 카드라면 exFAT을 고르세요.

## SD 카드를 FAT32로 포맷할 수 있나요?

32GB 이하 SDHC 카드라면 FAT32가 기본 형식이므로 그대로 고르면 됩니다. 32GB를 넘는 SDXC 카드는 사정이 다릅니다.

| 환경 | 공식 안내 |
| --- | --- |
| SD Association 규격 | 32GB를 넘는 SDXC 카드의 기본 형식은 exFAT입니다 |
| Mac 디스크 유틸리티 | MS-DOS(FAT)는 32GB 이하, 32GB를 넘으면 ExFAT을 고릅니다 |
| 윈도우 명령줄 | FAT32 포맷 한도가 32GB에서 2TB로 올라갑니다(2026년 4월 미리 보기 업데이트) |

Mac 기준은 [Apple의 윈도우용 포맷 안내](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac)에 있습니다. 윈도우 변경은 [KB5083631](https://support.microsoft.com/en-us/servicing/os/windows-11/2026/04/april-30-2026-kb5083631-os-builds-26200-8328-and-26100-8328-preview)에 적혀 있고, PC마다 적용 시점이 다를 수 있습니다. 자세한 내용은 [USB FAT32 포맷 방법](/blog/ko/format-usb-fat32)에 정리했습니다.

64GB 이상 카드를 FAT32로 쓸 이유는 함께 쓸 기기가 FAT32만 읽을 때뿐입니다. 그 밖에는 규격대로 exFAT으로 포맷하세요.

## SD Association 포맷 프로그램으로 포맷하는 방법

[SD Association의 포맷 프로그램 안내](https://www.sdcard.org/downloads/formatter/)는 SD, SDHC, SDXC, SDUC 카드를 SD 파일 시스템 규격대로 포맷한다고 설명합니다. 운영체제의 포맷 도구는 SD 카드에 맞게 최적화되지 않아 성능이 떨어질 수 있다고 적어 두었습니다.

1. SD Association 사이트에서 윈도우용이나 Mac용 SD Memory Card Formatter를 내려받아 설치합니다.
2. 카드 리더에 SD 카드를 넣고 PC나 Mac에 연결합니다.
3. 프로그램을 열고 포맷할 카드를 고릅니다. 이름과 용량을 다시 확인합니다.
4. 포맷을 실행합니다.

이 프로그램은 카드 용량에 맞춰 규격의 형식으로 포맷합니다. 같은 안내에 따르면 윈도우 BitLocker To Go로 암호화한 카드는 지원하지 않으므로 먼저 암호화를 풀어야 합니다.

## 아이폰에서 SD 카드를 포맷하는 방법

[Apple의 파일 앱 안내](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)는 외부 저장장치의 예로 USB 드라이브와 SD 카드를 듭니다. USB-C 단자가 있는 아이폰은 파일 앱에서 포맷을 바꿀 수 있습니다.

1. SD 카드를 카드 리더에 넣고 리더를 아이폰에 연결합니다.
2. 파일 앱을 열고 둘러보기를 누릅니다.
3. 위치 아래의 카드 이름을 길게 누른 뒤 지우기를 누릅니다.
4. 포맷 목록에서 ExFAT이나 MS-DOS(FAT)를 고르고 지우기를 한 번 더 누릅니다.

32GB를 넘는 카드는 ExFAT, 32GB 이하 카드는 MS-DOS(FAT)를 고르세요. Lightning 아이폰은 이 안내의 대상이 아니므로 Mac이나 윈도우 PC를 쓰세요. microSD 카드는 [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd)에서 리더 조건을 확인하세요.

## Mac에서 SD 카드를 포맷하는 방법

Mac에서는 디스크 유틸리티를 씁니다. [Apple의 디스크 유틸리티 안내](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac)를 따른 순서입니다.

1. 응용 프로그램의 유틸리티 폴더에서 디스크 유틸리티를 엽니다.
2. 메뉴에서 보기, 모든 기기 보기를 선택합니다.
3. 사이드바에서 SD 카드의 맨 위 항목을 선택하고 지우기를 누릅니다.
4. 설계에서 파티션 방식을 고릅니다.
5. 포맷에서 32GB 이하 카드는 MS-DOS(FAT), 32GB를 넘는 카드는 ExFAT을 고릅니다.
6. 이름을 입력합니다. 이름은 11자까지 쓸 수 있습니다.
7. 지우기를 누른 뒤 완료를 누릅니다.

설계 메뉴가 보이지 않으면 맨 위 항목을 고르지 않은 것입니다.

## 윈도우에서 SD 카드를 포맷하는 방법

윈도우에서는 파일 탐색기에서 포맷합니다.

1. SD 카드를 PC에 연결하고 파일 탐색기에서 내 PC를 엽니다.
2. SD 카드 드라이브를 마우스 오른쪽 버튼으로 누르고 포맷을 선택합니다.
3. 파일 시스템에서 32GB 이하 카드는 FAT32, 32GB를 넘는 카드는 exFAT을 고릅니다.
4. 볼륨 레이블에 카드 이름을 입력합니다.
5. 시작을 누르고 확인합니다.

명령 프롬프트에서는 `format E: /FS:exFAT /Q /V:CAMERA`처럼 입력합니다. E는 예시이므로 내 카드의 드라이브 문자로 바꾸세요. 문자를 잘못 입력하면 다른 드라이브가 지워집니다.

`/Q`는 빠른 포맷입니다. [Microsoft의 format 명령 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format)는 상태가 좋다고 아는 드라이브에만 빠른 포맷을 쓰라고 설명합니다. 카드가 자주 오류를 낸다면 `/Q`를 빼거나 빠른 포맷을 끄세요.

## SD 카드 포맷 뒤에 아이폰에서 확인하는 방법

카드를 넣은 리더를 아이폰에 연결하고 파일 앱의 둘러보기 화면에서 위치 목록을 봅니다. 카드 이름이 보이면 파일을 복사할 수 있습니다.

사진을 카드로 옮기는 순서는 [아이폰 사진 SD 카드로 옮기기](/blog/ko/iphone-photos-to-sd-card)에 있습니다. 카드 이름이 보이지 않으면 [아이폰 SD 카드 슬롯 글](/blog/ko/iphone-sd-card-slot)의 연결 조건을 확인하세요.

## USB 메모리에 정기적으로 백업하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. 카드 리더에서의 동작은 확인하지 않았습니다. USB 메모리 형식을 바꾸는 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store에서 받을 수 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## SD 카드 포맷 자주 묻는 질문

### SD 카드를 포맷하면 자료가 지워지나요?

지워집니다. Apple 안내도 저장장치를 지우면 모든 내용이 삭제된다고 설명합니다. 남길 파일은 포맷 전에 다른 곳에 복사하세요.

### SD 카드 초기화와 포맷은 같은 말인가요?

이 글에서는 같은 뜻으로 씁니다. 아이폰 파일 앱과 Mac 디스크 유틸리티는 이 작업을 지우기라고 부릅니다.

### 128GB SD 카드는 FAT32와 exFAT 중 무엇이 맞나요?

SD Association 기준으로 32GB를 넘는 SDXC 카드의 기본 형식은 exFAT입니다. FAT32만 읽는 기기에 꽂을 카드가 아니라면 exFAT으로 포맷하세요.

### 카메라에서 포맷한 카드를 아이폰에서 쓸 수 있나요?

카드 형식이 Apple 목록에 있고 데이터 파티션이 하나라면 파일 앱에서 열 수 있습니다. 보이지 않으면 Mac이나 PC에서 형식을 확인하세요.

### SD 카드 포맷 프로그램은 꼭 써야 하나요?

SD Association은 자체 포맷 프로그램을 강하게 권합니다. 운영체제 도구로도 포맷은 되지만 SD 카드에 최적화되지 않아 성능이 떨어질 수 있다고 설명합니다.
