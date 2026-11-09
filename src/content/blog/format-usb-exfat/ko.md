---
title: "exFAT 포맷 방법: USB를 아이폰, Mac, 윈도우에서 포맷하기"
description: "USB를 exFAT으로 포맷하는 방법을 아이폰 파일 앱, Mac 디스크 유틸리티, 윈도우 순서로 정리했습니다. 포맷 전 확인할 항목과 FAT32와의 차이도 살펴보세요."
date: 2026-11-10
---

## 핵심 요약

exFAT 포맷은 USB의 저장 방식을 exFAT으로 바꾸는 작업입니다. 포맷하면 USB의 자료가 모두 지워지므로 먼저 다른 곳에 복사합니다.

USB-C 아이폰은 파일 앱에서 포맷할 수 있습니다. Lightning 아이폰이라면 Mac이나 윈도우 PC에서 포맷합니다.

FAT32는 4GB가 넘는 파일을 저장하지 못합니다. 긴 영상을 USB에 옮기려면 exFAT을 고르세요.

"영상을 복사하는데 파일이 너무 크다고 나와요." "USB를 꽂았는데 아이폰에서 안 보여요." 이럴 때 USB 형식을 확인해 보면 FAT32나 NTFS인 경우가 있습니다. exFAT으로 포맷하면 두 문제를 함께 해결할 수 있습니다.

## 왜 exFAT으로 포맷하나요?

exFAT은 FAT32의 4GB 파일 제한이 없고, 아이폰과 Mac, 윈도우에서 함께 쓸 수 있습니다.

| 형식 | 파일 하나의 최대 크기 | 아이폰 외부 저장장치 |
| --- | --- | --- |
| exFAT | 2^64-1바이트 | Apple 목록에 있습니다 |
| FAT32 | 4GiB | Apple 목록에 있습니다 |
| NTFS | 2^64-1바이트 | Apple 목록에 없습니다 |

파일 크기는 [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) 기준입니다. 아이폰에서 쓸 수 있는 형식은 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 나와 있습니다.

Apple은 Mac 안내에서 윈도우와 함께 쓸 디스크가 32GB 이하면 MS-DOS(FAT), 32GB를 넘으면 ExFAT을 고르라고 설명합니다. 32GB 이하 USB라도 4GB가 넘는 영상을 저장할 계획이면 exFAT이 맞습니다.

## 포맷하기 전에 무엇을 확인해야 하나요?

포맷하면 USB에 있던 파일이 모두 지워집니다. 아래 세 가지를 먼저 확인하세요.

| 확인할 것 | 해야 할 일 |
| --- | --- |
| USB에 남길 자료 | 다른 저장장치에 먼저 복사합니다 |
| 포맷할 장치 | USB 이름과 용량을 보고 다른 드라이브를 고르지 않았는지 확인합니다 |
| 파티션 수 | Apple 안내대로 데이터 파티션이 하나인지 확인합니다 |

## 아이폰에서 USB를 exFAT으로 포맷하는 방법

[Apple의 파일 앱 안내](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)에 따르면 USB-C 단자가 있는 아이폰은 파일 앱에서 포맷을 바꿀 수 있습니다.

1. USB를 아이폰에 연결합니다.
2. 파일 앱을 열고 둘러보기를 누릅니다.
3. 위치 아래의 USB 이름을 길게 누른 뒤 지우기를 누릅니다.
4. 포맷 목록에서 ExFAT을 고르고 지우기를 한 번 더 누릅니다.

같은 목록에 APFS와 MS-DOS(FAT)도 있습니다. 윈도우 PC와 함께 쓰거나 U-Saver를 쓸 USB라면 ExFAT을 고르세요.

Lightning 아이폰은 이 안내의 대상이 아닙니다. Mac이나 윈도우 PC에서 포맷하세요. USB 연결에 필요한 어댑터는 [아이폰 OTG 연결 조건](/blog/ko/iphone-otg-usb)에 정리했습니다.

## Mac에서 USB를 exFAT으로 포맷하는 방법

Mac에서는 디스크 유틸리티를 씁니다. [Apple의 디스크 유틸리티 안내](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac)를 따른 순서입니다.

