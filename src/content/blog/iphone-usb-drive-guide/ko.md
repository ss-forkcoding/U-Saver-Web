---
title: "아이폰 외장 메모리 총정리: USB 연결, 형식, 용량, 백업까지"
description: "아이폰 외장 메모리로 USB를 쓸 때 필요한 단자, 어댑터, 형식, 용량을 한곳에 정리했습니다. 내 상황에 맞는 사용법과 백업 방법도 찾아보세요."
date: 2026-11-10
---

## 핵심 요약

아이폰 외장 메모리로 가장 쉽게 쓸 수 있는 장치는 USB 메모리입니다. 충전 단자에 연결하고 파일 앱에서 엽니다.

먼저 세 가지를 맞춥니다. 아이폰 단자에 맞는 연결 방법, 데이터 파티션 1개, 지원되는 형식입니다.

형식은 exFAT이 무난합니다. FAT32는 4GB가 넘는 파일을 저장하지 못하고, NTFS는 Apple의 지원 목록에 없습니다.

USB에는 사진, 영상, 연락처, 파일을 항목별로 저장합니다. 메시지와 앱 데이터까지 보관하려면 iCloud나 컴퓨터 백업을 함께 쓰세요.

"USB를 사면 바로 쓸 수 있나요?" "어댑터도 필요한가요?" "사진을 옮기려면 어떤 앱을 여나요?" 아이폰에 처음 USB를 연결할 때 나오는 질문입니다. 이 글은 전체 흐름을 정리하고, 단계별 자세한 방법은 각 글로 연결합니다.

## 아이폰 외장 메모리로 무엇을 할 수 있나요?

하려는 일에 따라 쓰는 앱이 다릅니다. 아래 표에서 내 목적을 찾아 자세한 글로 이동하세요.

| 하려는 일 | 쓰는 앱 | 자세한 글 |
| --- | --- | --- |
| USB의 파일 열기, 복사 | 파일 앱 | [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide) |
| 어댑터 고르기 | 없음 | [아이폰 OTG 연결 조건](/blog/ko/iphone-otg-usb) |
| 사진 옮기기 | 사진 앱 | [아이폰 사진 USB로 옮기기](/blog/ko/iphone-photos-to-usb) |
| 긴 영상 옮기기 | 사진 앱 | [아이폰 동영상 옮기기](/blog/ko/iphone-videos-to-usb) |
| 항목별 백업 | 사진, 연락처, 파일 앱 | [아이폰 USB 백업 방법](/blog/ko/backup-iphone-to-usb) |
| 컴퓨터 없이 백업 | iCloud 또는 USB | [컴퓨터 없이 아이폰 백업](/blog/ko/backup-iphone-without-computer) |

## 내 아이폰에는 어떤 외장 메모리를 연결하나요?

단자에 따라 연결 방법이 정해집니다. [Apple 안내](https://support.apple.com/en-us/105099)에 따르면 iPhone 15 이후 모델은 USB-C 단자를 씁니다.

| 아이폰 단자 | USB 단자 | 필요한 것 |
| --- | --- | --- |
| USB-C | USB-C | 바로 꽂습니다 |
| USB-C | USB-A | USB-C to USB-A 어댑터 |
| Lightning | USB-A | Lightning to USB Camera Adapter 또는 Lightning to USB 3 Camera Adapter |

Lightning 어댑터 이름은 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 나온 제품입니다. 일부 아이폰 전용 제품은 제조사 앱이 필요할 수 있으니 구매 전에 상품 설명을 확인하세요.

속도는 모델과 케이블에 따라 달라집니다. Apple 안내에 따르면 iPhone 15 Pro, 16 Pro, 17 Pro, 18 Pro 계열과 iPhone Duo는 USB 3 케이블을 쓸 때 최대 10Gbit/s를 지원합니다. 아이폰에 들어 있는 USB-C 케이블은 USB 2 속도입니다.

## 아이폰 외장 메모리는 어떤 형식이어야 하나요?

Apple은 외부 저장장치에 데이터 파티션이 하나만 있어야 한다고 안내합니다. 지원 형식은 APFS, 암호화된 APFS, macOS 확장(HFS+), exFAT, FAT32, FAT입니다.

| 형식 | 파일 하나의 최대 크기 | Apple 지원 목록 | 맞는 경우 |
| --- | --- | --- | --- |
| exFAT | 2^64-1바이트 | 있습니다 | 긴 영상을 저장하거나 윈도우 PC와 함께 쓸 때 |
| FAT32 | 4GiB | 있습니다 | 4GB가 넘는 파일을 저장하지 않을 때 |
| NTFS | 2^64-1바이트 | 없습니다 | 아이폰에 쓰려면 포맷이 필요합니다 |

파일 크기는 [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) 기준입니다. 포맷 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)과 [USB FAT32 포맷 방법](/blog/ko/format-usb-fat32)에 있습니다.

포맷하면 USB의 자료가 모두 지워집니다. USB-C 아이폰은 [파일 앱](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)에서 APFS, ExFAT, MS-DOS(FAT)로 포맷할 수 있습니다. Lightning 아이폰은 Mac이나 윈도우 PC를 쓰세요.

