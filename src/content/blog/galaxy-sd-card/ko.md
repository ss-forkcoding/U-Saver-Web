---
title: "갤럭시 SD 카드 슬롯과 설정: 지원 모델 확인, 포맷, 마운트 해제, 암호화까지"
description: "갤럭시 SD 카드 슬롯이 있는 모델과 없는 모델, 최대 용량 확인법, 트레이 구조, 설정에서 포맷·마운트 해제·암호화하는 경로, 카드가 인식되지 않을 때 순서를 Samsung 공식 안내로 정리했습니다."
date: 2026-11-21
---

## 핵심 요약

갤럭시 SD 카드는 모든 갤럭시에서 쓸 수 있지 않습니다. Samsung 공식 표에서 갤럭시 S 시리즈는 S20 계열까지 microSD를 받고, S21 계열부터는 외장 메모리가 없습니다. Z Flip·Z Fold 시리즈도 Samsung 일본 안내에서 미지원입니다.

카드를 쓰는 모델이라면 설정의 저장공간 화면에서 카드를 포맷하고, 마운트 해제하고, 암호화합니다. 메뉴 경로는 One UI 버전과 모델마다 다릅니다.

카드를 빼기 전에는 마운트 해제를 먼저 합니다. Samsung 일본 안내는 해제하지 않고 빼면 저장된 자료가 손상될 수 있다고 적습니다.

"새 갤럭시를 샀는데 SD 카드 자리가 안 보여요." "카드를 넣었는데 설정 어디서 관리하나요?" 갤럭시 SD 카드를 처음 다루는 분들이 자주 하는 질문입니다. 이 글은 내 갤럭시에 슬롯이 있는지 확인하는 법과 설정 메뉴에서 카드를 관리하는 법을 다룹니다. 사진을 카드로 옮기는 순서는 [갤럭시 사진 SD 카드로 옮기기](/blog/ko/android-photos-to-sd)에, 안드로이드폰 전반의 카드 사용법은 [핸드폰 SD 카드 사용법](/blog/ko/android-microsd)에 정리했습니다.

## 내 갤럭시에 SD 카드 슬롯이 있나요?