1. 응용 프로그램의 유틸리티 폴더에서 디스크 유틸리티를 엽니다.
2. 메뉴에서 보기, 모든 기기 보기를 선택합니다.
3. 사이드바에서 USB의 맨 위 항목을 선택하고 지우기를 누릅니다.
4. 설계에서 GUID 파티션 맵을 고릅니다.
5. 포맷에서 ExFAT을 고릅니다.
6. 이름을 입력합니다.
7. 지우기를 누른 뒤 완료를 누릅니다.

설계 메뉴가 보이지 않으면 맨 위 항목을 고르지 않은 것입니다. [윈도우용 포맷 안내](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac)에 따르면 이름은 11자까지 쓸 수 있습니다.

## 윈도우에서 USB를 exFAT으로 포맷하는 방법

윈도우에서는 파일 탐색기에서 포맷합니다.

1. USB를 PC에 연결하고 파일 탐색기에서 내 PC를 엽니다.
2. USB 드라이브를 마우스 오른쪽 버튼으로 누르고 포맷을 선택합니다.
3. 파일 시스템에서 exFAT을 고릅니다.
4. 볼륨 레이블에 USB 이름을 입력합니다.
5. 시작을 누르고 확인합니다.

빠른 포맷은 파일 목록을 지우고 불량 영역 검사를 건너뜁니다. [Microsoft 안내](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format)는 상태가 좋다고 아는 드라이브에만 빠른 포맷을 쓰라고 설명합니다. USB가 자주 오류를 낸다면 빠른 포맷을 끄세요.

명령 프롬프트에서는 `format E: /FS:exFAT /Q /V:BACKUP`처럼 입력합니다. E는 예시이므로 내 USB의 드라이브 문자로 바꾸세요. 문자를 잘못 입력하면 다른 드라이브가 지워집니다.

윈도우 포맷은 드라이브 문자 하나에만 적용됩니다. 파티션이 여러 개인 USB라면 디스크 관리에서 기존 볼륨을 삭제하고 새 볼륨 하나를 만드세요.

## exFAT 포맷 뒤에 아이폰에서 확인하는 방법

USB를 아이폰에 연결하고 파일 앱의 둘러보기 화면에서 위치 목록을 봅니다. USB 이름이 보이면 파일을 복사할 수 있습니다. 복사 순서는 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 있습니다.

이름이 보이지 않으면 전원이 부족하거나 어댑터가 맞지 않을 수 있습니다. 긴 영상을 옮기는 순서는 [아이폰 동영상 옮기기](/blog/ko/iphone-videos-to-usb)에서 확인하세요.

## U-Saver에는 어떤 형식의 USB가 필요한가요?

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱입니다. USB는 exFAT이나 FAT32 형식이어야 합니다. APFS와 NTFS USB는 쓸 수 없습니다. 4GB가 넘는 영상까지 저장하려면 exFAT으로 포맷하세요.

U-Saver는 App Store 출시를 준비하고 있으며 iOS 26 이상에서 씁니다. 가격은 4,900원이고 한 번 결제합니다. 메시지, 앱 데이터, 아이폰 설정은 저장하지 않습니다. USB의 내용은 암호화되지 않으니 보관에 유의하세요. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## exFAT 포맷 자주 묻는 질문

### exFAT으로 포맷하면 USB 자료가 지워지나요?

지워집니다. Apple 안내도 저장장치를 지우면 모든 내용이 삭제된다고 설명합니다. 남길 파일은 포맷 전에 다른 곳에 복사하세요.

### FAT32 USB를 포맷 없이 exFAT으로 바꿀 수 있나요?

이 글에서 안내하는 아이폰, Mac, 윈도우의 방법은 모두 포맷입니다. 자료를 다른 곳에 옮긴 뒤 포맷하고 다시 복사하세요.

### NTFS USB도 아이폰에서 쓸 수 있나요?

NTFS는 Apple의 외부 저장장치 형식 목록에 없습니다. 아이폰에서 쓰려면 exFAT으로 포맷하세요.

### Lightning 아이폰에서도 포맷할 수 있나요?

Apple 안내의 파일 앱 포맷 방법은 USB-C 아이폰을 대상으로 합니다. Lightning 아이폰이라면 Mac이나 윈도우 PC를 쓰세요.

### exFAT USB는 암호화되나요?

Microsoft 비교표에서 exFAT의 파일 시스템 수준 암호화는 지원하지 않음으로 나옵니다. USB를 잃어버리면 다른 사람이 내용을 볼 수 있으니 보관 장소에 신경 쓰세요.
