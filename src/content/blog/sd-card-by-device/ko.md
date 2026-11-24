---
title: "마이크로 SD 카드 기기별 총정리: 휴대폰, 게임기, 카메라, 아이폰까지 조건과 사용법"
description: "마이크로 SD 카드를 기기별로 정리했습니다. 안드로이드폰, 갤럭시, 닌텐도 스위치와 스위치 2, 스팀 덱, 3DS, 카메라·블랙박스·홈캠, 아이폰에서 맞는 카드 조건과 자세한 글을 공식 안내 기준으로 한곳에 모았습니다."
date: 2026-11-24
---

## 핵심 요약

마이크로 SD 카드는 기기마다 받는 조건이 다릅니다. 카드를 사기 전에 내 기기의 설명서나 공식 안내에서 카드 크기, 최대 용량, 속도 표시, 형식을 확인합니다.

같은 microSD라도 기기가 쓰는 방식이 다릅니다. 닌텐도 스위치 2는 microSD Express 카드만 게임 저장에 쓰고, 3DS 계열은 32GB까지만 씁니다. 스팀 덱은 카드를 ext4 형식으로 포맷합니다.

아이폰에는 카드 슬롯이 없습니다. 카드 리더를 충전 단자에 꽂아 파일 앱과 사진 앱에서 씁니다.

"휴대폰에 쓰던 카드를 스위치에 넣어도 되나요?" "카메라용 카드는 뭐가 달라요?" 마이크로 SD 카드를 여러 기기에서 쓰다 보면 이런 질문이 나옵니다. 이 글은 기기별 조건을 한 장으로 묶고, 기기마다 자세한 글로 연결합니다. 이 글은 특정 제품을 추천하지 않으며, 카드를 직접 시험하지 않았습니다.

## 마이크로 SD 카드는 어떤 기기에 쓰나요?

기기를 찾고 자세한 글로 넘어가세요.

| 기기 | 쓰는 카드 | 자세한 글 |
| --- | --- | --- |
| 안드로이드폰 | microSD | [핸드폰 SD 카드 사용법](/blog/ko/android-microsd) |
| 갤럭시 휴대폰 | microSD(모델에 따라 없음) | [갤럭시 SD 카드 슬롯과 설정](/blog/ko/galaxy-sd-card) |
| 갤럭시 탭·Fire 태블릿 | microSD | [태블릿 microSD 사용법](/blog/ko/tablet-microsd) |
| 아이폰 | 리더로 SD·microSD 연결 | [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd) |
| 아이패드 | 리더로 SD·microSD 연결 | [아이 패드 SD 카드 사용법](/blog/ko/ipad-sd-card) |
| 디지털카메라 | SD(기종에 따라 microSD) | [카메라 SD 카드 고르는 법](/blog/ko/camera-sd-card) |
| 고프로·액션캠 | microSD | [고프로 SD 카드 고르는 법](/blog/ko/gopro-sd-card) |
| 드론 | microSD | [드론 SD 카드 고르는 법](/blog/ko/drone-sd-card) |
| 블랙박스 | microSD | [블랙박스 SD 카드 고르는 법](/blog/ko/dashcam-sd-card) |
| 홈캠·CCTV | microSD | [홈캠·CCTV SD 카드 고르는 법](/blog/ko/security-camera-sd-card) |
| 닌텐도 스위치 | microSD | [닌텐도 스위치 SD 카드 사용법](/blog/ko/switch-microsd) |
| 닌텐도 스위치 2 | microSD Express | [스위치 2 SD 카드](/blog/ko/switch-2-microsd-express) |
| 스팀 덱 | microSD | [스팀 덱 SD 카드 사용법](/blog/ko/steam-deck-microsd) |
| 닌텐도 3DS 계열 | SD 또는 microSD | [3DS SD 카드 추천 기준](/blog/ko/3ds-sd-card) |
| 라즈베리 파이 | microSD | [라즈베리 파이 SD 카드 추천 기준](/blog/ko/raspberry-pi-sd-card) |

여러 기기에 공통인 사용법은 [마이크로 SD 카드 사용법](/blog/ko/how-to-use-microsd)에 있습니다.

## 마이크로 SD 카드의 표시는 어떻게 읽나요?

카드에는 용량 규격과 속도 표시가 적혀 있습니다. 기기 설명서의 표시와 맞춰 봅니다.

