---
title: "microSD Express란? 일반 microSD와 다른 점과 호환 확인법"
description: "microSD Express란 microSD 크기에 PCIe와 NVMe 방식을 더한 카드입니다. SD Association 표의 속도, 일반 microSD 기기와의 호환, 닌텐도 스위치 2 조건, 아이폰에서 쓰는 법을 정리했습니다."
date: 2026-11-18
---

## 핵심 요약

microSD Express란 microSD 카드 크기에 PCIe 인터페이스와 NVMe 프로토콜을 더한 카드입니다. PCIe와 NVMe는 컴퓨터 SSD가 쓰는 방식입니다. SD Association은 2019년 SD 7.1 규격에서 microSD Express를 도입했습니다.

SD Association 표에서 SD 8.0 규격의 microSD는 PCIe Gen.4 1레인만 지원하고, 이 방식의 최대 버스 속도는 1970MB/s입니다. UHS-I의 최대 버스 속도는 104MB/s입니다.

SD Express 카드는 UHS-I 인터페이스를 함께 갖고 있습니다. 그래서 일반 microSD 기기에서도 쓸 수 있지만, 이때는 SD Express 속도가 나지 않습니다.

"스위치 2에 쓰던 microSD를 넣어도 되나요?" "microSD Express 카드를 휴대폰이나 카드 리더기에 넣으면 빨라지나요?" 카드를 새로 살 때 자주 나오는 질문입니다. 이 글은 microSD Express란 무엇인지, 일반 microSD와 무엇이 다른지 SD Association과 닌텐도 문서로 확인합니다. 버스 방식 전체 비교는 [UHS-I·UHS-II 차이](/blog/ko/uhs-sd-card)에 있습니다.

## microSD Express란 무엇인가요?

