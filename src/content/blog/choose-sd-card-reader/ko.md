---
title: "SD 카드 리더기 고르는 법: 카드 크기, 용량 규격, UHS 방식, 연결 단자 확인"
description: "SD 카드 리더기는 카드 크기, 용량 규격(SDHC·SDXC·SDUC), 버스 방식(UHS-I·UHS-II·SD Express), 연결 단자 네 가지로 고릅니다. 컴퓨터와 아이폰에서 확인할 순서를 SD Association과 Apple 문서 기준으로 정리했습니다."
date: 2026-11-18
---

## 핵심 요약

SD 카드 리더기는 카드 크기, 용량 규격, 버스 방식, 연결 단자 네 가지로 고릅니다. 리더기도 카드를 읽는 기기입니다. 리더기가 카드의 규격보다 낮으면 카드를 못 읽거나 카드 속도가 나지 않습니다.

SD Association은 SDXC 카드를 SDXC나 SDUC 기기에서만 쓸 수 있다고 적습니다. SDUC 카드는 SDUC 기기에서만 씁니다. 용량이 큰 카드일수록 리더기의 용량 규격을 먼저 봅니다.

UHS-II 카드의 속도로 옮기려면 UHS-II 리더기가 필요합니다. 리더기와 컴퓨터를 잇는 USB 포트 속도도 전송 속도를 묶습니다.

"어떤 SD 카드 리더기를 사야 하나요?" "리더기마다 가격이 왜 이렇게 달라요?" 카드를 컴퓨터나 아이폰으로 옮기려는 분들이 자주 묻는 질문입니다. 이 글은 특정 제품을 추천하지 않습니다. 리더기의 표기를 읽고 내 카드와 기기에 맞추는 순서를 정리합니다.

## SD 카드 리더기는 무엇을 보고 고르나요?

네 가지를 봅니다. 앞의 세 가지는 카드 쪽, 마지막은 컴퓨터나 아이폰 쪽 조건입니다.

| 기준 | 확인할 것 | 맞지 않으면 |
| --- | --- | --- |
| 카드 크기 | SD 슬롯, microSD 슬롯, 또는 어댑터 사용 | 카드가 들어가지 않습니다 |
| 용량 규격 | SDHC, SDXC, SDUC 지원 표기 | 카드를 쓰지 못할 수 있습니다 |
| 버스 방식 | UHS-I, UHS-II, SD Express 표기 | 카드는 읽히지만 카드 속도가 나지 않습니다 |
| 연결 단자 | USB-A, USB-C, Lightning과 포트 속도 | 연결이 안 되거나 포트 속도에 묶입니다 |

카드 쪽 정보는 카드 앞면과 포장에 있습니다. 카드 표기 읽는 법은 [SD 카드 속도 표시 읽는 법](/blog/ko/sd-card-speed-class)과 [에스디 카드란?](/blog/ko/what-is-sd-card)에 있습니다.

## 컴퓨터에 SD 슬롯이 있으면 SD 카드 리더기가 필요 없나요?

