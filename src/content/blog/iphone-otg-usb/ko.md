---
title: "아이폰 OTG 되나요? USB 메모리 연결에 필요한 어댑터 정리"
description: "아이폰 OTG 연결 조건을 단자별로 정리했습니다. USB-C와 Lightning 아이폰에 맞는 어댑터, 전원이 필요한 경우, 인식되지 않을 때 확인할 항목을 살펴보세요."
date: 2026-11-09
---

## 핵심 요약

아이폰에도 USB 메모리를 연결할 수 있습니다. Apple 안내에는 OTG라는 말 대신 어댑터 이름과 외부 저장장치 조건이 적혀 있습니다.

아이폰 15 이후 USB-C 모델은 USB-C 메모리를 바로 꽂습니다. USB-A 메모리는 USB-C to USB-A 어댑터를 거칩니다.

Lightning 아이폰은 Lightning to USB Camera Adapter나 Lightning to USB 3 Camera Adapter가 필요합니다.

외장 하드디스크처럼 전력을 많이 쓰는 장치는 외부 전원이 필요할 수 있습니다.

"안드로이드에서 쓰던 OTG 케이블을 아이폰에도 쓸 수 있나요?" "어댑터는 어떤 걸 사야 하나요?" 아이폰에 USB를 연결하려는 분들이 구매 전에 묻는 질문입니다.

아이폰 OTG에서 중요한 것은 아이폰의 단자 종류입니다. 내 아이폰의 단자를 확인하면 필요한 어댑터가 정해집니다.

## 아이폰 OTG 연결이 되나요?

아이폰은 어댑터나 맞는 단자로 USB 메모리를 연결할 수 있습니다. [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)는 파일 앱 같은 지원 앱에서 USB 드라이브의 파일을 쓸 수 있다고 설명합니다.

흔히 말하는 OTG는 휴대폰에 USB 장치를 직접 연결하는 방식을 뜻합니다. 아이폰에서는 "카메라 어댑터"나 "USB-C 어댑터"로 검색해야 맞는 제품을 찾기 쉽습니다.

## 아이폰 단자별로 어떤 어댑터가 필요한가요?

아이폰 단자와 USB 메모리 단자의 조합으로 필요한 어댑터가 정해집니다. 아이폰 15 이후 모델은 USB-C이고 그 이전 모델은 Lightning입니다.

| 아이폰 단자 | USB 메모리 단자 | 필요한 것 |
| --- | --- | --- |
| USB-C | USB-C | 어댑터 없이 바로 꽂습니다 |
| USB-C | USB-A | USB-C to USB-A 어댑터 |
| Lightning | USB-A | Lightning to USB Camera Adapter 또는 Lightning to USB 3 Camera Adapter |
| Lightning | USB-C | 위 어댑터에 USB-A to USB-C 변환이 추가로 필요합니다. USB-A 메모리를 쓰는 편이 간단합니다 |

안드로이드용 마이크로 USB OTG 케이블은 아이폰 단자에 맞지 않습니다. USB-C OTG 어댑터는 모양이 맞아도 제품마다 동작이 다를 수 있습니다. 이 글은 타사 어댑터를 시험하지 않았으며, 위 표의 Lightning 어댑터 이름은 Apple 안내에 나온 제품입니다.

## Lightning 어댑터 두 가지는 무엇이 다른가요?

Apple 안내 기준으로 전원이 필요한 장치에는 Lightning to USB 3 Camera Adapter를 씁니다. 이 어댑터에 USB 전원 어댑터를 연결해 전원을 공급합니다.

| 어댑터 | 외부 전원 연결 | 어울리는 경우 |
| --- | --- | --- |
| Lightning to USB Camera Adapter | 없습니다 | 전력을 적게 쓰는 USB 메모리 |
| Lightning to USB 3 Camera Adapter | USB 전원 어댑터를 연결합니다 | 전원이 부족해 인식되지 않는 장치 |

USB-C 아이폰에서 전원이 더 필요하면 Apple 안내대로 전원이 공급되는 USB 허브를 씁니다.

## 아이폰 OTG 전송 속도는 모델마다 다른가요?

[Apple 안내](https://support.apple.com/en-us/105099)에 따르면 USB 3 데이터 전송을 지원하는 모델은 iPhone 15 Pro, 16 Pro, 17 Pro, 18 Pro 계열과 iPhone Duo입니다. 이 모델도 USB 3를 지원하는 케이블이나 장치를 써야 그 속도를 냅니다.

영상을 많이 옮긴다면 이 조건을 확인하세요. 사진 몇 장을 옮길 때는 체감 차이가 작습니다.

## 아이폰에 연결했는데 USB가 인식되지 않으면?

연결 뒤 파일 앱의 둘러보기 화면에서 위치 목록을 확인합니다. USB 이름이 없다면 아래 순서로 살펴보세요.

| 순서 | 원인 | 확인 방법 |
| --- | --- | --- |
| 1 | 전원 부족 | 전원을 공급하는 허브나 어댑터로 다시 연결합니다 |
| 2 | 지원하지 않는 형식 | PC나 Mac에서 형식을 봅니다. NTFS는 Apple 목록에 없습니다 |
| 3 | 파티션이 여러 개 | 파티션을 하나로 포맷합니다 |
| 4 | 어댑터 문제 | 다른 USB를 꽂아 어댑터가 동작하는지 봅니다 |

파일을 복사하는 순서는 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 정리했습니다. 포맷하면 USB의 자료가 지워지니 먼저 복사해 두세요.

## 연결한 USB로 사진과 영상을 백업하려면

어댑터로 연결한 USB에도 사진 앱에서 사진과 영상을 내보낼 수 있습니다. 순서는 [아이폰 사진 USB로 옮기기](/blog/ko/iphone-photos-to-usb)와 [아이폰 동영상 옮기기](/blog/ko/iphone-videos-to-usb)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱입니다. Lightning 아이폰은 USB 어댑터가 필요하고 USB 종류에 따라 외부 전원을 연결해야 할 수 있습니다. USB는 exFAT이나 FAT32 형식이어야 합니다.

U-Saver는 App Store에서 받을 수 있으며 iOS 26 이상에서 씁니다. 가격은 4,900원이고 한 번 결제합니다. 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 아이폰 OTG 자주 묻는 질문

### 아이폰 OTG 케이블은 따로 사야 하나요?

USB-C 아이폰에 USB-C 메모리를 쓴다면 필요 없습니다. USB-A 메모리를 쓰거나 Lightning 아이폰이라면 어댑터를 준비하세요.

### 안드로이드용 OTG 어댑터를 아이폰에 쓸 수 있나요?

마이크로 USB 제품은 단자가 맞지 않습니다. USB-C 제품은 꽂을 수 있어도 제품마다 동작이 다를 수 있으니 파일 앱에서 USB가 보이는지 확인하세요.

### 아이폰에 외장 하드디스크도 연결할 수 있나요?

연결할 수 있습니다. 다만 Apple 안내에 따르면 외장 하드디스크는 외부 전원이 필요한 경우가 많습니다. 전원이 공급되는 허브나 USB 3 카메라 어댑터와 전원 어댑터를 함께 쓰세요.

### 아이폰에 USB를 연결하면 어디서 파일을 보나요?

파일 앱의 둘러보기 화면에서 위치 목록의 USB 이름을 누릅니다.
