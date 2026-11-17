---
title: "SD 카드 A1·A2 뜻: 앱 성능 등급의 기준 수치와 고르는 순서"
description: "SD 카드의 A1·A2는 카드에 설치한 앱을 실행할 때의 최소 성능을 나타내는 앱 성능 등급입니다. 등급별 IOPS 기준, A2 성능이 나는 조건, 스피드 클래스와의 차이, 고르는 순서를 SD Association 문서 기준으로 정리했습니다."
date: 2026-11-18
---

## 핵심 요약

A1·A2는 SD 카드의 앱 성능 등급(Application Performance Class)입니다. 카드에 앱과 앱 데이터를 두고 실행할 때 필요한 최소 성능을 나타냅니다.

기준은 작은 데이터를 무작위로 읽고 쓰는 횟수(IOPS)와 연속 쓰기 속도입니다. A1은 읽기 1500 IOPS, 쓰기 500 IOPS, A2는 읽기 4000 IOPS, 쓰기 2000 IOPS입니다. 연속 쓰기는 둘 다 10MB/s입니다.

A2 성능은 A2를 지원하는 기기와 A2 카드를 함께 쓸 때만 납니다. 한쪽이 A1이면 A1 성능까지 기대합니다.

"A2 카드가 A1보다 무조건 빠른가요?" "카메라에도 A2가 필요한가요?" 카드를 고를 때 자주 나오는 질문입니다. 이 글은 A1·A2 표시의 뜻과 기준 수치, 다른 속도 표시와의 차이, 고르는 순서를 정리합니다. 카드에 적힌 표시 전체는 [에스디 카드란?](/blog/ko/what-is-sd-card)에 있습니다.

## A1·A2 앱 성능 등급은 무엇인가요?

SD 카드는 원래 사진, 영상, 음악을 담는 용도로 많이 썼습니다. 이런 작업은 큰 파일을 이어서 쓰는 연속 쓰기가 중심입니다. 스마트폰에서 카드에 앱을 설치하면 사정이 달라집니다. 앱은 작은 데이터를 여기저기서 읽고 씁니다.

