---
title: "아이폰 SD 카드 총정리: 리더기, 카드 형식, 사진 옮기기, 인식 안 될 때"
description: "아이폰 SD 카드를 쓰기 전에 확인할 리더기, 카드 종류와 형식, 사진 앱과 파일 앱 사용법, 인식되지 않을 때 순서를 Apple 안내 기준으로 한곳에 정리했습니다."
date: 2026-11-13
---

## 핵심 요약

아이폰 SD 카드는 카드 리더에 꽂아 충전 단자에 연결해서 씁니다. 아이폰에는 SD 카드 슬롯이 없습니다.

먼저 세 가지를 맞춥니다. 아이폰 단자에 맞는 리더, 데이터 파티션 하나, Apple 목록에 있는 형식입니다.

32GB를 넘는 SDXC 카드는 기본 형식이 exFAT입니다. FAT32 카드는 4GB가 넘는 파일을 저장하지 못합니다.

"카메라 사진을 아이폰으로 옮기고 싶어요." "리더기를 꽂았는데 카드가 안 보여요." 아이폰 SD 카드를 처음 쓸 때 나오는 질문입니다. 이 글은 전체 흐름을 정리하고, 일마다 자세한 글로 연결합니다.

## 아이폰 SD 카드로 무엇을 할 수 있나요?

하려는 일에 따라 쓰는 앱이 다릅니다. 표에서 할 일을 찾고 자세한 글로 넘어가세요.

| 하려는 일 | 쓰는 앱 | 자세한 글 |
| --- | --- | --- |
| 슬롯 여부와 필요한 리더 확인 | 없음 | [아이폰 SD 카드 슬롯 있나요?](/blog/ko/iphone-sd-card-slot) |
| 카메라 사진을 아이폰으로 가져오기 | 사진 | [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader) |
| 아이폰 사진을 카드에 저장 | 사진 | [아이폰 사진 SD 카드로 옮기기](/blog/ko/iphone-photos-to-sd-card) |
| microSD 카드 쓰기 | 사진, 파일 | [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd) |
| SD 카드 형식 바꾸기 | 파일 | [SD 카드 포맷 방법](/blog/ko/format-sd-card) |
| 다른 기기에서 쓰던 microSD 다시 포맷 | 파일 | [마이크로 SD 카드 포맷 방법](/blog/ko/format-microsd) |
| 카드가 인식되지 않을 때 | 파일 | [SD 카드 포맷 안될 때](/blog/ko/sd-card-not-working) |

## 아이폰 SD 카드 리더기는 어떤 것이 필요한가요?

아이폰 단자가 리더를 정합니다. [Apple 안내](https://support.apple.com/en-us/105099)에 따르면 아이폰 15 이후 모델은 USB-C 단자를 씁니다. 그 이전 모델은 Lightning 단자입니다.

| 아이폰 단자 | Apple 안내에 나온 리더 |
| --- | --- |
| USB-C | USB-C to SD Card Camera Reader |
| Lightning | Lightning to SD Card Camera Reader |

리더 이름은 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 나옵니다. 두 제품 모두 따로 구매합니다. 이 글은 타사 카드 리더를 시험하지 않았고 특정 제품을 추천하지 않습니다. 타사 리더를 쓴다면 연결 뒤 파일 앱의 위치 목록에 카드가 보이는지 먼저 확인하세요.

## 아이폰은 어떤 SD 카드와 형식을 읽나요?

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)의 지원 목록에는 SDSC, SDHC, SDXC, miniSD, microSD, MMC 카드가 있습니다.

카드 형식은 데이터 파티션 하나에 APFS, APFS(암호화), macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나여야 합니다. 출처는 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)입니다. NTFS는 목록에 없습니다.

