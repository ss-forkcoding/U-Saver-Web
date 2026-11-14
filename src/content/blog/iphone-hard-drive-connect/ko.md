---
title: "아이폰 외장하드 연결 방법: 전원, 형식, 연결 순서, 직접 저장까지"
description: "아이폰 외장하드 연결에 필요한 전원과 케이블, 아이폰이 읽는 형식, 파일 앱에서 여는 순서, 사진과 ProRes 영상을 외장하드에 직접 저장하는 조건을 Apple 안내 기준으로 정리했습니다."
date: 2026-11-14
---

## 핵심 요약

아이폰 외장하드 연결은 외장하드를 아이폰의 충전 단자에 연결해 파일 앱에서 여는 방식입니다. USB-C 아이폰은 USB-C 케이블로, Lightning 아이폰은 카메라 어댑터로 연결합니다.

Apple 안내는 외장 하드디스크가 아이폰과 함께 쓸 때 외부 전원이 필요한 경우가 많다고 설명합니다. 연결하기 전에 전원부터 준비하세요.

외장하드는 데이터 파티션이 하나여야 하고 Apple 목록에 있는 형식이어야 합니다. 윈도우에서 많이 쓰는 NTFS는 목록에 없습니다.

"외장하드를 꽂았는데 아무 반응이 없어요." "아이폰에서 외장하드에 바로 저장할 수 있나요?" 외장하드는 USB 메모리나 SSD보다 연결 조건을 더 많이 탑니다. 이 글은 연결 전에 볼 세 가지, 단자별 연결 구성, 파일 앱에서 여는 순서, 외장하드에 직접 저장하는 방법을 차례로 정리합니다.

## 아이폰 외장하드 연결 전에 무엇을 확인하나요?

전원, 형식, 파티션 세 가지를 봅니다. 기준은 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)입니다.

| 확인할 것 | 기준 | 확인 방법 |
| --- | --- | --- |
| 전원 | 외장하드가 스스로 전원을 받는지 | 외장하드에 전원 어댑터 단자가 있는지, 제조사 사양에 전원 조건이 있는지 봅니다 |
| 형식 | APFS, APFS(암호화), macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나 | Mac의 디스크 유틸리티나 윈도우의 파일 탐색기에서 봅니다 |
| 파티션 | 데이터 파티션 하나 | Mac의 디스크 유틸리티나 윈도우의 디스크 관리에서 봅니다 |

FAT32는 파일 하나가 4GiB를 넘을 수 없습니다. exFAT은 파일 하나의 최대 크기가 2^64-1바이트입니다. 두 수치는 [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) 기준입니다. 긴 영상을 저장하고 윈도우 PC에서도 열어 볼 외장하드라면 exFAT이 맞습니다.

NTFS 외장하드는 포맷해야 아이폰에서 씁니다. 포맷하면 자료가 모두 지워지므로 먼저 다른 곳에 복사하세요. 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다. USB 메모리를 예로 들었지만 Mac과 윈도우의 순서는 외장하드에도 같습니다.

## 아이폰 외장하드 연결에 전원은 어떻게 더하나요?

외장하드가 스스로 전원을 받지 못하면 아이폰 단자에 따라 아래처럼 연결합니다.

| 아이폰 단자 | Apple 안내의 연결 구성 |
| --- | --- |
| USB-C | 아이폰 → 전원이 공급되는 USB 허브 → 외장하드 |
| Lightning | 아이폰 → Lightning to USB 3 Camera Adapter(USB 전원 어댑터 연결) → 외장하드 |

출처는 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)입니다. Lightning to USB Camera Adapter도 저장장치를 연결하는 어댑터로 안내되어 있습니다. 다만 전원을 더하는 구성으로 Apple이 적은 것은 USB 3 카메라 어댑터입니다.

이 글은 특정 외장하드, 허브, 케이블을 시험하지 않았고 추천하지 않습니다. 소비 전력도 측정하지 않았습니다. 제조사 사양에 전원 조건이 있다면 그것을 따르세요. 어댑터 종류는 [아이폰 OTG 연결 조건](/blog/ko/iphone-otg-usb)에 더 자세히 정리했습니다.

## 아이폰에 외장하드를 연결하는 순서

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)를 따른 순서입니다.

