---
title: "아이폰 SSD 연결 방법: 케이블, 형식, 전원, 속도 확인하기"
description: "아이폰 SSD 연결에 필요한 케이블과 어댑터, 아이폰이 읽는 형식, 전원이 부족할 때 대처, 모델별 전송 속도를 Apple 안내 기준으로 정리했습니다."
date: 2026-11-13
---

## 핵심 요약

아이폰 SSD 연결은 외장 SSD를 아이폰의 충전 단자에 꽂아 파일 앱에서 여는 방식입니다. USB-C 아이폰은 USB-C 케이블로 바로 연결하고, Lightning 아이폰은 카메라 어댑터를 거칩니다.

SSD는 데이터 파티션이 하나여야 하고 Apple 목록에 있는 형식이어야 합니다. NTFS는 목록에 없습니다.

USB 3 속도는 일부 Pro 모델만 지원합니다. 아이폰에 들어 있는 케이블은 USB 2 속도이므로 빠르게 옮기려면 USB 3 케이블이 따로 필요합니다.

"SSD를 꽂았는데 아이폰에서 안 보여요." "영상 옮기는 속도가 생각보다 느려요." 아이폰에 외장 SSD를 처음 연결하면 이런 일이 생깁니다. 이 글은 연결 전에 맞출 조건과 연결 순서, 안 보일 때 확인할 항목을 차례로 정리합니다.

## 아이폰 SSD 연결에 무엇이 필요한가요?