SD 카드는 용량 규격마다 기본 파일 시스템이 정해져 있습니다. [SD Association의 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 기준입니다.

| 규격 | 용량 | 기본 파일 시스템 |
| --- | --- | --- |
| SD | 2GB까지 | FAT12, FAT16 |
| SDHC | 2GB 초과 32GB까지 | FAT32 |
| SDXC | 32GB 초과 2TB까지 | exFAT |
| SDUC | 2TB 초과 128TB까지 | exFAT |

[Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에서 FAT32의 파일 하나 최대 크기는 4GiB이고, exFAT은 2^64-1바이트입니다. 긴 영상을 카드에 옮기려면 exFAT 카드를 쓰세요. 형식을 바꾸는 순서는 [SD 카드 포맷 방법](/blog/ko/format-sd-card)에 있습니다.

## 아이폰에 SD 카드를 처음 연결하는 순서

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)를 따른 순서입니다.

1. 아이폰 단자에 맞는 리더를 준비합니다.
2. 카드가 exFAT이나 FAT32인지 확인하고, 필요하면 포맷합니다.
3. 리더를 아이폰의 충전 단자에 꽂습니다.
4. SD 카드를 리더에 넣습니다. 카드는 한 방향으로만 들어가니 억지로 밀지 마세요.
5. 파일 앱을 열고 둘러보기를 누른 뒤 위치 아래의 카드 이름을 누릅니다.
6. 다 쓰면 리더를 충전 단자에서 뺍니다.

아이폰은 리더를 꽂아도 창을 띄우지 않습니다. 위치가 보이지 않으면 둘러보기를 한 번 더 누르세요.

## 사진 앱과 파일 앱 중 어디서 쓰나요?

옮길 파일 종류로 정합니다.

| 하려는 일 | 쓰는 앱 | 근거 |
| --- | --- | --- |
| 카메라로 찍은 사진·영상을 아이폰에 저장 | 사진 앱의 가져오기 | [Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280) |
| 아이폰 사진·영상을 카드에 저장 | 사진 앱의 수정되지 않은 원본 내보내기 | [Apple 사진 가져오기·내보내기 안내](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios) |
| PDF, 문서 같은 파일 복사 | 파일 앱 | [Apple 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| 카드 이름 바꾸기, 지우기, 포맷 | 파일 앱 | [Apple 파일 전송 안내](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios) |

사진을 내보낼 때 편집한 사진은 수정 전 원본이 저장됩니다. 가려진 항목 앨범이 잠겨 있으면 그 안의 사진은 옮겨지지 않습니다. 자세한 순서는 [아이폰 사진 SD 카드로 옮기기](/blog/ko/iphone-photos-to-sd-card)에 있습니다.

카드 포맷은 USB-C 아이폰의 파일 앱에서 할 수 있습니다. 위치 아래의 카드 이름을 길게 누르고 지우기를 누른 뒤 형식을 고릅니다. 지우면 카드의 자료가 모두 삭제됩니다. Lightning 아이폰이라면 Mac이나 윈도우 PC에서 포맷하세요.

## 아이폰 SD 카드가 안 보이거나 가져오기가 안 될 때

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)와 외부 저장장치 안내를 합친 순서입니다.

| 순서 | 확인할 것 | 해야 할 일 |
| --- | --- | --- |
| 1 | iOS 버전 | 사진 앱에 기기 항목이 없으면 최신 iOS로 업데이트합니다 |
| 2 | 리더 연결 | 리더를 빼고 30초 뒤 다시 연결합니다 |
| 3 | 카드 연결 | 카드를 빼고 30초 뒤 다시 넣습니다 |
| 4 | 아이폰 | 아이폰을 재시동합니다 |
| 5 | 카드 형식과 파티션 | Mac이나 PC에서 형식을 봅니다. NTFS거나 파티션이 여럿이면 다시 포맷합니다 |
| 6 | 다른 카드 | 다른 카드로 시험합니다. 다른 카드가 되면 원래 카드의 데이터를 의심합니다 |

일부 사진만 안 보일 수도 있습니다. Apple 카메라 어댑터는 디지털카메라로 찍은 콘텐츠만 가져옵니다. 이름을 바꾸거나 편집했거나 카드에 복사해 넣은 파일은 가져오지 못할 수 있습니다. 이런 파일은 파일 앱에서 복사해 보세요. 카드 자체가 인식되지 않는 경우는 [SD 카드 포맷 안될 때](/blog/ko/sd-card-not-working)에 따로 정리했습니다.

## SD 카드와 USB 메모리는 무엇이 다른가요?

아이폰에서 읽는 형식과 파일 앱의 사용 순서는 같습니다. 연결 방법이 다릅니다. SD 카드는 리더가 있어야 하고, USB-C 메모리는 USB-C 아이폰에 바로 꽂을 수 있습니다.

| 구분 | SD 카드 | USB 메모리 |
| --- | --- | --- |
| 연결 | 카드 리더 필요 | USB-C 아이폰은 USB-C 메모리를 바로 연결 |
| 형식 | Apple 목록의 형식, 데이터 파티션 하나 | 같습니다 |
| 여는 앱 | 파일 앱, 사진 앱 | 같습니다 |

카메라로 찍은 카드를 그대로 옮긴다면 SD 카드 리더가 편합니다. USB 메모리 연결과 형식은 [아이폰 외장 메모리 총정리](/blog/ko/iphone-usb-drive-guide)에서 확인하세요.

## USB 메모리에 정기적으로 백업하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. 카드 리더에서의 동작은 확인하지 않았습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비 중이며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 아이폰 SD 카드 자주 묻는 질문

### 아이폰에 SD 카드를 바로 꽂을 수 있나요?

꽂을 수 없습니다. 아이폰에는 SD 카드 슬롯이 없어 카드 리더를 충전 단자에 연결해야 합니다.

### microSD 카드도 아이폰에서 읽나요?

Apple 카메라 어댑터 안내의 지원 목록에 microSD가 있습니다. 쓰는 리더에 microSD를 꽂을 자리가 있는지 확인하세요. 자세한 내용은 [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd)에 있습니다.

### 전송 속도는 어느 정도인가요?

Apple 카메라 어댑터 안내는 iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, iPhone 16 Pro Max가 USB 3 전송 속도를 지원하고, 그 밖의 어댑터와 기기는 USB 2 속도를 쓴다고 적습니다. 이 글은 실제 속도를 측정하지 않았습니다.

### 4GB가 넘는 영상을 카드에 저장하려면?

exFAT 카드를 쓰세요. FAT32는 파일 하나가 4GiB를 넘을 수 없습니다.

### SD 카드의 내용은 암호화되나요?

[Microsoft 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에서 exFAT과 FAT32의 파일 시스템 수준 암호화는 지원하지 않음으로 나옵니다. 카드를 잃어버리면 다른 사람이 내용을 볼 수 있으니 보관에 유의하세요.
