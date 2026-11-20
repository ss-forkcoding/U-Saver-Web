---
title: "SD 카드 기초 총정리: 종류, 용량, 속도 표시, 첫 사용과 연결 방법"
description: "SD 카드와 microSD 카드의 종류, 용량 규격, 속도 표시, 처음 쓸 때 할 일, 컴퓨터·Mac·아이폰 연결 방법을 SD Association과 Apple 공식 문서 기준으로 한 글에 모았습니다."
date: 2026-11-20
---

## 핵심 요약

SD 카드는 카메라, 스마트폰, 게임기, 노트북에 꽂아 쓰는 메모리 카드입니다. 규격은 SD Association이 정하고, 크기·용량·속도 세 가지 기준으로 종류가 나뉩니다.

SD 카드를 살 때는 기기가 지원하는 규격부터 확인합니다. 상위 규격 기기는 하위 규격 카드를 읽지만, 반대는 안 됩니다.

처음 쓰는 카드는 쓸 기기에서 포맷하고, 중요한 사진은 다른 저장장치에도 복사해 둡니다.

"SDXC, U3, V30, A2가 다 무슨 뜻이에요?" "microSD를 컴퓨터에 어떻게 꽂아요?" SD 카드를 처음 다루면 질문이 한꺼번에 생깁니다. 이 글은 SD 카드 기초를 한 장에 정리하고, 주제마다 자세한 글로 연결합니다.

## SD 카드란 무엇인가요?

