---
title: "UHS-I·UHS-II·SD Express 차이: UHS II 리더기가 필요한 경우와 확인법"
description: "UHS-I, UHS-II, SD Express는 SD 카드와 기기 사이의 버스 방식입니다. 방식별 최대 버스 속도, 하위 호환, UHS II 리더기가 필요한 경우와 확인 순서를 SD Association 문서 기준으로 정리했습니다."
date: 2026-11-17
---

## 핵심 요약

UHS-I, UHS-II, SD Express는 SD 카드와 기기 사이 통로의 방식입니다. 카드가 UHS-II여도 UHS II 리더기나 UHS-II 기기가 아니면 UHS-II 속도를 쓰지 못합니다.

SD Association 표의 최대 버스 속도는 UHS-I 104MB/s, UHS-II 312MB/s, SD Express 3940MB/s입니다. 이 값은 통로의 한계입니다. 카드의 실제 속도는 카드 성능에 따라 다릅니다.

빠른 방식의 카드는 느린 방식의 기기에서도 씁니다. 성능은 기기가 지원하는 가장 빠른 방식에 맞춘 카드에서 납니다.

"UHS-II 카드를 샀는데 왜 안 빨라요?" "UHS II 리더기가 꼭 있어야 하나요?" 카드를 바꿀 때 자주 나오는 질문입니다. 이 글은 UHS-I, UHS-II, SD Express의 차이와 리더기를 고르는 순서를 정리합니다. 카드 종류 전체는 [에스디 카드란?](/blog/ko/what-is-sd-card)에 있습니다.

## UHS-I, UHS-II, SD Express는 무엇인가요?

카드와 기기는 정해진 방식으로 데이터를 주고받습니다. 이 방식을 버스 인터페이스라고 합니다. [SD Association의 버스 속도 안내](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/)는 방식을 이렇게 나눕니다.

| 방식 | 최대 버스 속도 | 데이터 통로 | 규격 버전 |
| --- | --- | --- | --- |
| Default Speed | 12.5MB/s | 핀 한 줄 | 1.01 |
| High Speed | 25MB/s | 핀 한 줄 | 1.10 |
| UHS-I | 50MB/s(SDR50, DDR50), 104MB/s(SDR104) | 핀 한 줄 | 3.01 |
| UHS-II | 156MB/s(전이중), 312MB/s(반이중) | 핀 두 줄 | 4.00 |
| UHS-III | 312MB/s, 624MB/s(전이중) | 핀 두 줄 | 6.00 |
| SD Express | 985MB/s, 1970MB/s, 3940MB/s | PCIe·NVMe | 7.00 이상 |

UHS는 Ultra High Speed의 줄임말입니다. UHS-I은 핀 한 줄로 속도를 높였습니다. UHS-II, UHS-III, SD Express는 두 번째 핀 줄을 더해 데이터 통로를 두 개 씁니다.

SD Express는 PCIe와 NVMe를 씁니다. 컴퓨터의 SSD가 쓰는 방식입니다. 속도는 PCIe 세대와 레인 수로 나뉩니다. SD Association은 8.00 규격의 microSD가 PCIe Gen.4 1레인만 지원한다고 적습니다.

UHS 방식과 SD Express는 SDHC, SDXC, SDUC 카드에서 씁니다. 용량 규격 차이는 [SDHC·SDXC·SDUC 차이](/blog/ko/sdhc-vs-sdxc)에 있습니다.

## 버스 속도와 UHS 스피드 클래스는 어떻게 다른가요?

둘 다 속도 표시지만 뜻이 다릅니다.

| 표시 | 뜻 | 예 |
| --- | --- | --- |
| 버스 방식 | 카드와 기기 사이 통로의 최대 속도 | UHS-I, UHS-II, SD Express |
| UHS 스피드 클래스 | 영상 녹화 때 보장하는 최소 쓰기 속도 | U1, U3 |
| 비디오 스피드 클래스 | 영상 녹화 때 보장하는 최소 쓰기 속도 | V30, V60, V90 |

SD Association은 버스 속도와 카드의 최대 속도가 다르다고 적습니다. 실제 속도는 카드 성능, 기기, 작업 종류, 카드에 저장된 데이터 배치에 따라 달라집니다.

