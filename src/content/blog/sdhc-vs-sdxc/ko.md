---
title: "SDHC·SDXC·SDUC 차이: 용량, 파일 시스템, 기기 호환 확인법"
description: "SDHC, SDXC, SDUC는 SD 카드의 용량 규격입니다. 규격마다 용량 범위와 기본 파일 시스템, 쓸 수 있는 기기가 다릅니다. SD Association 문서를 기준으로 차이와 호환 확인 순서를 정리했습니다."
date: 2026-11-17
---

## 핵심 요약

SDHC, SDXC, SDUC는 SD 카드의 용량 규격입니다. SDHC는 32GB까지, SDXC는 2TB까지, SDUC는 128TB까지입니다.

규격마다 기본 파일 시스템이 다릅니다. SDHC는 FAT32, SDXC와 SDUC는 exFAT을 씁니다.

상위 규격 기기는 하위 규격 카드를 씁니다. 반대는 안 됩니다. SDHC만 지원하는 기기에는 SDXC 카드를 쓸 수 없습니다.

"64GB 카드를 샀는데 카메라가 못 읽어요." "SDXC와 SDHC 중 뭘 사야 해요?" 카드를 고를 때 자주 나오는 질문입니다. 이 글은 세 규격의 차이와 내 기기에 맞는 규격을 확인하는 순서를 정리합니다. SD 카드 전체 종류는 [에스디 카드란?](/blog/ko/what-is-sd-card)에 있습니다.

## SDHC·SDXC·SDUC는 무엇이 다른가요?