용량 규격마다 용량 범위와 기본 파일 시스템이 정해져 있습니다. [SD Association의 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 기준입니다.

| 규격 | 용량 | 기본 파일 시스템 |
| --- | --- | --- |
| SD(SDSC) | 2GB까지 | FAT12, FAT16 |
| SDHC | 2GB 초과 32GB까지 | FAT32 |
| SDXC | 32GB 초과 2TB까지 | exFAT |
| SDUC | 2TB 초과 128TB까지 | exFAT |

속도 표시는 영상 녹화에서 중요합니다. [SD Association의 스피드 클래스 안내](https://www.sdcard.org/developers/sd-standard-overview/speed-class/)에 따르면 V30은 UHS 방식에서 쓰고, V60과 V90은 UHS-II·UHS-III 방식에서 씁니다. 기기가 요구하는 표시와 같거나 높은 카드를 고르라고 안내합니다.

같은 안내에서 microSD 카드의 크기는 11 x 15 x 1.0mm이고 SD 카드는 32 x 24 x 2.1mm입니다. 표시를 더 자세히 보려면 [SD 카드 스피드 클래스](/blog/ko/sd-card-speed-class)와 [SDHC와 SDXC 차이](/blog/ko/sdhc-vs-sdxc)를 보세요. 두 카드 크기의 차이는 [마이크로 SD와 SD 차이](/blog/ko/microsd-vs-sd)에 있습니다.

## 기기별 마이크로 SD 카드 조건은 어떻게 다른가요?

제조사 공식 안내에 숫자로 나온 조건만 모았습니다.

| 기기 | 공식 안내의 조건 | 출처 |
| --- | --- | --- |
| 닌텐도 스위치 | microSD 2GB까지, microSDHC 4~32GB, microSDXC 64GB~2TB. microSDXC는 본체 업데이트가 필요합니다. UHS-I, 60~95MB/s 카드를 권합니다 | [Nintendo microSD FAQ](https://en-americas-support.nintendo.com/app/answers/detail/a_id/22481/~/microsd-card-faq) |
| 닌텐도 스위치 2 | microSD Express 카드만, 2TB까지. 일반 microSD는 스위치 화면 사진·동영상 복사에만 씁니다 | [Nintendo Switch 2 사양](https://www.nintendo.com/us/gaming-systems/switch-2/tech-specs/) |
| 스팀 덱 | microSD UHS-I, SD·SDHC·SDXC 지원. 카드는 ext4로 포맷합니다 | [Steam Deck 사양](https://www.steamdeck.com/en/tech), [Steam Deck FAQ](https://www.steamdeck.com/en/faq) |
| 3DS·3DS XL·2DS | SD 2GB까지, SDHC 4~32GB | [Nintendo 3DS 호환 카드](https://en-americas-support.nintendo.com/app/answers/detail/a_id/274/~/what-sd-cards-and-microsd-cards-are-compatible) |
| New 3DS·New 3DS XL·New 2DS XL | microSD 2GB까지, microSDHC 4~32GB. microSDXC는 호환되지 않습니다 | 같은 안내 |
| 갤럭시 S 시리즈 | S20 계열은 최대 1TB. S21 5G·S21+ 5G·S21 Ultra 5G는 외장 메모리가 없습니다 | [Samsung 메모리 카드 표](https://www.samsung.com/uk/support/mobile-devices/what-size-memory-card-does-my-smartphone-accept/) |

카메라, 액션캠, 드론, 블랙박스, 홈캠은 기종마다 조건이 다릅니다. 이 기기들은 설명서의 메모리 카드 항목을 읽는 법을 위 표의 자세한 글에서 다룹니다.

## 새 기기에 마이크로 SD 카드를 넣는 순서

기기가 달라도 순서는 비슷합니다.

1. 설명서에서 카드 크기, 최대 용량, 속도 표시를 확인합니다.
2. 카드에 남길 파일이 있으면 컴퓨터나 다른 저장장치에 먼저 복사합니다.
3. 설명서가 전원을 끄라고 하면 끈 뒤, 카드를 슬롯이나 트레이에 넣습니다. 카드는 한 방향으로만 들어가니 억지로 밀지 않습니다.
4. 기기의 설정 화면에서 카드를 포맷합니다. 포맷하면 카드의 자료가 모두 지워집니다.
5. 저장 위치를 카드로 바꾸거나, 데이터를 카드로 옮깁니다.
6. 카드를 뺄 때는 설정에서 마운트 해제를 하거나 전원을 끈 뒤 뺍니다.

포맷 방법은 기기마다 다릅니다. 컴퓨터에서 포맷하는 순서는 [마이크로 SD 카드 포맷 방법](/blog/ko/format-microsd)에 있습니다.

## 한 기기에서 쓰던 카드를 다른 기기에 옮겨 써도 되나요?

옮길 수 있는 카드와 그렇지 않은 카드가 있습니다. 공식 안내에 나온 예입니다.

| 상황 | 공식 안내 내용 |
| --- | --- |
| 안드로이드에서 내부 저장소로 포맷한 카드 | 다른 기기로 옮겨 쓸 수 없습니다. 옮겨 쓸 카드는 휴대용 저장소로 포맷합니다([Google 안내](https://support.google.com/android/answer/12153449?hl=en)) |
| 스위치에서 쓰던 일반 microSD를 스위치 2에 넣기 | 화면 사진·동영상 복사에만 씁니다 |
| 스팀 덱에서 쓰던 카드 | ext4로 포맷되어 있습니다. 다른 기기에서 쓰려면 그 기기에서 다시 포맷합니다 |
| 64GB 이상 카드를 3DS에 넣기 | SDXC·microSDXC는 호환되지 않습니다 |

다른 기기에 넣기 전에 카드 안의 파일을 먼저 컴퓨터로 옮기세요. 카드가 읽히지 않을 때는 [SD 카드 포맷 안될 때](/blog/ko/sd-card-not-working)를 보세요.

## 아이폰에서 마이크로 SD 카드를 쓰려면?

카드 리더를 충전 단자에 연결합니다. [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 따르면 USB-C to SD Card Camera Reader 같은 리더가 필요합니다. 카드는 데이터 파티션이 하나여야 하고 APFS, APFS(암호화), macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나로 포맷되어 있어야 합니다.

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)의 지원 목록에는 SDSC, SDHC, SDXC, miniSD, microSD, MMC가 있습니다. 카드를 연결한 뒤 파일 앱의 둘러보기에서 위치 아래의 카드 이름을 누릅니다.

스팀 덱에서 쓰던 ext4 카드는 Apple 목록에 없는 형식입니다. 아이폰에서 쓰려면 exFAT으로 다시 포맷하세요. 리더와 앱 순서는 [아이폰 SD 카드 총정리](/blog/ko/iphone-sd-card-guide)에 있습니다.

## USB 메모리에 정기적으로 백업하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. 카드 리더에서의 동작은 확인하지 않았습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비 중이며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 마이크로 SD 카드 자주 묻는 질문

### 마이크로 SD 카드는 아무 기기에나 넣어도 되나요?

기기마다 조건이 다릅니다. 3DS 계열은 32GB까지만 쓰고, 스위치 2는 microSD Express 카드만 게임 저장에 씁니다. 설명서의 메모리 카드 항목을 먼저 확인하세요.

### 큰 SD 카드 슬롯에 microSD를 넣을 수 있나요?

SD 어댑터를 쓰면 넣을 수 있습니다. Nintendo의 3DS 안내도 miniSD와 microSD 카드는 SD 카드 어댑터로 쓸 수 있다고 적습니다. 반대로 큰 SD 카드는 microSD 슬롯에 들어가지 않습니다.

### 4GB가 넘는 영상을 카드에 저장하려면?

exFAT 카드를 쓰세요. [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에서 FAT32의 파일 하나 최대 크기는 4GiB입니다. 32GB 이하 SDHC 카드의 기본 형식은 FAT32입니다.

### 속도 표시가 높은 카드가 항상 더 빠른가요?

기기가 지원하는 방식까지만 빠릅니다. Valve는 스팀 덱의 카드 슬롯을 UHS-I로 표기합니다. V60·V90 카드는 UHS-II 이상 방식에서 쓰는 표시입니다.

### 마이크로 SD 카드의 내용은 암호화되나요?

Microsoft 비교표에서 exFAT과 FAT32의 파일 시스템 수준 암호화는 지원하지 않음으로 나옵니다. 카드를 잃어버리면 다른 사람이 내용을 볼 수 있으니 보관에 유의하세요.