[SD Association의 스피드 클래스 안내](https://www.sdcard.org/developers/sd-standard-overview/speed-class/)는 U1, U3를 UHS-I, UHS-II, UHS-III 방식에 둡니다. V60과 V90은 UHS-II 이상 방식에서 씁니다. UHS-I 방식은 V30까지입니다. 각 표시의 쓰기 속도는 [SD 카드 속도 표시 읽는 법](/blog/ko/sd-card-speed-class)에 있습니다.

## UHS-II 카드를 UHS-I 기기에 써도 되나요?

씁니다. [SD Association의 버스 방식 안내](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/)는 빠른 방식의 카드를 UHS-I, UHS-II, SD Express 기기에서 모두 쓸 수 있다고 설명합니다.

성능은 기기 쪽 방식에 맞춰야 납니다. SD Association은 이렇게 안내합니다.

| 기기 방식 | 성능을 내는 카드 |
| --- | --- |
| UHS-I | UHS-I 이상 카드 |
| UHS-II | UHS-II 이상 카드 |
| SD Express | SD Express 카드 |

[SD Association FAQ](https://www.sdcard.org/consumers/faq/)는 SD Express 카드가 UHS-I 인터페이스도 유지한다고 적습니다. 그래서 SD Express 카드는 UHS-I 기기에서도 씁니다. 이때는 SD Express 속도가 나지 않습니다.

## UHS II 리더기는 언제 필요한가요?

UHS-II 카드의 속도로 컴퓨터에 옮기려면 UHS II 리더기가 필요합니다. 리더기도 기기입니다. UHS-I 리더기에 UHS-II 카드를 꽂으면 카드는 읽히지만 UHS-II 성능은 나지 않습니다.

경우를 나누면 이렇습니다.

| 가진 카드 | 리더기 | 결과 |
| --- | --- | --- |
| UHS-I | UHS-I | UHS-I 성능 |
| UHS-I | UHS-II | 사용 가능, 카드가 UHS-I이므로 UHS-I 성능 |
| UHS-II | UHS-I | 사용 가능, UHS-II 성능은 나지 않음 |
| UHS-II | UHS-II | UHS-II 성능 |
| SD Express | SD Express 미지원 | UHS-I 방식으로 사용 |

리더기의 버스 방식만으로 끝나지 않습니다. 리더기와 컴퓨터를 잇는 USB 포트 속도도 전송 속도를 묶습니다. 이 글은 리더기별 실제 속도를 측정하지 않았습니다.

## 내 카드가 UHS-I인지 UHS-II인지 어떻게 확인하나요?

1. 카드 앞면과 포장에서 UHS-I, UHS-II, SD Express 표기를 찾습니다. SD Association 표는 방식마다 버스 표시(Bus Mark)를 따로 둡니다.
2. 카드 뒷면의 핀을 봅니다. SD Association은 UHS-II, UHS-III, SD Express가 두 번째 핀 줄을 쓴다고 설명합니다. 핀이 한 줄이면 UHS-I 이하입니다.
3. 제조사 데이터시트에서 인터페이스 항목을 확인합니다.
4. 기기 설명서의 메모리 카드 항목에서 지원하는 버스 방식을 확인합니다.
5. 카드 크기가 SD인지 microSD인지도 확인합니다. 차이는 [microSD와 SD 카드 차이](/blog/ko/microsd-vs-sd)에 있습니다.

## UHS-I, UHS-II, SD Express 중 무엇을 고르나요?

기기 설명서가 기준입니다. 순서는 이렇습니다.

1. 설명서에서 기기가 지원하는 버스 방식을 확인합니다.
2. 같은 항목에서 권장 스피드 클래스(U3, V30, V60 등)를 확인합니다.
3. 기기가 UHS-I만 지원하면 UHS-I 카드로 충분합니다. UHS-II 카드도 쓰지만 UHS-II 성능은 나지 않습니다.
4. 기기가 UHS-II를 지원하고 V60이나 V90을 요구하면 UHS-II 카드를 고릅니다.
5. 기기가 SD Express를 지원하면 SD Express 카드에서 그 기기의 최고 성능이 납니다.
6. 카드를 컴퓨터로 자주 옮기면 카드와 같은 방식의 리더기를 함께 준비합니다.

특정 제품은 추천하지 않습니다. 같은 방식이라도 카드마다 실제 속도가 다릅니다. 제조사 데이터시트의 최대 속도는 내부 시험값입니다.

## 아이폰에서 UHS-II 카드가 더 빠른가요?

아이폰은 카드 리더로 SD 카드를 읽습니다. 이때 전송 속도는 아이폰의 USB 속도에도 묶입니다.

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)는 iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, iPhone 16 Pro Max가 USB 3 전송 속도를 지원한다고 적습니다. 그 밖의 어댑터와 기기는 USB 2 속도를 씁니다. 같은 문서는 SDSC, SDHC, SDXC, microSD 카드를 지원 목록에 적습니다. 이 글은 아이폰에서 UHS 방식별 속도를 측정하지 않았습니다.

리더 연결 순서는 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에 있습니다.

## 아이폰 사진을 USB 메모리에 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. USB 메모리 연결 조건은 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## UHS II 리더기·UHS 카드 자주 묻는 질문

### UHS-II 카드를 UHS-I 리더기에 꽂아도 되나요?

됩니다. SD Association은 빠른 방식의 카드를 UHS-I 기기에서도 쓸 수 있다고 설명합니다. 다만 UHS-II 성능은 UHS-II 기기와 리더기에서 납니다.

### UHS-I 카드를 UHS II 리더기에 쓰면 빨라지나요?

아닙니다. 카드가 UHS-I이면 UHS-I 방식으로 읽습니다. SD Association은 UHS-II 기기가 UHS-II 이상 카드에서 성능을 낸다고 안내합니다.

### UHS-I의 U1·U3와 UHS-II는 같은 뜻인가요?

다릅니다. U1, U3는 영상 녹화 때 보장하는 최소 쓰기 속도입니다. UHS-I, UHS-II는 통로의 방식입니다. UHS-I 카드도 U3 표시를 가질 수 있습니다.

### SD Express 카드는 기존 기기에서 안 읽히나요?

SD Association FAQ는 SD Express 카드가 UHS-I 인터페이스를 유지한다고 적습니다. 기기가 SD Express를 지원하지 않으면 UHS-I 방식으로 씁니다.

### 표의 312MB/s는 카드 속도인가요?

버스의 최대 속도입니다. SD Association은 카드의 최대 속도가 버스 속도와 다르며 카드 성능에 따라 달라진다고 적습니다.
