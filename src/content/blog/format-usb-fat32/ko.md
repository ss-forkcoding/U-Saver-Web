---
title: "USB FAT32 포맷 방법: 4GB 파일 제한과 64GB USB 확인하기"
description: "USB FAT32 포맷 방법을 아이폰, Mac, 윈도우 순서로 정리했습니다. 4GB 파일 제한, 64GB USB에서 달라지는 점, exFAT을 골라야 하는 경우를 살펴보세요."
date: 2026-11-10
---

## 핵심 요약

USB FAT32 포맷은 USB의 저장 방식을 FAT32로 바꾸는 작업입니다. 포맷하면 USB의 자료가 모두 지워지므로 먼저 다른 곳에 복사합니다.

FAT32는 4GB가 넘는 파일을 저장하지 못합니다. 긴 영상을 옮길 USB라면 FAT32 대신 exFAT을 고르세요.

Apple은 윈도우와 함께 쓸 디스크가 32GB 이하면 MS-DOS(FAT), 32GB를 넘으면 ExFAT을 고르라고 안내합니다. 64GB USB는 FAT32로 포맷할 이유가 따로 없다면 exFAT이 맞습니다.

"작은 파일은 되는데 큰 영상만 복사가 안 돼요." "64GB USB를 FAT32로 포맷하고 싶어요." 이런 질문은 FAT32의 두 가지 제한에서 나옵니다. 파일 하나의 크기 제한과 USB 용량 기준입니다.

## USB FAT32 포맷은 언제 고르나요?

FAT32는 작은 USB에 4GB 이하 파일만 저장할 때 고릅니다. 함께 쓸 기기의 설명서에 FAT32만 적혀 있어도 FAT32가 필요합니다.

| 상황 | 고를 형식 |
| --- | --- |
| 4GB가 넘는 파일을 저장합니다 | exFAT |
| 32GB가 넘는 USB를 윈도우와 함께 씁니다 | exFAT |
| 32GB 이하 USB에 4GB 이하 파일만 저장합니다 | FAT32 또는 exFAT |
| 함께 쓸 기기의 설명서에 FAT32만 적혀 있습니다 | FAT32 |

두 형식의 차이는 아래와 같습니다.

| 항목 | FAT32 | exFAT |
| --- | --- | --- |
| 파일 하나의 최대 크기 | 4GiB | 2^64-1바이트 |
| Apple의 Mac 안내 기준 | 32GB 이하 | 32GB 초과 |
| 아이폰 외부 저장장치 | Apple 목록에 있습니다 | Apple 목록에 있습니다 |

파일 크기는 [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison), 용량 기준은 [Apple의 윈도우용 포맷 안내](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac), 아이폰 지원 형식은 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) 기준입니다.

## FAT32의 4GB 제한은 무엇인가요?

Microsoft 비교표는 FAT32의 최대 파일 크기를 4GiB로 적습니다. 이 글에서는 흔히 쓰는 표현대로 4GB라고 적습니다.

이 제한은 파일 하나에 적용됩니다. 작은 파일은 USB의 빈 공간만큼 저장할 수 있지만, 4GB가 넘는 영상 한 개는 빈 공간이 충분해도 저장되지 않습니다. FAT32로 다시 포맷해도 달라지지 않습니다.

긴 영상을 옮기려면 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)을 따르세요. 영상 크기를 확인하는 순서는 [아이폰 동영상 옮기기](/blog/ko/iphone-videos-to-usb)에 있습니다.

## 64GB USB를 FAT32로 포맷할 수 있나요?

64GB USB의 FAT32 포맷은 쓰는 환경에 따라 안내가 다릅니다. Apple은 32GB를 넘는 디스크에 ExFAT을 고르라고 설명합니다. 윈도우는 업데이트에 따라 명령줄 한도가 다릅니다.

| 환경 | 공식 안내 |
| --- | --- |
| Mac 디스크 유틸리티 | MS-DOS(FAT)는 32GB 이하, 32GB를 넘으면 ExFAT을 고릅니다 |
| 윈도우 기존 한도 | FAT32 파티션은 최대 32GB입니다. 64GB USB는 32GB만 쓰도록 포맷합니다 |
| 윈도우 명령줄(2026년 변경) | FAT32 포맷 한도가 32GB에서 2TB로 올라갑니다 |
| 아이폰 파일 앱 | 용량 한도를 따로 적지 않습니다 |