아이폰 단자가 연결 방법을 정합니다. [Apple 안내](https://support.apple.com/en-us/105099)에 따르면 아이폰 15 이후 모델은 USB-C 단자를 씁니다. 그 이전 모델은 Lightning 단자입니다.

| 아이폰 단자 | 연결 방법 | 근거 |
| --- | --- | --- |
| USB-C | SSD 단자가 USB-C면 양쪽이 USB-C인 케이블로 연결합니다 | [Apple USB-C 안내](https://support.apple.com/en-us/105099) |
| Lightning | Lightning to USB 3 Camera Adapter나 Lightning to USB Camera Adapter를 거칩니다 | [Apple 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |

Apple은 USB-C 표준을 따르지 않는 기기와 케이블은 제대로 동작하지 않을 수 있다고 설명합니다. 이 글은 특정 SSD나 케이블을 시험하지 않았고 추천하지 않습니다. 어댑터 종류는 [아이폰 OTG 연결 조건](/blog/ko/iphone-otg-usb)에 더 자세히 정리했습니다.

## 아이폰은 어떤 형식의 외장 SSD를 읽나요?

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 따르면 외부 저장장치는 데이터 파티션이 하나여야 합니다. 형식은 아래 중 하나여야 합니다.

| 형식 | 아이폰 | 함께 쓰기 좋은 곳 |
| --- | --- | --- |
| APFS, APFS(암호화), macOS 확장(HFS+) | 읽습니다 | 아이폰, Mac |
| exFAT | 읽습니다 | 아이폰, Mac, 윈도우 |
| FAT32, FAT | 읽습니다 | 오래된 기기까지. 파일 하나가 4GiB를 넘지 못합니다 |
| NTFS | 목록에 없습니다 | 윈도우 |

FAT32의 파일 크기 제한은 [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) 기준입니다. 같은 표에서 exFAT의 파일 하나 최대 크기는 2^64-1바이트입니다. 윈도우 PC와 함께 쓰고 긴 영상도 옮길 SSD라면 exFAT이 맞습니다.

새로 산 SSD의 형식은 제품마다 다를 수 있습니다. 연결 전에 Mac이나 PC에서 형식과 파티션 수를 확인하세요. 형식을 바꾸는 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다. USB 메모리를 예로 들었지만 아이폰 파일 앱과 Mac 디스크 유틸리티의 순서는 외장 SSD에도 같습니다.

## 아이폰에 외장 SSD를 연결하는 순서

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)를 따른 순서입니다.

1. SSD가 데이터 파티션 하나에 Apple 목록의 형식인지 확인합니다.
2. SSD에 남길 자료가 있다면 형식을 바꾸기 전에 다른 곳에 복사합니다.
3. 아이폰 단자에 맞는 케이블이나 어댑터를 준비합니다.
4. 케이블이나 어댑터를 아이폰의 충전 단자에 꽂고 SSD를 연결합니다.
5. 파일 앱을 열고 둘러보기를 누른 뒤 위치 아래의 SSD 이름을 누릅니다.
6. 다 쓰면 SSD를 충전 단자에서 뺍니다.

위치가 보이지 않으면 둘러보기를 한 번 더 누르세요. SSD 이름을 길게 누르면 이름 바꾸기, 지우기, 정보 가져오기를 고를 수 있습니다. 출처는 [Apple의 파일 전송 안내](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)입니다.

## 아이폰 SSD 연결에 전원이 따로 필요한가요?

Apple 안내는 외장 하드디스크가 아이폰과 함께 쓸 때 외부 전원이 필요한 경우가 많다고 설명합니다. 외장 SSD에 대한 별도 기준은 Apple 안내에 없습니다. SSD가 연결되지 않거나 연결이 자주 끊기면 아래 방법으로 전원을 더해 시험하세요.

| 아이폰 단자 | Apple 안내의 전원 공급 방법 |
| --- | --- |
| USB-C | 전원이 공급되는 USB 허브를 거쳐 연결합니다 |
| Lightning | Lightning to USB 3 Camera Adapter에 USB 전원 어댑터를 연결합니다 |

출처는 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)입니다. 이 글은 SSD별 소비 전력을 측정하지 않았습니다. 제조사 사양에 외부 전원 조건이 있다면 그것을 따르세요.

## 아이폰 SSD 전송 속도는 어느 정도인가요?

모델과 케이블이 속도를 정합니다. [Apple USB-C 안내](https://support.apple.com/en-us/105099)와 [Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)를 합친 표입니다.

| 아이폰 | 최대 규격 | 조건 |
| --- | --- | --- |
| 아이폰 15 Pro, 16 Pro, 17 Pro, 18 Pro 모델, iPhone Duo | USB 3.2 Gen 2, 최대 10Gbit/s | 10Gbit/s를 지원하는 USB 3 케이블을 따로 씁니다 |
| 그 밖의 USB-C 아이폰 | USB 2 | 아이폰에 들어 있는 케이블도 USB 2 속도입니다 |
| Lightning 아이폰 | USB 2 | 어댑터와 관계없이 USB 2 속도입니다 |

위 수치는 규격상 최대치입니다. 이 글은 실제 전송 속도를 측정하지 않았습니다. 큰 영상을 옮기는 순서는 [아이폰 동영상 옮기기](/blog/ko/iphone-videos-to-usb)에서 확인하세요.

## 아이폰에서 SSD가 안 보일 때

Apple 안내 내용을 확인 순서대로 묶었습니다.

| 순서 | 확인할 것 | 해야 할 일 |
| --- | --- | --- |
| 1 | 파일 앱 화면 | 둘러보기를 한 번 더 눌러 위치 목록을 엽니다 |
| 2 | 케이블과 어댑터 | USB-C 표준을 따르는 케이블인지 확인하고 다른 케이블로 바꿔 봅니다 |
| 3 | 전원 | 전원이 공급되는 허브나 USB 3 카메라 어댑터와 전원 어댑터로 다시 연결합니다 |
| 4 | 형식과 파티션 | Mac이나 PC에서 확인합니다. NTFS거나 파티션이 여럿이면 다시 포맷합니다 |
| 5 | 다른 저장장치 | 다른 SSD나 USB 메모리로 시험해 원인이 SSD인지 아이폰 쪽인지 가립니다 |

Apple은 일부 USB-C 액세서리와 케이블이 Wi-Fi나 셀룰러 연결을 방해할 수 있다고 설명합니다. SSD를 연결한 동안 인터넷이 느려지면 다 쓴 뒤 분리하거나 다른 케이블을 써 보세요. 출처는 [Apple USB-C 안내](https://support.apple.com/en-us/105099)입니다.

## SSD와 USB 메모리는 무엇이 다른가요?

아이폰이 읽는 형식과 파일 앱의 사용 순서는 같습니다. 연결 방법이 다릅니다.

| 구분 | 외장 SSD | USB 메모리 |
| --- | --- | --- |
| 연결 | 단자에 맞는 케이블이나 어댑터로 연결합니다 | USB-C 메모리는 USB-C 아이폰에 바로 꽂습니다 |
| 형식 | Apple 목록의 형식, 데이터 파티션 하나 | 같습니다 |
| 여는 앱 | 파일 앱 | 같습니다 |

USB 메모리의 연결, 형식, 용량은 [아이폰 외장 메모리 총정리](/blog/ko/iphone-usb-drive-guide)에 모았습니다. 카드 리더를 쓰는 경우는 [아이폰 SD 카드 총정리](/blog/ko/iphone-sd-card-guide)를 보세요.

## USB 메모리에 정기적으로 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. 외장 SSD에서의 동작은 확인하지 않았습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비 중이며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 아이폰 SSD 연결 자주 묻는 질문

### Lightning 아이폰에도 외장 SSD를 연결할 수 있나요?

연결할 수 있습니다. Apple 안내대로 Lightning to USB 3 Camera Adapter나 Lightning to USB Camera Adapter를 거칩니다. 전송 속도는 USB 2입니다.

### NTFS로 포맷된 SSD도 아이폰에서 쓸 수 있나요?

NTFS는 Apple의 외부 저장장치 형식 목록에 없습니다. 아이폰에서 쓰려면 자료를 옮긴 뒤 exFAT으로 포맷하세요.

### 아이폰 상자에 든 케이블로 연결해도 되나요?

연결은 됩니다. 다만 Apple 안내에 따르면 이 케이블은 USB 2 속도를 지원합니다. USB 3를 지원하는 Pro 모델에서 빠르게 옮기려면 10Gbit/s를 지원하는 USB 3 케이블을 쓰세요.

### 4GB가 넘는 영상을 SSD에 저장하려면?

exFAT이나 APFS 형식을 쓰세요. FAT32는 파일 하나가 4GiB를 넘을 수 없습니다.

### SSD의 내용은 암호화되나요?

형식에 따라 다릅니다. Apple 목록에는 APFS(암호화)가 있습니다. [Microsoft 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에서 exFAT과 FAT32는 파일 시스템 수준 암호화를 지원하지 않음으로 나옵니다. exFAT SSD를 잃어버리면 다른 사람이 내용을 볼 수 있으니 보관에 유의하세요.