슬롯이 카드 규격을 지원하면 필요 없습니다. [SD Association FAQ](https://www.sdcard.org/consumers/faq/)는 컴퓨터에 SD 슬롯이 있으면 카드를 꽂아 옮기면 된다고 적습니다. 슬롯이 없거나 카드보다 이전 규격으로 만든 슬롯이면 USB 리더기나 카드 어댑터를 쓰라고 안내합니다.

Mac은 모델마다 슬롯 지원이 다릅니다. [Apple의 Mac SD 카드 슬롯 안내](https://support.apple.com/HT204384)는 이렇게 적습니다.

| 항목 | Apple 안내 |
| --- | --- |
| 지원 카드 | MMC, Default Speed, High Speed, UHS-I |
| UHS-II 지원 모델 | 2022년 이후 Mac Studio, 2021년 이후 MacBook Pro, 2020년 iMac, iMac Pro |
| miniSD, microSD | 어댑터를 끼워 사용 |
| 지원하지 않는 카드 | SDIO 카드 |
| 주의 | 두께 2.1mm를 넘는 카드는 슬롯을 망가뜨릴 수 있습니다 |

슬롯이 UHS-I만 지원하면 UHS-II 카드도 읽지만 UHS-II 속도는 나지 않습니다. 이때 UHS-II 속도가 필요하면 UHS-II 리더기를 따로 씁니다.

## 카드 용량 규격과 리더기 호환은 어떻게 확인하나요?

[SD Association의 용량 규격 안내](https://www.sdcard.org/consumers/about-sd-memory-card-choices/sd-sdhc-sdxc-and-sduc-card-capacity-choices/)는 기기와 카드의 호환을 이렇게 정리합니다. 리더기도 여기서 말하는 기기입니다.

| 리더기·기기 규격 | 쓸 수 있는 카드 |
| --- | --- |
| SD | SD |
| SDHC | SD, SDHC |
| SDXC | SD, SDHC, SDXC |
| SDUC | SD, SDHC, SDXC, SDUC |

[SD Association의 용량 표](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)는 SDHC를 2GB 초과 32GB 이하, SDXC를 32GB 초과 2TB 이하, SDUC를 2TB 초과 128TB 이하로 나눕니다. 64GB 카드는 SDXC이므로 SDXC 이상을 지원하는 리더기가 필요합니다. 규격별 파일 시스템은 [SDHC·SDXC·SDUC 차이](/blog/ko/sdhc-vs-sdxc)에 있습니다.

같은 안내는 카드를 넣기 전에 기기의 SD 로고나 설명서로 지원 규격을 확인하라고 적습니다. 리더기 포장이나 제조사 설명서에서 SDXC, SDUC 표기를 찾으세요.

## UHS-II 카드에는 어떤 SD 카드 리더기가 맞나요?

카드와 같은 버스 방식의 리더기가 맞습니다. [SD Association의 버스 방식 안내](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/)는 빠른 카드를 UHS-I, UHS-II, SD Express 기기에서 모두 쓸 수 있다고 적습니다. 성능은 기기가 지원하는 가장 빠른 방식에 맞는 카드에서 납니다.

| 카드 | 리더기 | 결과 |
| --- | --- | --- |
| UHS-I | UHS-I | UHS-I 성능 |
| UHS-I | UHS-II | 사용 가능, UHS-I 성능 |
| UHS-II | UHS-I | 사용 가능, UHS-II 성능은 나지 않음 |
| UHS-II | UHS-II | UHS-II 성능 |
| SD Express | SD Express 미지원 | UHS-I 방식으로 사용 |

SD Express 행은 [SD Association FAQ](https://www.sdcard.org/consumers/faq/)가 근거입니다. SD Express 카드는 UHS-I 인터페이스를 유지합니다. 방식별 최대 버스 속도와 카드 핀 모양은 [UHS-I·UHS-II·SD Express 차이](/blog/ko/uhs-sd-card)에 있습니다.

UHS-I 카드만 쓴다면 UHS-II 리더기를 사도 빨라지지 않습니다. 이 글은 리더기별 실제 속도를 측정하지 않았습니다.

## microSD 카드는 SD 카드 리더기로 읽을 수 있나요?

리더기에 microSD 슬롯이 있으면 바로 꽂습니다. SD 슬롯만 있으면 microSD를 SD 크기로 바꾸는 어댑터를 씁니다. Apple도 Mac의 SD 슬롯에서 microSD를 쓰려면 어댑터를 끼우라고 안내합니다.

어댑터를 써도 카드의 용량 규격과 버스 방식은 그대로입니다. 리더기의 SDXC, UHS 표기를 같은 방법으로 확인합니다. 크기 차이와 어댑터 쓰는 법은 [micro SD 카드와 SD 카드 차이](/blog/ko/microsd-vs-sd)에 있습니다.

## 아이폰용 SD 카드 리더기는 무엇을 확인하나요?

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)는 아이폰에서 쓰는 리더로 Lightning to SD Card Camera Reader와 Apple USB-C to SD Card Reader를 적습니다. 지원 카드 목록은 SDSC, SDHC, SDXC, miniSD, microSD, MMC입니다.

| 확인할 것 | Apple 안내 |
| --- | --- |
| 단자 | 아이폰의 Lightning 또는 USB-C 단자에 맞는 리더 |
| 카드 형식 | 데이터 파티션 하나, exFAT, FAT32, FAT, APFS, macOS 확장(HFS+) 중 하나 |
| 전송 속도 | iPhone 15 Pro, 15 Pro Max, 16 Pro, 16 Pro Max는 USB 3 속도, 그 밖의 기기와 어댑터는 USB 2 속도 |

카드 형식 조건은 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 있습니다. NTFS는 목록에 없습니다. 형식을 바꾸는 순서는 [SD 카드 포맷 방법](/blog/ko/format-sd-card)에 있습니다.

이 글은 타사 리더를 아이폰에서 시험하지 않았습니다. 연결 순서와 사진 가져오기는 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에, 리더 종류 전체는 [아이폰 SD 카드 총정리](/blog/ko/iphone-sd-card-guide)에 있습니다.

## SD 카드 리더기 고르는 순서

1. 카드 앞면에서 크기(SD, microSD), 용량 규격(SDHC, SDXC, SDUC), 버스 방식(UHS-I, UHS-II, SD Express)을 적어 둡니다.
2. 컴퓨터에 SD 슬롯이 있는지, 슬롯이 그 규격을 지원하는지 기기 설명서에서 확인합니다. 지원하면 리더기가 필요 없습니다.
3. 리더기를 꽂을 단자를 확인합니다. 컴퓨터는 USB-A나 USB-C, 아이폰은 Lightning이나 USB-C입니다.
4. 리더기 설명서에서 카드 용량 규격을 지원하는지 확인합니다. SDXC 카드면 SDXC 이상 표기가 있어야 합니다.
5. 카드가 UHS-II이고 그 속도로 옮기려면 UHS-II 표기가 있는 리더기를 고릅니다.
6. microSD를 쓰면 microSD 슬롯이 있는 리더기나 SD 어댑터를 함께 준비합니다.
7. 처음 연결한 뒤 카드가 보이는지, 파일이 열리는지 확인합니다.

카드가 표기와 다른 용량으로 보이면 [가짜 SD 카드 구별법](/blog/ko/fake-sd-card)을 확인하세요.

## 아이폰 사진을 USB 메모리에 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. USB 메모리 연결 조건은 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## SD 카드 리더기 자주 묻는 질문

### SDHC 리더기에 SDXC 카드를 꽂으면 읽히나요?

SD Association 안내에 따르면 SDHC 기기는 SD와 SDHC 카드만 씁니다. SDXC 카드에는 SDXC 이상을 지원하는 리더기를 쓰세요.

### UHS-II 리더기를 사면 UHS-I 카드도 빨라지나요?

아닙니다. 카드가 UHS-I이면 UHS-I 방식으로 읽습니다. SD Association은 UHS-II 기기가 UHS-II 이상 카드에서 성능을 낸다고 안내합니다.

### Mac에 SD 슬롯이 있는데 리더기를 따로 사야 하나요?

카드 규격에 따라 다릅니다. Apple 안내에서 UHS-II를 지원하는 Mac 슬롯은 2022년 이후 Mac Studio, 2021년 이후 MacBook Pro, 2020년 iMac, iMac Pro뿐입니다. 다른 모델에서 UHS-II 속도가 필요하면 UHS-II 리더기를 씁니다.

### 아이폰에서 타사 SD 카드 리더기를 써도 되나요?

이 글은 타사 리더를 시험하지 않았습니다. Apple 안내는 Apple 카메라 어댑터 기준입니다. 타사 리더를 쓴다면 연결 뒤 파일 앱의 위치 목록에 카드가 보이는지 먼저 확인하세요.

### 리더기 상자의 최대 속도대로 옮겨지나요?

보장되지 않습니다. SD Association은 카드의 실제 속도가 카드 성능과 기기에 따라 달라진다고 적습니다. 리더기와 컴퓨터를 잇는 USB 포트 속도도 전송 속도를 묶습니다.