기존 한도는 [Microsoft의 WinPE USB 문서](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/winpe--use-a-single-usb-key-for-winpe-and-a-wim-file---wim?view=windows-11)에 있습니다. 2TB 변경은 [2026년 4월 30일 미리 보기 업데이트 KB5083631](https://support.microsoft.com/en-us/servicing/os/windows-11/2026/04/april-30-2026-kb5083631-os-builds-26200-8328-and-26100-8328-preview)에 적혀 있습니다. [Windows Insider 공지](https://blogs.windows.com/windows-insider/2026/04/17/releasing-windows-11-builds-26100-8313-and-26200-8313-to-the-release-preview-channel/)는 이 항목을 순차 적용으로 분류했습니다. PC마다 적용 시점이 다를 수 있습니다.

32GB만 쓰도록 포맷하면 64GB USB의 나머지 공간은 저장에 쓰지 못합니다. FAT32만 읽는 기기에 꽂을 USB가 아니라면 exFAT으로 포맷하세요.

## USB FAT32 포맷 전에 무엇을 확인하나요?

포맷하면 USB의 파일이 모두 지워집니다. 남길 자료는 먼저 다른 저장장치에 복사합니다.

USB 이름과 용량을 보고 포맷할 장치가 맞는지 확인하세요. 아이폰에서 쓸 USB는 Apple 안내대로 데이터 파티션이 하나여야 합니다.

## 아이폰에서 USB를 FAT32로 포맷하는 방법

[Apple의 파일 앱 안내](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)에 따르면 USB-C 단자가 있는 아이폰은 파일 앱에서 포맷을 바꿀 수 있습니다. FAT32 USB를 만들 때는 목록의 MS-DOS(FAT)를 고릅니다.

1. USB를 아이폰에 연결합니다.
2. 파일 앱을 열고 둘러보기를 누릅니다.
3. 위치 아래의 USB 이름을 길게 누른 뒤 지우기를 누릅니다.
4. 포맷 목록에서 MS-DOS(FAT)를 고르고 지우기를 한 번 더 누릅니다.

Lightning 아이폰은 이 안내의 대상이 아닙니다. Mac이나 윈도우 PC에서 포맷하세요. 연결에 필요한 어댑터는 [아이폰 OTG 연결 조건](/blog/ko/iphone-otg-usb)에 정리했습니다.

## Mac에서 USB를 FAT32로 포맷하는 방법

Mac에서는 디스크 유틸리티를 씁니다. [Apple의 디스크 유틸리티 안내](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac)를 따른 순서입니다.

1. 응용 프로그램의 유틸리티 폴더에서 디스크 유틸리티를 엽니다.
2. 메뉴에서 보기, 모든 기기 보기를 선택합니다.
3. 사이드바에서 USB의 맨 위 항목을 선택하고 지우기를 누릅니다.
4. 설계에서 GUID 파티션 맵을 고릅니다.
5. 포맷에서 MS-DOS(FAT)를 고릅니다.
6. 이름을 입력합니다.
7. 지우기를 누른 뒤 완료를 누릅니다.

설계 메뉴가 보이지 않으면 맨 위 항목을 고르지 않은 것입니다. Apple의 윈도우용 포맷 안내에 따르면 이름은 11자까지 쓸 수 있습니다.

## 윈도우에서 USB를 FAT32로 포맷하는 방법

아래 순서는 [Microsoft의 format 명령 문서](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format)를 따릅니다.

1. USB를 PC에 연결하고 드라이브 문자를 확인합니다.
2. 명령 프롬프트를 엽니다.
3. `format E: /FS:FAT32 /Q /V:BACKUP`처럼 입력합니다.
4. 화면의 안내를 읽고 진행합니다.

E는 예시이므로 내 USB의 드라이브 문자로 바꾸세요. 문자를 잘못 입력하면 다른 드라이브가 지워집니다. 볼륨 레이블은 11자까지 쓸 수 있습니다.

`/Q`는 빠른 포맷입니다. 파일 목록을 지우고 불량 영역 검사를 건너뜁니다. Microsoft는 상태가 좋다고 아는 드라이브에만 쓰라고 설명합니다. USB가 자주 오류를 낸다면 `/Q`를 빼고 실행하세요.

32GB가 넘는 USB에서 명령이 끝나지 않고 오류가 나면 2026년 변경이 그 PC에 아직 적용되지 않았을 수 있습니다. 이때는 exFAT으로 포맷하세요.

## USB FAT32 포맷 뒤에 아이폰에서 확인하는 방법

USB를 아이폰에 연결하고 파일 앱의 둘러보기 화면에서 위치 목록을 봅니다. USB 이름이 보이면 파일을 복사할 수 있습니다. 복사 순서는 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 있습니다.

## U-Saver에는 FAT32 USB를 써도 되나요?

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱이며 exFAT이나 FAT32 USB를 쓸 수 있습니다. FAT32 USB에 들어가지 않는 영상은 기록에 예외로 표시되므로 4GB가 넘는 영상까지 저장하려면 exFAT으로 포맷하세요. U-Saver는 App Store 출시를 준비하고 있으며 iOS 26 이상에서 씁니다. 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정을 저장하지 않고 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## USB FAT32 포맷 자주 묻는 질문

### USB를 FAT32로 포맷하면 자료가 지워지나요?

지워집니다. 남길 파일은 포맷 전에 다른 곳에 복사하세요.

### FAT32 USB에 4GB가 넘는 영상을 저장할 수 있나요?

저장하지 못합니다. Microsoft 비교표의 FAT32 최대 파일 크기는 4GiB입니다. 큰 영상은 exFAT USB에 저장하세요.

### 64GB USB는 FAT32와 exFAT 중 무엇이 맞나요?

Apple 안내 기준으로는 exFAT이 맞습니다. FAT32만 지원하는 기기에 꽂을 USB일 때만 FAT32를 검토하세요.

### Mac 포맷 메뉴에서 FAT32가 어디 있나요?

Apple 안내는 이 항목을 MS-DOS(FAT)로 적습니다. 디스크 유틸리티의 포맷 메뉴에서 MS-DOS(FAT)를 고르세요.

### 아이폰에서 FAT32 USB를 쓸 수 있나요?

쓸 수 있습니다. Apple의 외부 저장장치 형식 목록에 FAT32가 있습니다. USB의 데이터 파티션은 하나여야 합니다.