## 아이폰 외장 메모리 용량은 얼마나 필요한가요?

저장할 자료보다 큰 USB가 필요합니다. 먼저 내 자료의 크기를 확인하세요.

1. 설정 앱을 엽니다.
2. 일반을 누릅니다.
3. iPhone 저장 공간을 누르면 앱별 사용량이 나옵니다.

이 경로는 [Apple의 저장 공간 확인 안내](https://support.apple.com/en-us/108429)를 따른 것입니다. 앞으로 찍을 사진과 영상까지 고려해 여유를 두세요.

## 아이폰에 외장 메모리를 처음 연결하는 순서

1. 표를 보고 단자에 맞는 USB나 어댑터를 준비합니다.
2. USB가 exFAT이나 FAT32인지 확인하고, 필요하면 포맷합니다.
3. USB를 아이폰의 충전 단자에 연결합니다.
4. 파일 앱을 열고 둘러보기를 누른 뒤 위치 아래의 USB 이름을 누릅니다.
5. 파일을 복사합니다. 사진과 영상은 사진 앱에서 내보냅니다.
6. 복사가 끝나면 충전 단자에서 USB를 뽑습니다.

아이폰은 USB를 연결해도 창을 띄우지 않습니다. 위치가 보이지 않으면 둘러보기를 한 번 더 누릅니다. 복사 중에 뽑으면 파일이 빠지거나 손상될 수 있으니 진행 표시가 사라진 뒤 뽑으세요.

## 아이폰에서 외장 메모리가 보이지 않으면?

파일 앱의 위치 목록에 USB 이름이 없으면 아래 순서로 확인합니다.

| 순서 | 확인할 것 | 조치 |
| --- | --- | --- |
| 1 | 연결 상태 | USB와 어댑터를 끝까지 다시 꽂습니다 |
| 2 | 형식 | PC나 Mac에서 확인합니다. NTFS라면 자료를 옮긴 뒤 포맷합니다 |
| 3 | 파티션 수 | 파티션이 여러 개면 하나로 포맷합니다 |
| 4 | 전원 | 전원 공급 USB 허브를 쓰거나 Lightning to USB 3 Camera Adapter에 USB 전원 어댑터를 연결합니다 |

Apple 안내는 외장 하드디스크에 외부 전원이 필요한 경우가 많다고 설명합니다. USB 메모리가 보이지 않을 때도 4번 방법으로 전원을 더해 확인할 수 있습니다.

## USB와 iCloud, 컴퓨터 백업은 어떻게 나눠 쓰나요?

USB는 자료의 사본을 내 손에 두는 방법입니다. [Apple의 아이폰 백업](https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios)은 iCloud나 컴퓨터에 저장합니다.

| 자료 | USB에 저장하는 방법 | 함께 쓸 방법 |
| --- | --- | --- |
| 사진, 영상 | 사진 앱에서 [수정되지 않은 원본 내보내기](https://support.apple.com/en-us/111762) | 필요하면 iCloud 사진 |
| 연락처 | 연락처 앱에서 [목록 내보내기](https://support.apple.com/guide/iphone/export-contacts-iph075ddebf2/ios) | iCloud 또는 컴퓨터 백업 |
| 파일 | 파일 앱에서 복사 | iCloud Drive 또는 컴퓨터 |
| 메시지, 앱 데이터, 설정 | 기본 방법이 없습니다 | iCloud 또는 컴퓨터 백업 |

새 아이폰으로 옮길 계획이라면 iCloud나 컴퓨터 백업을 쓰세요. 사진과 연락처의 사본을 따로 보관하려면 USB가 맞습니다.

## 사진, 영상, 연락처를 앱 하나로 저장하고 싶다면

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로 exFAT이나 FAT32 USB를 쓰며 iOS 26 이상에서 동작합니다. U-Saver는 App Store에서 받을 수 있고 가격은 4,900원이며 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정을 저장하지 않고 U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 아이폰 외장 메모리 자주 묻는 질문

### 아이폰에 외장 메모리를 바로 꽂으면 되나요?

USB-C 아이폰에 USB-C 메모리를 쓰면 바로 꽂습니다. USB-A 메모리나 Lightning 아이폰에는 어댑터가 필요합니다.

### 아이폰 외장 메모리에 NTFS USB를 쓸 수 있나요?

NTFS는 Apple의 지원 형식 목록에 없습니다. 자료를 다른 곳에 옮긴 뒤 exFAT으로 포맷하세요.

### 4GB가 넘는 영상을 저장하려면 어떤 형식을 쓰나요?

exFAT을 쓰세요. FAT32는 파일 하나가 4GB를 넘으면 저장하지 못합니다.

### USB에 아이폰을 통째로 백업할 수 있나요?

Apple 안내의 아이폰 백업 위치는 iCloud와 컴퓨터입니다. USB에는 사진, 영상, 연락처, 파일을 항목별로 저장합니다.

### 외장 메모리에 넣은 자료는 안전한가요?

USB를 잃어버리면 다른 사람이 파일을 열 수 있습니다. 중요한 자료는 다른 곳에도 사본을 두고 USB는 안전한 곳에 보관하세요.