용량 범위와 기본 파일 시스템이 다릅니다. [SD Association의 용량 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 기준입니다.

| 규격 | 용량 | 기본 파일 시스템 |
| --- | --- | --- |
| SD | 2GB까지 | FAT12, FAT16 |
| SDHC | 2GB 초과 32GB까지 | FAT32 |
| SDXC | 32GB 초과 2TB까지 | exFAT |
| SDUC | 2TB 초과 128TB까지 | exFAT |

카드 앞면의 로고가 규격을 알려 줍니다. microSD도 같은 규격을 따릅니다. microSDHC, microSDXC처럼 이름 앞에 micro가 붙습니다. 크기 차이는 [microSD와 SD 카드 차이](/blog/ko/microsd-vs-sd)에 정리했습니다.

## SDXC 카드를 SDHC 기기에 쓸 수 있나요?

쓸 수 없습니다. [SD Association의 호환 안내](https://www.sdcard.org/consumers/sd-sdhc-sdxc-and-sduc-card-capacity-choices/)는 기기 규격별로 쓸 수 있는 카드를 이렇게 정합니다.

| 기기 규격 | 쓸 수 있는 카드 |
| --- | --- |
| SD 기기 | SD |
| SDHC 기기 | SD, SDHC |
| SDXC 기기 | SD, SDHC, SDXC |
| SDUC 기기 | SD, SDHC, SDXC, SDUC |

[SD Association FAQ](https://www.sdcard.org/consumers/faq/)도 기존 SD 기기와 SDHC 기기는 SDXC 카드와 호환되지 않는다고 설명합니다. SD 카드와 SDHC 카드는 SDXC 기기에서 씁니다.

SDUC 카드는 SDUC 기기에서만 씁니다. 2TB를 넘는 카드를 사기 전에 기기가 SDUC를 지원하는지 꼭 확인하세요.

## 내 기기가 어떤 규격을 지원하는지 어떻게 확인하나요?

SD Association은 카드를 넣기 전에 기기의 SD 로고나 설명서로 규격을 확인하라고 안내합니다.

1. 기기 본체나 카드 슬롯 주변에서 SDHC, SDXC, SDUC 로고를 찾습니다.
2. 로고가 없으면 설명서의 메모리 카드 항목에서 지원 규격과 최대 용량을 봅니다.
3. 설명서에 없으면 제조사 지원 페이지에서 모델명으로 찾습니다.
4. 지원 규격 안에서 필요한 용량의 카드를 고릅니다.

SDXC를 지원하는 기기라도 설명서에 최대 용량을 따로 적는 경우가 있습니다. 설명서의 숫자를 따르세요.

## SDHC와 SDXC 중 무엇을 골라야 하나요?

기기가 둘 다 지원하면 필요한 용량과 파일 크기로 고릅니다.

| 상황 | 맞는 규격 |
| --- | --- |
| 기기가 SDHC까지만 지원 | SDHC(32GB 이하) |
| 32GB보다 큰 용량이 필요 | SDXC |
| 4GB가 넘는 영상 파일을 저장 | 기본 형식이 exFAT인 SDXC |
| 2TB보다 큰 용량이 필요 | SDUC(SDUC 기기 필요) |

FAT32는 파일 하나를 4GiB까지 저장합니다. [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) 기준입니다. SDHC 카드에 긴 영상을 바로 옮기면 파일 크기 제한에 걸릴 수 있습니다.

속도는 용량 규격과 따로 표시됩니다. Class 10, U3, V30 같은 스피드 클래스와 UHS-I 같은 버스 방식을 함께 보세요.

## SDHC·SDXC 카드는 아이폰에서 쓸 수 있나요?

카드 리더를 연결하면 씁니다. [Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)의 지원 목록에는 SDSC, SDHC, SDXC, miniSD, microSD, MMC 카드가 있습니다.

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 따르면 아이폰에서 쓰는 저장장치는 데이터 파티션이 하나여야 합니다. 형식은 APFS, macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나여야 합니다. SDHC 기본 형식인 FAT32와 SDXC 기본 형식인 exFAT이 모두 목록에 있습니다.

카드 리더 쓰는 순서는 [아이폰 SD 카드 리더 사용법](/blog/ko/iphone-sd-card-reader)에 있습니다.

## SD 카드를 규격에 맞게 포맷하려면?

SD Association은 운영체제의 일반 포맷 도구 대신 SD Memory Card Formatter를 쓰라고 권합니다. 일반 도구로 포맷하면 카드 성능이 최적이 아닐 수 있다고 설명합니다.

1. 카드의 사진과 파일을 다른 저장장치에 먼저 복사합니다. 포맷하면 카드 자료가 모두 지워집니다.
2. 카메라처럼 카드를 쓸 기기에 포맷 메뉴가 있으면 그 기기에서 포맷합니다.
3. PC나 Mac에서 포맷할 때는 SD Memory Card Formatter를 씁니다.

자세한 순서는 [SD 카드 포맷 방법](/blog/ko/format-sd-card)과 [마이크로 SD 카드 포맷](/blog/ko/format-microsd)에 정리했습니다. 카드가 인식되지 않으면 [SD 카드 포맷 안될 때](/blog/ko/sd-card-not-working)를 보세요.

## 아이폰 사진을 USB 메모리에 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. USB 메모리 연결 조건은 [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide)에 있습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## SDHC·SDXC·SDUC 자주 묻는 질문

### 32GB 카드는 SDHC인가요, SDXC인가요?

SD Association 표에서 SDHC는 2GB 초과 32GB까지, SDXC는 32GB 초과 2TB까지입니다. 32GB 카드는 SDHC 범위에 들어갑니다.

### SDHC 기기에 64GB SDXC 카드를 넣으면 어떻게 되나요?

SD Association 호환 안내에 따르면 SDHC 기기는 SD와 SDHC 카드만 씁니다. 64GB SDXC 카드는 그 기기에서 쓸 수 없습니다.

### SDXC 기기에서 SDHC 카드를 쓸 수 있나요?

쓸 수 있습니다. SDXC 기기는 SD, SDHC, SDXC 카드를 씁니다.

### microSDXC와 SDXC는 같은 규격인가요?

용량 규격은 같습니다. 크기만 다릅니다. microSD는 11 x 15 x 1.0mm, SD는 32 x 24 x 2.1mm입니다.

### SDXC 카드는 왜 exFAT인가요?

SD Association이 SDXC의 기본 파일 시스템을 exFAT으로 정했습니다. exFAT은 FAT32의 4GiB 파일 제한이 없습니다. 형식 차이는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에서 확인하세요.
