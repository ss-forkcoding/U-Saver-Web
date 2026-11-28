---
title: "아이폰 OTG 되나요? USB 메모리 연결 방법과 인식 안 될 때 확인할 것"
description: "아이폰도 어댑터만 맞으면 USB 메모리를 씁니다. 아이폰 15 이후 USB-C와 Lightning 모델에 필요한 어댑터, 파일 앱에서 여는 법, OTG 인식 안 될 때 볼 포맷·파티션·전원을 정리했습니다."
date: 2026-11-09
updated: 2026-11-27
---

아이폰도 USB 메모리를 꽂아 쓸 수 있습니다. 다만 Apple은 OTG라는 말을 쓰지 않습니다. 단자에 맞는 어댑터를 쓰면 파일 앱에서 USB 안의 파일을 바로 열고 옮길 수 있습니다. 무엇이 필요한지는 아이폰 단자가 정합니다.

## 내 아이폰 단자부터 확인하세요

아이폰 15부터는 USB-C 단자이고, 아이폰 14까지는 Lightning 단자입니다. 단자와 USB 메모리 모양을 맞춰 보면 살 물건이 정해집니다.

| 아이폰 단자 | USB 메모리 단자 | 필요한 것 |
| --- | --- | --- |
| USB-C | USB-C | 없음. 바로 꽂습니다 |
| USB-C | USB-A | USB-C to USB-A 어댑터 |
| Lightning | USB-A | Lightning to USB Camera Adapter 또는 Lightning to USB 3 Camera Adapter |
| Lightning | USB-C | 위 어댑터에 USB-A to USB-C 변환을 더해야 합니다. USB-A 메모리를 쓰는 쪽이 간단합니다 |

Lightning 어댑터 두 가지는 전원 단자가 있는지가 다릅니다. USB 3 Camera Adapter에는 전원 어댑터를 연결할 수 있어서 전기를 많이 쓰는 외장 하드에 맞습니다. 일반 USB 메모리는 전원 단자가 없는 어댑터로도 충분한 경우가 많습니다.

## 안드로이드 OTG 케이블은 왜 안 맞나요?

안드로이드폰에 쓰던 마이크로 USB OTG 케이블은 아이폰 단자에 들어가지 않습니다. USB-C OTG 젠더는 아이폰 15 이후 모델에 꽂히긴 합니다. 하지만 제품마다 동작이 다르니 꽂은 뒤 파일 앱에 USB가 나타나는지 먼저 확인하세요.

## 연결한 USB는 파일 앱에서 엽니다

1. USB 메모리를 아이폰 충전 단자에 연결합니다. 필요하면 어댑터를 거칩니다.
2. 파일 앱을 열고 아래쪽의 둘러보기를 누릅니다.
3. 위치 목록에서 USB 이름을 누릅니다. 위치 목록이 안 보이면 둘러보기를 한 번 더 누릅니다.