[SD Association의 microSD 20주년 글](https://www.sdcard.org/press/thoughtleadership/celebrating-20-years-of-microsd/)에 따르면 microSD Express는 2019년 SD 7.1 규격에서 나왔습니다. 처음 설계는 PCI Express Gen 3 인터페이스와 NVM Express 프로토콜을 넣었습니다. 같은 글은 2023년 SD 8.0 규격이 PCIe Gen 4.0으로 microSD Express 성능을 2GB/s까지 높였다고 적었습니다.

| 시기 | 규격 | microSD Express의 변화 |
| --- | --- | --- |
| 2018년 | SD 7.0 | SD Express와 microSDUC 도입 |
| 2019년 | SD 7.1 | microSD Express 도입, PCIe Gen 3 |
| 2023년 | SD 8.0 | PCIe Gen 4, 약 2GB/s |

[SD Association FAQ](https://www.sdcard.org/consumers/faq/)는 SD Express 카드를 PCIe 기술로 최대 3940MB/s를 내는 착탈식 SSD라고 설명합니다. 3940MB/s는 큰 SD 카드의 PCIe Gen.4 2레인 값입니다. microSD Express는 아래 표처럼 1레인입니다.

## microSD Express와 일반 microSD는 무엇이 다른가요?

크기는 같습니다. 다른 점은 카드와 기기가 데이터를 주고받는 방식입니다.

| 구분 | 일반 microSD(UHS-I) | microSD Express |
| --- | --- | --- |
| 버스 방식 | UHS-I | PCIe·NVMe, UHS-I도 함께 지원 |
| 최대 버스 속도 | 104MB/s(SDR104) | 1970MB/s(SD 8.0, PCIe Gen.4 1레인) |
| 핀 | 1열 | 2열째 핀 추가 |
| 용량 규격 | SDHC, SDXC, SDUC | SDHC, SDXC, SDUC |

속도와 핀 수는 [SD Association 버스 속도 안내](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/) 기준입니다. 이 안내는 SD Express가 두 번째 핀 열로 데이터를 보낸다고 설명합니다. 또 "8.00 규격 microSD는 PCIe Gen.4 1레인만 지원한다"고 적었습니다.

표의 속도는 버스의 최대 속도입니다. SD Association은 카드의 실제 최대 속도가 버스 속도와 다르고, 카드 성능에 따라 달라진다고 썼습니다. 이 글은 카드별 실제 속도를 측정하지 않았습니다.

용량 규격의 차이는 [SDHC·SDXC·SDUC 차이](/blog/ko/sdhc-vs-sdxc)에, 카드 크기 차이는 [micro SD 카드와 SD 카드 차이](/blog/ko/microsd-vs-sd)에 있습니다.

## microSD Express 카드를 일반 microSD 기기에서 쓸 수 있나요?

쓸 수 있습니다. SD Association FAQ는 SD Express 카드가 UHS-I 인터페이스를 유지한다고 설명합니다. [SD Association 버스 방식 안내](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/)도 고속 카드는 UHS-I, UHS-II, SD Express 기기 어디서나 쓸 수 있다고 적었습니다.

| 카드 | 기기 | 결과 |
| --- | --- | --- |
| microSD Express | SD Express 미지원 기기 | UHS-I 방식으로 동작 |
| microSD Express | SD Express 지원 기기 | SD Express 성능 |
| 일반 microSD | SD Express 지원 기기 | 기기 설명서 확인 필요 |

같은 안내는 SD Express 기기가 SD Express 카드를 쓸 때 가장 좋은 성능을 낸다고 설명합니다. 반대로 일반 microSD를 SD Express 기기에 넣었을 때는 기기마다 다릅니다. 아래 닌텐도 스위치 2가 그런 예입니다.

## 닌텐도 스위치 2에는 왜 microSD Express가 필요한가요?

닌텐도는 스위치 2에서 게임 데이터를 저장하는 카드로 microSD Express만 허용합니다. [닌텐도 microSD Express FAQ](https://www.nintendo.com/au/support/articles/microsd-express-card-faq/)는 스위치 2에서 게임 데이터, 게임 화면 사진과 영상을 저장하는 데 microSD Express 카드만 쓸 수 있다고 적었습니다.

| 카드 | 닌텐도 스위치 2 | 닌텐도 스위치 |
| --- | --- | --- |
| 일반 microSD | 쓸 수 없음. 스위치에서 찍은 사진·영상 불러오기만 가능 | 쓸 수 있음 |
| microSD Express | 쓸 수 있음. 2TB까지 지원 | 쓸 수 있음. 속도는 일반 microSD와 같음 |

표는 [닌텐도 호환 안내](https://www.nintendo.com/au/support/articles/microsd-card-and-microsd-express-card-compatibility-with-nintendo-switch-2/) 기준입니다. 같은 안내는 microSD Express 카드를 처음 쓸 때 인터넷으로 시스템 업데이트를 해야 한다고 설명합니다. 다른 게임기나 카메라의 지원 여부는 각 제조사 설명서로 확인하세요.

## microSD Express 카드는 어떻게 확인하나요?

1. 카드 앞면과 포장에서 microSD Express 표기를 찾습니다. SD Association 표는 SD Express에 별도의 로고를 정해 두었습니다.
2. 카드 뒷면 핀을 봅니다. SD Association은 SD Express가 두 번째 핀 열을 쓴다고 설명합니다. 핀이 1열이면 SD Express 카드가 아닙니다.
3. 제조사 데이터시트의 인터페이스 항목에서 PCIe, NVMe 표기를 확인합니다.
4. 기기 설명서에서 SD Express 지원 여부를 확인합니다.
5. 용량 표시(microSDXC 등)와 속도 표시(U3, V30 등)도 함께 봅니다. 속도 표시는 [SD 카드 속도 표시 읽는 법](/blog/ko/sd-card-speed-class)에 있습니다.

이 글은 특정 제품을 추천하지 않습니다. 같은 규격이라도 카드마다 실제 속도는 다릅니다.

## 아이폰에서 microSD Express 카드를 쓸 수 있나요?

아이폰에는 카드 슬롯이 없어 카드 리더를 연결합니다. [Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)의 지원 카드 목록에는 SDSC, SDHC, SDXC, microSD가 있습니다. Apple 문서에는 SD Express나 microSD Express에 대한 언급이 없습니다.

SD Express 카드는 UHS-I 인터페이스를 함께 갖고 있습니다. SD Express를 지원하지 않는 리더에서는 UHS-I 방식으로 읽힙니다. 같은 Apple 안내는 iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, iPhone 16 Pro Max가 USB 3 전송 속도를 지원한다고 적었습니다. 이 글은 아이폰에서 microSD Express 카드의 속도를 측정하지 않았습니다.

리더 연결 순서는 [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd)과 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에 있습니다. 판매 페이지의 "TF 카드" 표기는 [TF 카드란?](/blog/ko/tf-card)에서 확인하세요.

## 아이폰 사진을 USB 메모리에 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. USB 메모리 연결 조건은 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## microSD Express 자주 묻는 질문

### microSD Express란 한마디로 무엇인가요?

microSD 크기에 SSD와 같은 PCIe·NVMe 방식을 더한 카드입니다. SD Association이 2019년 SD 7.1 규격에서 도입했습니다.

### microSD Express 카드는 일반 microSD 슬롯에 들어가나요?

들어갑니다. 크기가 같고 UHS-I 인터페이스도 함께 갖고 있습니다. 다만 SD Express를 지원하지 않는 기기에서는 SD Express 속도가 나지 않습니다.

### 일반 microSD를 닌텐도 스위치 2에 쓸 수 있나요?

게임 저장용으로는 쓸 수 없습니다. 닌텐도는 스위치 2에서 microSD Express 카드만 게임 데이터 저장에 쓸 수 있다고 안내합니다. 스위치에서 찍은 사진과 영상을 불러오는 것만 됩니다.

### 1970MB/s는 카드의 실제 속도인가요?

버스의 최대 속도입니다. SD Association은 카드의 최대 속도가 버스 속도와 다르고 카드 성능에 따라 달라진다고 설명합니다.

### microSD Express 카드를 읽으려면 어떤 리더가 필요한가요?

SD Express 속도로 읽으려면 SD Express를 지원하는 기기나 리더가 필요합니다. 지원하지 않는 리더에서도 UHS-I 방식으로 읽을 수 있습니다. 리더 방식의 차이는 [UHS-I·UHS-II 차이](/blog/ko/uhs-sd-card)에 정리했습니다.