1. 외장하드의 형식과 파티션 수를 확인합니다.
2. 외장하드에 전원이 필요하면 전원 어댑터나 전원이 공급되는 허브를 먼저 연결합니다.
3. 케이블, 허브, 어댑터를 아이폰의 충전 단자에 꽂고 외장하드를 연결합니다.
4. 파일 앱을 열고 둘러보기를 누릅니다.
5. 위치 아래의 외장하드 이름을 누릅니다.
6. 다 쓰면 외장하드를 충전 단자에서 뺍니다.

위치가 보이지 않으면 둘러보기를 한 번 더 누르세요. 외장하드 이름을 길게 누르면 이름 바꾸기, 지우기, 정보 가져오기를 고를 수 있습니다. 출처는 [Apple의 파일 전송 안내](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)입니다. 복사가 끝나기 전에 빼면 파일이 다 옮겨지지 않을 수 있으니 진행 표시가 사라진 뒤 분리하세요.

## 아이폰에서 외장하드에 직접 저장하는 방법

외장하드가 파일 앱에 보이면 컴퓨터 없이 저장할 수 있습니다. 저장할 항목에 따라 쓰는 앱이 다릅니다.

| 저장할 항목 | 쓰는 앱 | 방법 | 출처 |
| --- | --- | --- | --- |
| 사진, 영상 | 사진 앱 | 공유 버튼에서 수정되지 않은 원본 내보내기를 누르고 외장하드를 고릅니다 | [Apple 사진 다운로드 안내](https://support.apple.com/en-us/111762) |
| 문서, 파일 | 파일 앱 | 길게 눌러 복사한 뒤 외장하드 폴더에서 붙여넣기를 고릅니다 | [Apple 파일 전송 안내](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios) |
| ProRes 영상 | 카메라 앱 | 지원 모델에서 외장하드에 바로 녹화합니다 | [Apple ProRes 안내](https://support.apple.com/en-us/109041) |

사진, 영상, 연락처를 항목별로 저장하는 자세한 순서와 저장 뒤 확인할 항목은 [아이폰 외장하드 백업 방법](/blog/ko/backup-iphone-external-drive)에 정리했습니다.

## 아이폰 ProRes 영상을 외장하드에 바로 녹화할 수 있나요?

지원 모델이면 조건을 맞춰 시도할 수 있습니다. [Apple의 ProRes 안내](https://support.apple.com/en-us/109041)에 따르면 아이폰 15 Pro, 16 Pro, 17 Pro, 18 Pro 모델은 USB-C로 연결한 외부 저장장치에 ProRes를 바로 녹화합니다. 조건은 아래와 같습니다.

| 조건 | Apple 안내의 기준 |
| --- | --- |
| 형식 | exFAT |
| 4K60 ProRes | 쓰기 속도 초당 220MB 이상 |
| 4K120 ProRes | 쓰기 속도 초당 440MB 이상, 녹화할 때마다 먼저 다시 포맷 |
| 속도가 부족할 때 | Slow Recording Speed 메시지가 나올 수 있습니다 |

외장하드의 쓰기 속도는 제품마다 다릅니다. 이 글은 외장하드의 속도를 측정하지 않았습니다. 제조사 사양의 쓰기 속도를 위 기준과 비교하세요. Apple 안내는 ProRes 파일이 HEVC 파일보다 최대 30배 크다고 설명합니다. 아이폰에 녹화하려면 외부 저장장치를 분리합니다.

## 아이폰에서 외장하드가 안 보일 때

Apple 안내 내용을 확인 순서대로 묶었습니다.

| 순서 | 확인할 것 | 해야 할 일 |
| --- | --- | --- |
| 1 | 파일 앱 화면 | 둘러보기를 한 번 더 눌러 위치 목록을 엽니다 |
| 2 | 전원 | 전원 어댑터, 전원이 공급되는 허브, USB 3 카메라 어댑터와 USB 전원 어댑터 중 맞는 구성으로 다시 연결합니다 |
| 3 | 케이블 | USB-C 표준을 따르는 케이블인지 확인하고 다른 케이블로 바꿔 봅니다 |
| 4 | 형식과 파티션 | Mac이나 PC에서 확인합니다. NTFS거나 파티션이 여럿이면 자료를 옮긴 뒤 다시 포맷합니다 |
| 5 | 다른 저장장치 | USB 메모리를 꽂아 원인이 외장하드인지 아이폰 쪽인지 가립니다 |

케이블 기준은 [Apple USB-C 안내](https://support.apple.com/en-us/105099)에 있습니다. 같은 안내는 일부 USB-C 액세서리와 케이블이 Wi-Fi나 셀룰러 연결을 방해할 수 있다고 설명합니다. 외장하드를 연결한 동안 인터넷이 느려지면 다 쓴 뒤 분리하세요.

## 외장하드 전송 속도는 무엇이 정하나요?

아이폰 모델, 케이블, 외장하드가 함께 정합니다. 아이폰 쪽 최대 규격은 [Apple USB-C 안내](https://support.apple.com/en-us/105099)와 [Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280) 기준입니다.

| 아이폰 | 최대 규격 | 조건 |
| --- | --- | --- |
| 아이폰 15 Pro, 16 Pro, 17 Pro, 18 Pro 모델, iPhone Duo | USB 3.2 Gen 2, 최대 10Gbit/s | 10Gbit/s를 지원하는 USB 3 케이블을 따로 씁니다 |
| 그 밖의 USB-C 아이폰 | USB 2 | 아이폰에 들어 있는 케이블도 USB 2 속도입니다 |
| Lightning 아이폰 | USB 2 | 어댑터와 관계없이 USB 2 속도입니다 |

위 수치는 규격상 최대치이고 외장하드 자체의 속도는 따로 봐야 합니다. 이 글은 실제 전송 속도를 측정하지 않았습니다. 외장 SSD와 연결 조건을 비교하려면 [아이폰 SSD 연결 방법](/blog/ko/iphone-external-ssd-connect)을 보세요.

## USB 메모리에 정기적으로 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. 외장하드에서의 동작은 확인하지 않았습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비 중이며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

USB 메모리의 연결, 형식, 용량은 [아이폰 외장 메모리 총정리](/blog/ko/iphone-usb-drive-guide)에 모았습니다.

## 아이폰 외장하드 연결 자주 묻는 질문

### 전원 없이 아이폰에 외장하드를 연결할 수 있나요?

외장하드에 따라 다릅니다. Apple 안내는 외장 하드디스크에 외부 전원이 필요한 경우가 많다고 설명합니다. 연결되지 않으면 전원이 공급되는 허브나 USB 3 카메라 어댑터와 USB 전원 어댑터로 시험하세요.

### Lightning 아이폰에도 외장하드를 연결할 수 있나요?

연결할 수 있습니다. Apple 안내대로 Lightning to USB 3 Camera Adapter나 Lightning to USB Camera Adapter를 거칩니다. 전원을 더하려면 USB 3 카메라 어댑터에 USB 전원 어댑터를 연결합니다. 전송 속도는 USB 2입니다.

### NTFS 외장하드도 아이폰에서 열리나요?

NTFS는 Apple의 외부 저장장치 형식 목록에 없습니다. 아이폰에서 쓰려면 자료를 옮긴 뒤 exFAT으로 포맷하세요. 포맷하지 않으려면 윈도우 PC를 거쳐 사진을 옮기는 방법이 [아이폰 외장하드 백업 방법](/blog/ko/backup-iphone-external-drive)에 있습니다.

### 아이폰에서 외장하드를 포맷할 수 있나요?

USB-C 아이폰은 파일 앱에서 외장하드 이름을 길게 누르고 지우기를 골라 APFS, ExFAT, MS-DOS(FAT) 중 하나로 포맷합니다. Lightning 아이폰은 Mac이나 윈도우 PC에서 포맷하세요. 포맷하면 자료가 모두 지워집니다.

### 외장하드에 저장한 내용은 암호화되나요?

형식에 따라 다릅니다. Apple 목록에는 APFS(암호화)가 있습니다. [Microsoft 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에서 exFAT과 FAT32는 파일 시스템 수준 암호화를 지원하지 않음으로 나옵니다. exFAT 외장하드를 잃어버리면 다른 사람이 내용을 볼 수 있으니 보관에 유의하세요.