모델마다 다릅니다. [Samsung 미국 지원 안내](https://www.samsung.com/us/support/answer/ANS10001928/)는 모든 Samsung 기기가 microSD를 지원하지는 않으며, 지원하지 않는 모델의 트레이에는 SIM 자리만 있다고 적습니다.

[Samsung 영국 지원 안내](https://www.samsung.com/uk/support/mobile-devices/what-size-memory-card-does-my-smartphone-accept/)의 S 시리즈 표 일부입니다.

| 모델 | 외장 메모리 최대 용량 |
| --- | --- |
| Galaxy S6, S6 edge, S6 edge+ | 외장 메모리 없음 |
| Galaxy S7, S7 edge | 200GB까지 |
| Galaxy S8, S8+ | 256GB까지 |
| Galaxy S9, S9+ | 400GB까지 |
| Galaxy S10, S10+, S10e | 512GB까지 |
| Galaxy S20, S20+, S20 Ultra | 1TB까지 |
| Galaxy S21 5G, S21+ 5G, S21 Ultra 5G | 외장 메모리 없음 |

이 표는 영국·아일랜드 모델 기준입니다. 같은 안내는 지역에 따라 사양이 다를 수 있다고 적습니다. [Samsung 일본 지원 안내](https://www.samsung.com/jp/support/mobile-devices/tell-me-a-micro-sd-card-or-sim-card-that-can-be-used-in-the-device/)는 일본 판매 모델 기준으로 S21 시리즈 이후, Z Flip 시리즈, Z Fold 시리즈, A36 5G, A57 5G를 외부 SD 카드 미지원으로 적습니다. 같은 표에서 A25 5G는 1.5TB까지, A55 5G는 1TB까지입니다.

국내 모델은 이렇게 확인합니다.

1. 설정 > 휴대전화 정보에서 모델명을 확인합니다.
2. Samsung 사이트의 해당 모델 사양 페이지에서 외장 메모리 항목을 찾습니다.
3. 최대 용량을 적어 둡니다. 카드는 이 용량 안에서 고릅니다.

카드 용량 규격은 [SDHC·SDXC·SDUC 차이](/blog/ko/sdhc-vs-sdxc)에 있습니다. 이 글은 특정 카드를 시험하거나 추천하지 않습니다.

## 갤럭시 SD 카드 트레이는 어떻게 생겼나요?

대부분 SIM 트레이와 함께 씁니다. [Samsung 영국 지원 안내](https://www.samsung.com/uk/support/mobile-devices/using-an-sd-card/)에 나온 트레이 종류입니다.

| 트레이 종류 | 넣을 수 있는 것 |
| --- | --- |
| 겸용(하이브리드) 트레이 | SIM 두 개, 또는 SIM 하나와 SD 카드 하나 |
| 듀얼 SIM 트레이 | SIM 두 개 |
| 단일 SIM 트레이 | SIM 하나 |

트레이에 SD 카드 자리를 알려 주는 표시가 있습니다. 카드는 금색 접점이 아래를 향하게 놓습니다. [Samsung 미국 지원 안내](https://www.samsung.com/us/support/answer/ANS10001928/)는 꺼내기 핀을 마이크나 스피커 구멍에 넣지 않도록 트레이 테두리를 확인하라고 적습니다. 트레이가 빠지지 않거나 손상되면 서비스를 받으라고 안내합니다.

배터리를 빼는 모델은 다릅니다. 같은 미국 안내에 따르면 XCover6 Pro는 전원을 끄고 뒷면 덮개와 배터리를 뺀 뒤 SIM 자리 바로 위의 카드 자리에 카드를 넣습니다.

## 갤럭시 설정에서 SD 카드는 어디서 보나요?

설정 > 배터리 및 디바이스 케어 > 저장공간입니다. [Samsung 미국 지원 안내](https://www.samsung.com/us/support/answer/ANS10001928/)는 저장공간 화면 위쪽의 내장 메모리 항목을 왼쪽으로 밀면 SD 카드 화면이 나온다고 적습니다. [Samsung 일본 지원 안내](https://www.samsung.com/jp/support/mobile-devices/how-do-i-dismount-an-external-sd-card-of-galaxy/)는 저장공간에서 내장 메모리 칸을 누른 뒤 외부 저장공간을 고르는 순서로 설명합니다.

이 화면에서 하는 일은 아래와 같습니다.

| 하고 싶은 일 | 설정 위치 | 출처 |
| --- | --- | --- |
| 카드 포맷 | 저장공간 > SD 카드 > 더보기 > 포맷 | [Samsung 미국 안내](https://www.samsung.com/us/support/answer/ANS10001928/) |
| 마운트 해제 | 저장공간 > SD 카드(외부 저장공간) > 더보기 > 마운트 해제 | [Samsung 일본 안내](https://www.samsung.com/jp/support/mobile-devices/how-do-i-dismount-an-external-sd-card-of-galaxy/) |
| 암호화·복호화 | 설정 검색에서 SD 카드 암호화 또는 SD 카드 복호화 | [Samsung 미국 안내](https://www.samsung.com/us/support/answer/ANS10001928/) |
| 앱 저장 위치 변경 | 설정 > 애플리케이션 > 앱 선택 > 저장공간 > 변경 | [Samsung 미국 안내](https://www.samsung.com/us/support/answer/ANS10001928/) |

메뉴 이름은 One UI 버전에 따라 디바이스 케어, 배터리 및 디바이스 케어처럼 다르게 보입니다. 같은 미국 안내는 Samsung 안드로이드 기기가 카드를 내장 메모리처럼 합치는 기능(Adoptable storage)을 지원하지 않는다고 적습니다. 카드는 별도 저장공간으로 보입니다.

## 갤럭시에서 SD 카드는 어떻게 포맷하나요?

설정에서 포맷합니다. 포맷하면 카드의 모든 자료가 지워집니다. [삼성전자서비스 안내](https://www.samsungsvc.co.kr/solution/618136)는 포맷 전에 카드를 컴퓨터에 연결해 자료를 복사하라고 권합니다. 같은 안내의 순서입니다.

1. 설정 > 배터리 및 디바이스 케어로 이동합니다.
2. 저장공간을 누릅니다.
3. 더 보기를 누르고 고급을 누릅니다.
4. SD 카드를 누릅니다.
5. 포맷을 누르고 화면 안내를 따릅니다.

[Samsung 미국 지원 안내](https://www.samsung.com/us/support/answer/ANS10001928/)에는 저장공간 화면에서 SD 카드 화면으로 넘긴 뒤 더보기(점 세 개) > 포맷을 누르는 경로가 나옵니다. 모델에 따라 둘 중 하나가 보입니다.

카드 형식은 아래 기준을 따릅니다.

| 항목 | Samsung 안내 | 출처 |
| --- | --- | --- |
| 쓸 수 있는 형식 | FAT32 또는 exFAT, exFAT 권장 | [Samsung 미국 안내](https://www.samsung.com/us/support/answer/ANS10001928/) |
| FAT32 | 32GB 미만 카드에서만, 4GB 넘는 파일 불가 | 같은 안내 |
| 용량별 기본 형식 | 32GB까지 FAT32, 64GB부터 exFAT | [삼성전자서비스 안내](https://www.samsungsvc.co.kr/solution/39935) |
| NTFS | 안드로이드 12·13·14에서 읽기만 지원 | 같은 안내 |

컴퓨터에서 포맷하는 방법은 [마이크로 SD 카드 포맷 방법](/blog/ko/format-microsd)에 있습니다.

## 갤럭시 SD 카드는 어떻게 마운트 해제하나요?

카드를 빼기 전에 설정에서 해제합니다. [Samsung 일본 지원 안내](https://www.samsung.com/jp/support/mobile-devices/how-do-i-dismount-an-external-sd-card-of-galaxy/)의 Galaxy A55(Android 16, One UI 8.5) 기준 순서입니다.

1. 설정 앱을 엽니다.
2. 디바이스 케어를 누릅니다.
3. 저장공간을 누릅니다.
4. 내장 메모리 칸을 누릅니다.
5. 외부 저장공간을 누릅니다.
6. 오른쪽 위 점 세 개(더보기)를 누릅니다.
7. 마운트 해제를 누릅니다. 해제되면 SD 카드 정보가 보이지 않습니다.

이 경로로 안 되면 같은 안내처럼 내 파일 앱에서 SD 카드를 열고 점 세 개 > 마운트 해제를 누릅니다. 외장 카드 리더를 연결했을 때도 내 파일에서 해제합니다. [삼성전자서비스 안내](https://www.samsungsvc.co.kr/solution/39935)는 카드를 비정상적으로 제거하면 카드가 손상될 수 있다고 적습니다.

## 갤럭시 SD 카드를 암호화하면 무엇이 달라지나요?

암호화한 기기에서만 카드가 읽힙니다. [Samsung 미국 지원 안내](https://www.samsung.com/us/support/answer/ANS10001928/)의 순서입니다.

1. 휴대폰을 충전기에 연결합니다. 암호화와 복호화는 배터리를 빨리 씁니다.
2. 설정을 열고 SD 카드 암호화 또는 SD 카드 복호화를 검색해 고릅니다.
3. SD 카드 암호화 또는 SD 카드 복호화를 누릅니다.
4. 화면 잠금을 설정해 두었다면 잠금 정보를 입력합니다.
5. 작업이 끝날 때까지 기다립니다. 카드 용량과 자료 양에 따라 몇 분이 걸립니다.

같은 안내는 카드를 암호화한 채 휴대폰을 초기화하면 그 휴대폰도 카드를 읽지 못한다고 적습니다. 초기화하거나 카드를 컴퓨터, 다른 휴대폰에서 쓰기 전에는 복호화를 먼저 합니다.

## 갤럭시가 SD 카드를 인식하지 못하면?

순서대로 확인합니다. [삼성전자서비스 안내](https://www.samsungsvc.co.kr/solution/618136)의 순서입니다.

| 순서 | 할 일 | 내용 |
| --- | --- | --- |
| 1 | 소프트웨어 업데이트 | 설정 > 소프트웨어 업데이트 > 다운로드 및 설치 |
| 2 | 카드 다시 넣기 | 전원을 끄고 카드를 빼서 결함과 이물질을 확인한 뒤 부드러운 천으로 닦아 다시 넣습니다 |
| 3 | 다른 기기에서 확인 | 다른 기기에 넣어 인식되는지 봅니다 |
| 4 | 강제 재시작 | 측면 버튼과 음량(하) 버튼으로 전원을 끄고 다시 켭니다 |
| 5 | 안전 모드 | 안전 모드에서 인식되면 최근 설치한 앱을 삭제해 봅니다 |
| 6 | 포맷 | 자료를 컴퓨터에 복사한 뒤 설정에서 포맷합니다 |
| 7 | 휴대전화 진단 | Samsung Members 앱의 휴대전화 진단에서 SD 카드 항목을 점검합니다 |

다른 휴대폰과 PC에서도 인식되지 않으면 [삼성전자서비스 안내](https://www.samsungsvc.co.kr/solution/39935)는 카드 손상일 수 있으니 서비스센터 점검을 권합니다. 같은 안내는 서비스센터가 데이터 이동을 해 주지 않으니 직접 백업하라고 적습니다. 카드 점검 순서는 [SD 카드 포맷 안될 때](/blog/ko/sd-card-not-working)에도 정리했습니다.

## 슬롯이 없는 갤럭시는 SD 카드를 어떻게 쓰나요?

USB-C 카드 리더를 연결하는 방법이 있습니다. [Samsung 일본 지원 안내](https://www.samsung.com/jp/support/mobile-devices/how-do-i-dismount-an-external-sd-card-of-galaxy/)는 외장 카드 리더를 쓸 때 내 파일 앱에서 마운트 해제하라고 적습니다. 리더의 동작은 제품마다 다르니 리더 제조사의 안내를 확인하세요. 카드를 컴퓨터에서 여는 방법은 [SD 카드 컴퓨터 연결 방법](/blog/ko/sd-card-to-pc)에 있습니다.

## 아이폰에도 SD 카드 슬롯이 있나요?

없습니다. 아이폰은 카드 리더를 충전 단자에 연결하고 파일 앱에서 카드를 엽니다. 갤럭시에서 exFAT으로 쓰던 카드는 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 나온 형식(APFS, macOS 확장, exFAT, FAT32, FAT)에 들어갑니다. 연결 방법은 [아이폰 SD 카드 슬롯 있나요?](/blog/ko/iphone-sd-card-slot)와 [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd)에 정리했습니다.

## 갤럭시 SD 카드 자주 묻는 질문

### 갤럭시 S24나 S25에 SD 카드를 넣을 수 있나요?

Samsung 영국 안내의 표에서 S21 계열은 외장 메모리가 없습니다. Samsung 일본 안내도 S21 시리즈 이후를 미지원으로 적습니다. 정확한 사양은 해당 모델의 Samsung 사양 페이지에서 확인하세요.

### 갤럭시에서 SD 카드를 내장 메모리처럼 합칠 수 있나요?

Samsung 미국 안내는 Samsung 안드로이드 기기가 이 기능(Adoptable storage)을 지원하지 않는다고 적습니다. 카드는 별도 저장공간으로 씁니다.

### SD 카드를 넣으면 SIM을 하나 못 쓰나요?

겸용 트레이라면 그렇습니다. Samsung 영국 안내에 따르면 겸용 트레이는 SIM 두 개, 또는 SIM 하나와 SD 카드 하나를 받습니다.

### 컴퓨터에서 포맷한 카드를 갤럭시에 넣어도 되나요?

FAT32나 exFAT이면 쓸 수 있는 형식입니다. Samsung 미국 안내는 NTFS와 APFS가 호환되지 않는다고 적습니다. 인식에 문제가 있으면 자료를 옮긴 뒤 갤럭시 설정에서 다시 포맷합니다.

### 마운트 해제 없이 카드를 빼면 어떻게 되나요?

Samsung 일본 안내는 저장된 자료가 손상될 수 있다고 적습니다. 카드를 빼기 전에는 설정이나 내 파일에서 마운트 해제를 먼저 합니다.