[Apple 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 따르면 USB를 다시 포맷할 때도 파일 앱을 쓸 수 있습니다. Mac이나 PC가 없어도 됩니다. 포맷하면 USB 안의 자료가 모두 지워지니 먼저 다른 곳에 복사해 두세요.

사진과 영상을 USB로 옮기는 순서는 [아이폰 사진 USB로 옮기기](/blog/ko/iphone-photos-to-usb)에, 파일 앱에서 복사하고 꺼내는 방법은 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 따로 정리했습니다.

## 아이폰 OTG 인식 안 될 때 확인할 네 가지

USB를 꽂았는데 위치 목록에 이름이 없으면 아래 순서로 봅니다.

| 확인할 것 | 기준 | 해결 |
| --- | --- | --- |
| 포맷 형식 | Apple 안내가 밝힌 형식은 APFS, macOS 확장(HFS+), exFAT, FAT32, FAT입니다. NTFS는 목록에 없습니다 | exFAT으로 다시 포맷합니다 |
| 파티션 | 데이터 파티션이 하나여야 합니다 | 파티션을 하나로 합쳐 포맷합니다 |
| 전원 | 외장 하드는 외부 전원이 필요한 경우가 많습니다 | USB-C 아이폰은 전원이 들어가는 USB 허브, Lightning 아이폰은 USB 3 Camera Adapter에 전원 어댑터를 연결합니다 |
| 어댑터 | 어댑터 고장이나 호환 문제 | 다른 USB를 꽂아 어댑터가 동작하는지 봅니다 |

Windows에서 쓰던 USB는 NTFS인 경우가 많습니다. 포맷 형식을 바꾸는 방법은 [USB exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다.

## 전송 속도는 모델과 케이블이 함께 정합니다

[Apple 안내](https://support.apple.com/en-us/105099)를 보면 USB 3 속도(최대 10Gbps)를 내는 모델은 iPhone 15 Pro, 16 Pro, 17 Pro, 18 Pro 계열과 iPhone Duo입니다. 그 밖의 모델은 USB 2 속도로 옮깁니다.

Pro 모델이라도 아이폰 상자에 든 케이블은 USB 2 속도만 지원합니다. USB 3 속도를 내려면 10Gbps를 지원하는 USB 3 케이블과 USB 3 메모리를 함께 써야 합니다. 사진 몇 장은 차이를 느끼기 어렵지만 수십 GB 영상을 옮길 때는 차이가 큽니다.

## U-Saver로 사진과 연락처를 USB에 저장하기

NextGenAI가 만든 U-Saver는 일반 USB 메모리에 아이폰 사진, 영상, 연락처를 저장하는 앱입니다. App Store에서 받을 수 있고 iOS 26 이상에서 씁니다. 가격은 4,900원이고 한 번만 결제합니다. USB는 exFAT이나 FAT32 형식이어야 하며 FAT32는 4GB가 넘는 파일을 담지 못합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고 USB에 저장한 내용은 암호화되지 않습니다. 쓰기 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 읽어 보세요.

## 자주 묻는 질문

### 아이폰 11도 OTG가 되나요?

됩니다. 아이폰 11은 Lightning 단자라서 Lightning to USB Camera Adapter 같은 어댑터를 거쳐 USB-A 메모리를 연결합니다.

### OTG 케이블을 따로 사야 하나요?

USB-C 아이폰에 USB-C 메모리를 꽂는다면 따로 살 것이 없습니다. USB-A 메모리를 쓰거나 Lightning 아이폰이라면 어댑터가 필요합니다.

<!-- HUMANIZE-SUMMARY v1.6.1
run_id: 2026-11-27-001-1b88
metrics:
  char_in: 2816
  char_out: 2813
  change_rate: 0.3%
  self_check: 6/6
  grade: B
categories:  # before → after
  C-11 연결어미 뒤 쉼표: 3 → 0
  어휘 점검 [우선] '갈립니다' 논점 세우기: 1 → 0
  A-18 관형절 중첩(지표 2): 2 → 2 (짧은 관형절이라 보존)
self_check:
  - 고유명사·수치·인용·내용 앵커 100% 보존: ✅
  - 변경률 30% 이하: ✅
  - 장르 이탈 없음: ✅
  - register 보존: ✅
  - S1 잔존 0건: ✅
  - 인공 표현 추가 없음: ✅
highlights:
  - id: 어휘점검(갈리다)
    before: "Lightning 어댑터 두 가지는 전원 단자가 있느냐로 갈립니다."
    after: "Lightning 어댑터 두 가지는 전원 단자가 있는지가 다릅니다."
  - id: C-11
    before: "사진 몇 장은 차이를 느끼기 어렵지만, 수십 GB 영상을 옮길 때는 차이가 큽니다."
    after: "사진 몇 장은 차이를 느끼기 어렵지만 수십 GB 영상을 옮길 때는 차이가 큽니다."
  - id: C-11
    before: "USB는 exFAT이나 FAT32 형식이어야 하며, FAT32는 4GB가 넘는 파일을 담지 못합니다."
    after: "USB는 exFAT이나 FAT32 형식이어야 하며 FAT32는 4GB가 넘는 파일을 담지 못합니다."
  - id: C-11
    before: "하지만 제품마다 동작이 다르니, 꽂은 뒤 파일 앱에 USB가 나타나는지 먼저 확인하세요."
    after: "하지만 제품마다 동작이 다르니 꽂은 뒤 파일 앱에 USB가 나타나는지 먼저 확인하세요."
residual_findings: E-2 '-습니다' 종결 연속(S2) — 블로그 안내문 존댓말 유지 지시로 보존. lexical_diversity 낮음(S1 지표) — 제품명·메뉴명 반복이 원인이라 보존.
grade_reason: "B — S1 0건, 자체검증 6항 통과. 원문이 이미 깔끔해 변경률 0.3%로 A 구간(10~25%) 밑. 헤딩·표·목록·URL·U-Saver 사실 그대로."
-->