[SD Association의 앱 성능 등급 안내](https://www.sdcard.org/developers/sd-standard-overview/application-performance-class/)는 이 수요 때문에 앱 성능 등급을 만들었다고 설명합니다. 등급은 무작위 성능과 연속 성능을 함께 보장합니다.

| 등급 | 정의한 규격 | 특징 |
| --- | --- | --- |
| A1 (Application Performance Class 1) | SD Physical 5.1 | 앱 성능 등급의 첫 기준 |
| A2 (Application Performance Class 2) | SD Physical 6.0 | Command Queuing과 Cache 기능으로 A1보다 높은 성능 |

SD Association은 앱 성능 등급을 UHS 방식의 SDHC·SDXC 카드에 적용한다고 적습니다. 용량 규격은 [SDHC·SDXC·SDUC 차이](/blog/ko/sdhc-vs-sdxc)에, UHS 방식은 [UHS-I·UHS-II·SD Express 차이](/blog/ko/uhs-sd-card)에 있습니다.

## A1과 A2의 기준 수치는 얼마인가요?

| 등급 | 무작위 읽기 | 무작위 쓰기 | 연속 쓰기 |
| --- | --- | --- | --- |
| A1 | 1500 IOPS 이상 | 500 IOPS 이상 | 10MB/s 이상 |
| A2 | 4000 IOPS 이상 | 2000 IOPS 이상 | 10MB/s 이상 |

A1 수치는 [SD Association 백서](https://www.sdcard.org/downloads/pls/latest_whitepapers/Application_Peformance_Class_White_Paper.pdf)의 표 1에 있습니다. A2 수치는 [Samsung PRO Plus microSD 데이터시트](https://download.semiconductor.samsung.com/resources/data-sheet/2023_samsung_data_sheet_microsd_card_pro_plus_v1.1.pdf)의 각주에 A1과 함께 적혀 있습니다.

IOPS는 1초에 처리하는 읽기·쓰기 명령 수입니다. SD Association은 여기서 IOPS를 4KB 읽기·쓰기 명령 수로 정의합니다. 이 수치는 규격이 정한 조건에서 측정한 최솟값입니다. Samsung 데이터시트도 성능은 기기에 따라 달라질 수 있다고 적습니다.

## A2 카드는 아무 기기에서나 A2 성능이 나나요?

나지 않습니다. SD Association은 A2 성능이 A2를 지원하는 기기와 A2 카드의 조합에서만 난다고 설명합니다. A1과 A2가 섞이면 최소 A1 성능을 쓸 수 있다고 적습니다.

| 기기 | 카드 | 기대 성능 |
| --- | --- | --- |
| A2 지원 | A2 | A2 |
| A2 지원 | A1 | A1 |
| A2 미지원 | A2 | 최소 A1 |
| A2 미지원 | A1 | A1 |

기기는 카드 안의 SD Status 레지스터에서 카드의 앱 성능 등급을 읽습니다. 사용자는 카드와 기기의 A1·A2 표시를 맞춰 보고 판단합니다.

## A1·A2는 스피드 클래스와 어떻게 다른가요?

둘 다 속도 표시지만 재는 대상이 다릅니다.

| 표시 | 재는 것 | 주로 맞는 작업 |
| --- | --- | --- |
| 스피드 클래스 (Class 10, U3, V30) | 최소 연속 쓰기 속도 | 영상 녹화 |
| 앱 성능 등급 (A1, A2) | 무작위 읽기·쓰기 횟수와 연속 쓰기 속도 | 카드에 설치한 앱 실행 |
| 버스 방식 (UHS-I, UHS-II) | 카드와 기기 사이 통로의 최대 속도 | 대용량 전송 |

영상 녹화는 큰 데이터를 일정한 속도로 이어서 씁니다. 그래서 스피드 클래스가 기준입니다. 앱 실행은 작은 데이터를 무작위로 다룹니다. 그래서 IOPS가 기준입니다. 스피드 클래스 읽는 법은 [SD 카드 속도 표시 읽는 법](/blog/ko/sd-card-speed-class)에 있습니다.

한 카드가 U3, V30, A2 표시를 함께 가질 수 있습니다. 표시마다 보장하는 내용이 다릅니다. 영상 녹화 기기는 설명서의 스피드 클래스를 먼저 봅니다.

## 왜 앱 실행에는 무작위 성능이 중요한가요?

SD Association 백서는 안드로이드 Marshmallow의 Adoptable Storage 기능을 배경으로 듭니다. 이 기능은 설치된 microSD 카드에서 앱을 실행하게 합니다.

백서에 따르면 안드로이드는 카드를 내부 저장공간처럼 쓰기 전에 성능 시험을 합니다. 카드 성능이 내장 메모리의 25% 미만이면 카드가 느리다는 메시지를 띄웠습니다. 이후 Google은 기준을 고정값으로 바꾸는 업데이트를 공개했다고 백서는 적습니다.

백서는 A1 카드가 이 시험을 통과할 수준이라고 설명합니다. 다만 시험 결과는 기기 환경에도 달려 있어 Google이 보장하지 않는다고 덧붙입니다.

## A1과 A2 중 무엇을 고르나요?

1. 기기 설명서의 메모리 카드 항목에서 A1, A2 권장 여부를 확인합니다.
2. 같은 항목에서 지원 용량 규격(SDHC, SDXC)과 카드 크기(SD, microSD)를 확인합니다. 크기 차이는 [micro SD 카드와 SD 카드 차이](/blog/ko/microsd-vs-sd)에 있습니다.
3. 카드에 앱을 설치해 실행할 계획이면 A1 이상 카드를 고릅니다.
4. 기기가 A2를 지원한다고 적혀 있으면 A2 카드에서 A2 성능을 기대합니다.
5. 영상 녹화가 주 용도면 설명서의 스피드 클래스(U3, V30 등)를 먼저 맞춥니다.
6. 사진·영상 보관이 주 용도면 A1·A2 표시는 필수가 아닙니다. 용량과 스피드 클래스를 먼저 봅니다.

특정 제품은 추천하지 않습니다. 같은 등급이라도 카드마다 실제 성능이 다릅니다. 이 글은 카드별 IOPS를 측정하지 않았습니다.

## 아이폰에서 쓸 SD 카드에도 A2가 필요한가요?

A1·A2는 카드에 설치한 앱을 실행할 때의 성능 기준입니다. 아이폰은 카드 리더로 SD 카드의 사진·영상과 파일을 옮깁니다.

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)는 SDSC, SDHC, SDXC, microSD 카드를 지원 목록에 적습니다. 같은 문서는 iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, iPhone 16 Pro Max가 USB 3 전송 속도를 지원하고, 그 밖의 어댑터와 기기는 USB 2 속도를 쓴다고 적습니다. 이 문서에는 A1·A2 조건이 없습니다. 이 글은 아이폰에서 등급별 속도를 측정하지 않았습니다.

리더 연결 순서는 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에 있습니다.

## 아이폰 사진을 USB 메모리에 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. USB 메모리 연결 조건은 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## SD 카드 A1·A2 자주 묻는 질문

### A2 카드가 A1 카드보다 항상 빠른가요?

아닙니다. SD Association은 A2 성능이 A2 지원 기기와 A2 카드의 조합에서만 난다고 설명합니다. 기기가 A2를 지원하지 않으면 최소 A1 성능을 기대합니다.

### A1·A2 표시가 없는 카드는 앱을 못 돌리나요?

표시가 없다는 것은 앱 성능 등급의 최소 성능을 보장하지 않는다는 뜻입니다. 백서는 등급 표시가 없는 카드는 기기가 자체 성능 시험으로 판단할 수 있다고 적습니다.

### 카메라 영상 녹화에도 A2가 필요한가요?

영상 녹화의 기준은 스피드 클래스입니다. [SD Association FAQ](https://www.sdcard.org/consumers/faq/)는 풀HD~4K 녹화에 U3·V30 같은 표시를 안내합니다. 카메라 설명서의 권장 표시를 따릅니다.

### A1과 A2의 연속 쓰기 속도는 다른가요?

같습니다. Samsung 데이터시트는 A1과 A2 모두 연속 쓰기 10MB/s를 적습니다. 두 등급의 차이는 무작위 읽기·쓰기 IOPS입니다.

### microSD에도 A1·A2가 있나요?

있습니다. Samsung PRO Plus microSD 데이터시트가 A1·A2 기준을 적습니다. SD Association은 앱 성능 등급을 UHS 방식의 SDHC·SDXC 카드에 적용한다고 설명합니다.
