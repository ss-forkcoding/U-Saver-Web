---
title: "라즈베리 파이 SD 카드 추천 기준: 용량, 속도 표시, 최대 용량, Imager 설치 순서"
description: "라즈베리 파이 SD 카드 추천 기준을 정리했습니다. 운영체제별 권장 용량, 2TB 한도, 오래된 모델의 256GB 부팅 제한, Raspberry Pi Imager로 카드에 OS를 쓰는 순서를 라즈베리파이 공식 문서로 확인하세요."
date: 2026-11-24
---

## 핵심 요약

라즈베리 파이 SD 카드 추천 기준은 세 가지입니다. 설치할 운영체제에 맞는 용량, 2TB 미만이라는 최대 용량, 카드의 읽기·쓰기 속도입니다. 라즈베리파이는 데스크톱용 Raspberry Pi OS에 32GB 이상, 명령줄용 Lite에 8GB 이상을 권합니다.

카드에는 컴퓨터에서 Raspberry Pi Imager로 운영체제를 씁니다. Imager는 카드의 자료를 모두 지우므로 카드 안의 파일을 먼저 옮깁니다.

오래된 모델 일부는 256GB 이하 부팅 파티션에서만 부팅합니다. 내 모델이 여기에 드는지 먼저 봅니다.

"라즈베리 파이에는 몇 GB 카드를 사야 하나요?" "카드에 OS를 썼는데 부팅이 안 돼요." 라즈베리 파이를 처음 꾸릴 때 자주 나오는 질문입니다. 이 글은 라즈베리 파이 SD 카드를 고르는 기준과 운영체제를 쓰는 순서를 정리합니다. 특정 제품을 추천하지 않으며, 카드나 보드를 직접 시험하지 않았습니다. 수치와 절차는 [라즈베리파이 시작 안내](https://www.raspberrypi.com/documentation/computers/getting-started.html#boot-media)와 [Raspberry Pi Imager 문서](https://www.raspberrypi.com/documentation/computers/imager.html)를 따릅니다.

## 라즈베리 파이에는 왜 SD 카드가 필요한가요?

운영체제가 들어 있는 저장장치가 있어야 켜지기 때문입니다. 라즈베리파이 문서는 이 저장장치를 부팅 미디어라고 부르고, 가장 흔한 형태가 microSD 카드라고 적습니다.

Model B+ 이후의 모든 모델에는 microSD 슬롯이 있습니다. 올바른 OS 이미지가 든 카드를 넣으면 자동으로 그 카드에서 부팅합니다. 일부 최신 모델은 USB 저장장치, 네트워크 부팅, PCIe를 통한 NVMe 저장장치에서도 부팅할 수 있습니다.

예외도 있습니다. Raspberry Pi 500과 일부 키트는 Raspberry Pi OS가 미리 설치된 microSD 카드와 함께 옵니다. 이 경우에는 설치 단계를 건너뛰고 소프트웨어만 업데이트합니다.

## 라즈베리 파이 SD 카드는 몇 GB가 필요한가요?

설치할 운영체제로 정합니다. [라즈베리파이 시작 안내](https://www.raspberrypi.com/documentation/computers/getting-started.html#boot-media)의 권장값입니다.

| 운영체제 | 용도 | 권장 용량 |
| --- | --- | --- |
| Raspberry Pi OS | 데스크톱과 기본 소프트웨어 | 32GB 이상 |
| Raspberry Pi OS Full | 데스크톱과 권장 앱 | 32GB 이상 |
| Raspberry Pi OS Lite | 화면 없이 명령줄로 쓰는 헤드리스 구성 | 8GB 이상 |

라즈베리파이는 이 값이 시작하기에 충분한 수준이라고 적고, 여유를 두고 더 큰 용량을 고르라고 권합니다. 다른 운영체제는 요구 용량이 다르므로 그 운영체제의 문서를 봅니다.

32GB를 넘는 카드는 SDXC입니다. 용량 규격의 차이는 [SDHC·SDXC·SDUC 차이](/blog/ko/sdhc-vs-sdxc)에 정리했습니다.

## 라즈베리 파이 SD 카드 최대 용량은 얼마인가요?

2TB 미만 카드를 쓸 수 있습니다. 라즈베리파이 문서는 2TB를 넘는 카드를 지원하지 않는다고 적습니다. 카드의 파티션 정보를 담는 MBR(Master Boot Record) 방식의 한계를 넘기 때문입니다.

오래된 모델은 한도가 더 낮습니다. 아래 모델은 256GB 이하의 부팅 파티션에서만 부팅합니다.

| 모델 | 부팅 파티션 한도 |
| --- | --- |
| Raspberry Pi Zero | 256GB 이하 |
| 첫 번째 Raspberry Pi | 256GB 이하 |
| BCM2836 칩을 쓴 초기 Raspberry Pi 2 | 256GB 이하 |
| 그 밖의 모델 | 카드 2TB 미만 |

## 라즈베리 파이 SD 카드 속도는 무엇을 보나요?

라즈베리파이 문서는 읽기·쓰기 속도가 빠른 저장장치가 전체 성능을 높인다고 적습니다. [라즈베리파이 SD 카드 문서](https://www.raspberrypi.com/documentation/accessories/sd-cards.html)는 느린 버스 속도와 명령 대기열(command queueing) 미지원이 가장 성능 좋은 모델의 성능도 떨어뜨릴 수 있다고 설명합니다.

라즈베리파이가 자체 판매하는 microSD 카드의 표시는 아래와 같습니다. 표시를 읽는 예로만 씁니다.

| 항목 | 라즈베리파이 공식 카드 |
| --- | --- |
| 용량 | 32GB, 64GB, 128GB |
| 형태 | microSDHC·microSDXC |
| 속도 표시 | C10, U3, V30, A2 |
| 버스 속도 | DDR50, SDR104 지원 |
| 4KB 무작위 읽기·쓰기 | Raspberry Pi 4(DDR50) 3,200·1,200 IOPS, Raspberry Pi 5(SDR104) 5,000·2,000 IOPS |

C10·U3·V30은 최소 연속 쓰기 속도 표시입니다. 읽는 법은 [SD 카드 속도 표시 읽는 법](/blog/ko/sd-card-speed-class)에 있습니다. A2는 작은 파일을 무작위로 읽고 쓰는 앱 성능 등급입니다. 운영체제를 카드에서 돌리면 이런 작업이 많습니다. 기준 수치는 [SD 카드 A1·A2 뜻](/blog/ko/sd-card-a1-a2)에 정리했습니다.

## 라즈베리 파이 SD 카드는 어떤 순서로 고르나요?

1. 내 모델을 확인합니다. Zero, 첫 모델, 초기 Raspberry Pi 2라면 256GB 부팅 파티션 한도를 확인합니다.
2. 설치할 운영체제를 정하고, 위 표의 권장 용량보다 여유 있게 고릅니다.
3. 2TB 미만인지 확인합니다.
4. 카드 포장의 속도 표시(Class, U, V, A)를 봅니다.
5. 컴퓨터에 꽂을 카드 리더기를 준비합니다. 라즈베리파이 문서도 OS를 쓰려면 카드 리더기가 필요할 수 있다고 적습니다. 고르는 법은 [SD 카드 리더기 고르는 법](/blog/ko/choose-sd-card-reader)에 있습니다.
6. 산 직후 실제 용량을 확인합니다. 방법은 [가짜 SD 카드 구별법](/blog/ko/fake-sd-card)에 있습니다.

## 라즈베리 파이 SD 카드에 OS는 어떻게 쓰나요?

다른 컴퓨터에서 Raspberry Pi Imager로 씁니다. Imager는 Windows, macOS, Linux에서 동작합니다. [설치 안내](https://www.raspberrypi.com/documentation/computers/getting-started.html#install)의 순서입니다.

1. 컴퓨터에 Imager를 설치하고 실행합니다.
2. **Device** 탭에서 라즈베리 파이 모델을 고르고 **Next**를 누릅니다.
3. **OS** 탭에서 운영체제를 고릅니다. 목록 맨 위가 그 모델에 권장하는 OS입니다.
4. 카드 리더기로 microSD 카드를 컴퓨터에 연결합니다.
5. **Storage** 탭에서 카드를 고릅니다. Imager가 이 장치의 자료를 모두 지우므로 이름과 용량을 다시 봅니다. **Exclude system drives**는 켜 둡니다.
6. **Customisation** 탭에서 호스트 이름, 사용자 이름과 암호, Wi-Fi, 원격 접속을 설정합니다.
7. **Writing** 탭에서 내용을 확인하고 **Write**를 누른 뒤 **I understand, erase and write**를 누릅니다.
8. 쓰기와 검증이 끝날 때까지 기다립니다. 라즈베리파이는 검증을 끝까지 하라고 권합니다.
9. **Done** 탭이 나오면 **Finish**를 누릅니다.

화면 없이 쓸 계획이면 6단계에서 Wi-Fi(또는 유선 연결)와 SSH 또는 Raspberry Pi Connect를 설정합니다. 첫 부팅에서는 이 두 방법으로만 원격 접속할 수 있습니다.

다른 컴퓨터가 없으면 Network Install을 씁니다. Raspberry Pi 4B, 5, 500, 500+에서 유선 인터넷으로 Imager를 내려받아 실행하므로 카드 리더기가 없어도 됩니다.

## microSD 카드는 라즈베리 파이에 어떻게 넣나요?

카드 라벨이 라즈베리 파이 바깥쪽을 향하게 넣습니다. Raspberry Pi 3 이후 모델과 모든 Zero 모델은 카드가 딸깍 소리 없이 들어가 멈추고, 살짝 당기면 빠집니다. 그보다 오래된 모델은 카드를 한 번 눌러 잠금을 푼 뒤 뺍니다.

카드에 OS를 쓴 다음에 넣습니다. OS가 없는 카드로 전원을 켜면 라즈베리 파이는 시작하지 않습니다.

## 라즈베리 파이 SD 카드가 인식되지 않거나 부팅이 안 되면?

[Imager 문제 해결 안내](https://www.raspberrypi.com/documentation/computers/imager.html#imager-troubleshooting) 기준입니다.

| 증상 | 확인할 것 |
| --- | --- |
| Imager에 카드가 보이지 않음 | 컴퓨터가 카드를 인식하는지, 카드나 어댑터의 쓰기 방지 스위치 |
| 검증(verify)이 실패함 | 다시 쓰기, 다른 카드 리더기·USB 포트, 다른 카드 |
| 쓴 뒤 부팅되지 않음 | Device 탭의 모델 선택, 검증 완료 여부 |

라즈베리파이는 검증이 반복해서 실패하는 저장장치가 고장 났거나, 실제보다 큰 용량을 보고하는 가짜일 수 있다고 적습니다. 잠금 스위치는 [SD 카드 잠금 스위치](/blog/ko/sd-card-lock-switch)에, 일반 점검 순서는 [SD 카드 포맷 안될 때](/blog/ko/sd-card-not-working)에 정리했습니다.

## 라즈베리 파이에 쓰던 SD 카드를 다른 기기에서 다시 쓰려면?

Imager의 **Erase** 기능으로 지웁니다. [Imager 문서](https://www.raspberrypi.com/documentation/computers/imager.html#erase-storage)에 따르면 **OS** 탭 아래의 **Erase**를 고르고 **Storage** 탭부터 같은 순서로 진행하면 카드가 FAT32 파티션 하나로 포맷됩니다. 카드의 자료는 모두 지워집니다.

컴퓨터에서 직접 포맷하는 순서는 [마이크로 SD 카드 포맷 방법](/blog/ko/format-microsd)에 있습니다.

## 아이폰 사용자라면 무엇을 같이 보면 좋나요?

라즈베리 파이용으로 지운 FAT32 카드는 아이폰에서도 읽을 수 있는 형식입니다. [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)는 아이폰이 읽는 형식에 exFAT과 FAT32를 적습니다.

아이폰에 microSD 카드를 연결하는 순서는 [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd)에, 아이폰 사진을 USB 메모리로 옮기는 순서는 [아이폰 사진 USB로 옮기기](/blog/ko/iphone-photos-to-usb)에 정리했습니다.

## 라즈베리 파이 SD 카드 자주 묻는 질문

### 라즈베리 파이 OS Lite는 8GB 카드로 충분한가요?

라즈베리파이가 권하는 최소 용량은 8GB입니다. 다만 라즈베리파이는 여유를 두고 더 큰 용량을 고르라고 권합니다. 프로그램과 자료를 더 둘 계획이면 그만큼 큰 카드를 고릅니다.

### 2TB 카드를 라즈베리 파이에 써도 되나요?

라즈베리파이 문서는 2TB 미만 카드를 쓸 수 있다고 적습니다. 2TB를 넘는 카드는 MBR 한계 때문에 지원하지 않습니다.

### Raspberry Pi Zero에 512GB 카드를 넣으면?

Zero는 256GB 이하의 부팅 파티션에서만 부팅합니다. 첫 모델과 초기 Raspberry Pi 2도 같습니다. 카드를 사기 전에 이 한도를 확인합니다.

### 라즈베리 파이 공식 카드를 꼭 사야 하나요?

아닙니다. 라즈베리파이 문서는 어떤 카드를 살지 모르겠으면 공식 카드를 고려하라고 적습니다. 다른 카드도 용량과 속도 표시를 보고 고를 수 있습니다.

### 쓰던 카드에 Imager로 OS를 쓰면 기존 파일은 어떻게 되나요?

모두 지워집니다. Imager는 쓰기 전에 자료를 지운다고 경고합니다. 남길 파일은 먼저 다른 저장장치에 복사합니다.