SD 카드는 전원이 꺼져도 내용이 남는 플래시 메모리 카드입니다. [SD Association](https://www.sdcard.org/developers/sd-standard-overview/sd-family/)은 SD 메모리 카드를 탈착식 비휘발성 메모리로 분류합니다.

카드를 꽂는 카메라, 스마트폰, 카드 리더기를 호스트라고 부릅니다. 카드와 호스트가 같은 규격을 지원해야 제 용량과 속도로 쓸 수 있습니다. 카드에 적힌 표시를 하나씩 읽는 법은 [에스디 카드란?](/blog/ko/what-is-sd-card)에 있습니다.

## SD 카드는 크기에 따라 어떻게 나뉘나요?

지금 흔히 쓰는 크기는 일반 SD와 microSD입니다. 크기는 [SD Association의 용량 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 표 기준입니다.

| 크기 | 가로 x 세로 x 두께 | 주로 쓰는 기기 |
| --- | --- | --- |
| SD | 32 x 24 x 2.1mm | 디지털카메라, 노트북 카드 슬롯 |
| microSD | 11 x 15 x 1.0mm | 스마트폰, 액션캠, 휴대용 게임기 |

[SD Association FAQ](https://www.sdcard.org/consumers/faq/)는 microSD와 SD의 차이를 크기, 핀 수, 쓰기 방지 스위치 유무로 설명합니다. 내부 논리와 전자 회로는 같습니다.

- microSD를 SD 슬롯에 쓰는 법: [micro SD 카드와 SD 카드 차이](/blog/ko/microsd-vs-sd)
- 판매 페이지의 TF 카드 표시: [TF 카드란?](/blog/ko/tf-card)
- 카드 옆의 작은 탭: [SD 카드 잠금 스위치](/blog/ko/sd-card-lock-switch)

## SD 카드 용량 규격은 어떻게 읽나요?

용량 규격은 네 가지입니다. 카드 앞면의 SD, SDHC, SDXC, SDUC 로고로 구별합니다.

| 규격 | 용량 | 기본 파일 시스템 |
| --- | --- | --- |
| SD | 2GB까지 | FAT12, FAT16 |
| SDHC | 2GB 초과 32GB까지 | FAT32 |
| SDXC | 32GB 초과 2TB까지 | exFAT |
| SDUC | 2TB 초과 128TB까지 | exFAT |

[SD Association의 호환 안내](https://www.sdcard.org/consumers/sd-sdhc-sdxc-and-sduc-card-capacity-choices/)에 따르면 호환은 한 방향입니다.

1. SDXC 기기는 SD, SDHC, SDXC 카드를 씁니다.
2. SDHC 기기는 SD와 SDHC 카드만 씁니다.
3. SDUC 카드는 SDUC 기기에서만 씁니다.

FAT32는 4GB가 넘는 파일을 저장하지 못합니다. 규격별 차이와 기기 확인법은 [SDHC·SDXC·SDUC 차이](/blog/ko/sdhc-vs-sdxc)에 정리했습니다.

## SD 카드 속도 표시는 무엇을 뜻하나요?

SD 카드에는 성격이 다른 속도 표시가 세 종류 있습니다.

| 표시 | 뜻 | 예시 | 자세한 글 |
| --- | --- | --- | --- |
| 버스 방식 | 카드와 기기 사이 통로의 최대 속도 | UHS-I, UHS-II, SD Express | [UHS-I·UHS-II·SD Express 차이](/blog/ko/uhs-sd-card) |
| 스피드 클래스 | 영상 녹화용 최소 쓰기 속도 | C10, U3, V30 | [SD 카드 속도 표시 읽는 법](/blog/ko/sd-card-speed-class) |
| 앱 성능 등급 | 카드에 설치한 앱의 성능 | A1, A2 | [SD 카드 A1·A2 뜻](/blog/ko/sd-card-a1-a2) |

[SD Association의 스피드 클래스 규격](https://www.sdcard.org/developers/sd-standard-overview/speed-class/)은 숫자가 최소 쓰기 속도를 나타낸다고 설명합니다. 기기가 요구하는 등급과 같거나 높은 카드를 고르면 됩니다.

버스 속도는 [SD Association의 버스 속도 안내](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/) 기준으로 UHS-I 최대 104MB/s, UHS-II 최대 312MB/s, SD Express 최대 3,940MB/s입니다. 기기와 카드가 함께 지원해야 그 속도가 나옵니다. microSD 크기의 SD Express 카드는 [microSD Express란?](/blog/ko/microsd-express)에서 다룹니다.

[앱 성능 등급 안내](https://www.sdcard.org/developers/sd-standard-overview/application-performance-class/)에 따르면 A2 성능은 A2를 지원하는 기기와 카드를 함께 쓸 때만 나옵니다.

## SD 카드를 사기 전에 무엇을 확인하나요?

1. 기기 설명서에서 카드 크기(SD, microSD)를 확인합니다.
2. 기기가 지원하는 용량 규격(SDHC, SDXC, SDUC)을 확인합니다.
3. 설명서가 요구하는 스피드 클래스를 확인합니다.
4. 카드를 컴퓨터로 옮길 계획이면 카드 리더기의 규격과 단자를 확인합니다.
5. 산 뒤에는 표시된 용량이 실제로 쓰이는지 점검합니다.

용량을 속인 카드 점검 순서는 [가짜 SD 카드 구별법](/blog/ko/fake-sd-card)에 있습니다. 블랙박스처럼 계속 녹화하는 기기라면 [고내구성 SD 카드란?](/blog/ko/high-endurance-sd-card)을 함께 보세요. 리더기 고르는 기준은 [SD 카드 리더기 고르는 법](/blog/ko/choose-sd-card-reader)에 정리했습니다.

## 새 SD 카드는 어떻게 쓰기 시작하나요?

1. 카드를 쓸 기기에 넣습니다.
2. 기기 메뉴에서 카드를 포맷합니다. 포맷하면 카드 자료가 모두 지워집니다.
3. 사진을 몇 장 찍거나 파일을 복사해 제대로 읽히는지 봅니다.
4. 중요한 사진은 다른 저장장치에도 복사해 둡니다.

컴퓨터에서 포맷한다면 SD Association은 운영체제의 범용 포맷 도구 대신 SD Memory Card Formatter를 쓰라고 [강하게 권합니다](https://www.sdcard.org/consumers/sd-sdhc-sdxc-and-sduc-card-capacity-choices/). 사용 순서는 [SD Card Formatter 사용법](/blog/ko/sd-card-formatter)에 있습니다.

단계별 설명은 [SD 카드 사용법: 새 카드를 처음 쓸 때 할 일](/blog/ko/sd-card-first-use)과 [마이크로 SD 카드 사용법](/blog/ko/how-to-use-microsd)에서 확인하세요.

## SD 카드를 컴퓨터, Mac, 아이폰에 연결하려면?

기기마다 연결 방법과 확인할 점이 다릅니다.

| 기기 | 연결 방법 | 확인할 점 | 자세한 글 |
| --- | --- | --- | --- |
| 윈도우 PC | 카드 슬롯이나 USB 카드 리더기 | 빼기 전에 안전하게 제거 | [SD 카드 컴퓨터 연결 방법](/blog/ko/sd-card-to-pc) |
| Mac | SD 슬롯이 있는 모델이나 카드 리더기 | 빼기 전에 꺼내기 | [Mac SD 카드 사용법](/blog/ko/sd-card-on-mac) |
| USB-C 기기 | C 타입 카드 리더기 | 카드 방향, 리더기 지원 규격 | [C 타입 SD 카드 리더기 사용법](/blog/ko/usb-c-sd-card-reader) |
| 아이폰 | 단자에 맞는 SD 카드 리더 | 파일 형식, 파티션 수 | [아이폰 SD 카드 총정리](/blog/ko/iphone-sd-card-guide) |

[Microsoft 안내](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369)는 자료를 잃지 않으려면 빼기 전에 하드웨어 안전하게 제거를 쓰라고 설명합니다. [Apple의 Mac SD 카드 슬롯 안내](https://support.apple.com/en-us/102352)도 카드를 꺼낸 뒤 빼고, 잠자기 중에는 빼지 말라고 설명합니다.

아이폰에는 SD 카드 슬롯이 없습니다. [Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)의 지원 목록에는 SDSC, SDHC, SDXC, miniSD, microSD, MMC 카드가 있습니다. [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)는 데이터 파티션이 하나이고 APFS, exFAT, FAT32 같은 형식이어야 한다고 설명합니다.

USB 메모리도 컴퓨터에서 쓰는 순서는 비슷합니다. [USB 메모리 사용법](/blog/ko/usb-flash-drive-basics)을 참고하세요.

## 아이폰 사진을 USB 메모리에 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. USB 메모리 연결 조건은 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## SD 카드 자주 묻는 질문

### SD 카드와 microSD 카드는 무엇이 다른가요?

SD Association FAQ에 따르면 크기, 핀 수, 쓰기 방지 스위치 유무가 다릅니다. 내부 논리와 전자 회로는 같습니다.

### 64GB SD 카드가 오래된 카메라에서 안 되는 이유는 무엇인가요?

64GB 카드는 SDXC 규격입니다. SDHC만 지원하는 기기는 SDXC 카드를 쓸 수 없습니다. 카메라 설명서에서 SDXC 지원 여부를 확인하세요.

### SD 카드는 어떤 프로그램으로 포맷하나요?

카드를 쓸 기기에서 포맷하는 것이 먼저입니다. 컴퓨터에서 포맷한다면 SD Association은 SD Memory Card Formatter를 권합니다.

### SD 카드를 컴퓨터에서 그냥 빼도 되나요?

빼기 전에 윈도우에서는 하드웨어 안전하게 제거를, Mac에서는 꺼내기를 합니다. 쓰는 중에 빼면 자료를 잃을 수 있습니다.

### 아이폰에서 SD 카드를 쓸 수 있나요?

아이폰 단자에 맞는 SD 카드 리더를 연결해 씁니다. 카드는 데이터 파티션이 하나이고 exFAT나 FAT32 같은 지원 형식이어야 합니다. 자세한 순서는 [아이폰 SD 카드 총정리](/blog/ko/iphone-sd-card-guide)에 있습니다.
