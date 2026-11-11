---
title: "아이폰 마이크로 SD 쓰는 법: microSD 카드 연결, 사진 옮기기, 형식 확인"
description: "아이폰 마이크로 SD 카드는 microSD 자리가 있는 카드 리더로 연결합니다. 필요한 리더, 용량별 카드 형식, 사진 앱과 파일 앱에서 옮기는 순서를 Apple과 SD Association 안내 기준으로 정리했습니다."
date: 2026-11-12
---

## 핵심 요약

아이폰 마이크로 SD 카드는 카드 리더에 넣어 아이폰 충전 단자에 연결합니다. 아이폰에는 카드 슬롯이 없습니다.

Apple 카메라 어댑터 안내의 지원 목록에는 microSD가 있습니다. 다만 microSD는 일반 SD 카드보다 작으므로, 리더에 microSD를 꽂을 자리가 있는지 먼저 확인합니다.

연결한 뒤에는 사진 앱에서 사진과 영상을 가져오거나 내보내고, 파일 앱에서 문서와 다른 파일을 옮깁니다.

"휴대폰에 쓰던 microSD를 아이폰에서 열 수 있나요?" "액션캠 카드에 찍힌 영상을 아이폰으로 옮기고 싶어요." 아이폰 마이크로 SD 사용법을 찾는 분들이 묻는 질문입니다. 일반 SD 카드 연결은 [아이폰 SD 카드 슬롯 글](/blog/ko/iphone-sd-card-slot)에 따로 정리했습니다. 이 글은 microSD에서 달라지는 부분을 다룹니다.

## 아이폰에서 마이크로 SD 카드를 쓸 수 있나요?

쓸 수 있습니다. [Apple의 카메라 어댑터 안내](https://support.apple.com/en-us/118280)는 지원 카드 목록에 SDSC, SDHC, SDXC, miniSD, microSD, MMC를 적어 두었습니다.

연결은 카드 리더로 합니다. [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)는 SD 카드 리더를 맞는 커넥터나 어댑터로 충전 단자에 연결하라고 설명합니다.

[SD Association FAQ](https://www.sdcard.org/consumers/faq/)에 따르면 microSD와 SD 카드는 모양, 크기, 핀 수, 쓰기 방지 스위치 유무만 다릅니다. 내부 논리와 전자 구조는 같습니다. 그래서 아이폰에서 쓰는 방법도 SD 카드와 같습니다.

## microSD와 SD 카드는 무엇이 다른가요?

크기가 가장 큰 차이입니다. [SD Association의 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 기준입니다.

| 구분 | 크기 | 아이폰에서 연결할 때 |
| --- | --- | --- |
| SD | 32 x 24 x 2.1mm | SD 자리가 있는 리더에 넣습니다 |
| microSD | 11 x 15 x 1.0mm | microSD 자리가 있는 리더에 넣습니다 |

SD 자리만 있는 리더에는 microSD를 그대로 넣을 수 없습니다. 리더를 사기 전에 제품 설명에서 microSD 자리가 있는지 확인하세요. 이 글은 타사 카드 리더를 시험하지 않았고 특정 제품을 추천하지 않습니다.

## 아이폰 단자별로 어떤 리더가 필요한가요?

아이폰 15 이후 모델은 USB-C 단자, 그 이전 모델은 Lightning 단자를 씁니다. [Apple의 USB-C 안내](https://support.apple.com/en-us/105099)는 연결할 수 있는 장치 목록에 "SD 카드 어댑터를 쓴 SD 카드"를 적어 두었습니다.

| 아이폰 단자 | Apple 안내에 나온 리더 | microSD를 쓸 때 확인할 것 |
| --- | --- | --- |
| USB-C | USB-C to SD Card Camera Reader | 리더에 microSD 자리가 있는지 |
| Lightning | Lightning to SD Card Camera Reader | 리더에 microSD 자리가 있는지 |

리더 사용법 전체는 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에 있습니다.

## 마이크로 SD 카드는 어떤 형식이어야 하나요?

아이폰은 exFAT, FAT32, FAT, APFS, macOS 확장(HFS+) 형식의 저장장치를 읽습니다. 데이터 파티션은 하나여야 합니다. 출처는 [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)입니다.

microSD도 용량 규격마다 기본 파일 시스템이 정해져 있습니다. [SD Association의 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 기준입니다.

| 카드에 적힌 규격 | 용량 | 기본 파일 시스템 | 아이폰 형식 목록 |
| --- | --- | --- | --- |
| microSD | 2GB까지 | FAT12, FAT16 | FAT로 있습니다 |
| microSDHC | 2GB 초과 32GB까지 | FAT32 | 있습니다 |
| microSDXC | 32GB 초과 2TB까지 | exFAT | 있습니다 |

FAT32는 4GB가 넘는 파일을 저장하지 못합니다. 긴 영상을 옮기려면 exFAT 카드를 쓰세요. 다른 기기에서 NTFS로 포맷한 카드는 Apple 목록에 없으므로 다시 포맷해야 합니다. 포맷 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다. 포맷하면 카드의 자료가 모두 지워집니다.

## 아이폰에서 microSD 카드 내용을 보는 방법

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)를 따른 순서입니다.

1. microSD 카드를 리더의 microSD 자리에 넣습니다. 카드는 한 방향으로만 들어가니 억지로 밀지 마세요.
2. 리더를 아이폰의 USB-C 또는 Lightning 단자에 꽂습니다.
3. 파일 앱을 열고 둘러보기를 누릅니다.
4. 위치 아래의 카드 이름을 누릅니다. 위치가 보이지 않으면 둘러보기를 한 번 더 누릅니다.
5. 다 쓴 뒤에는 리더를 충전 단자에서 뺍니다.

파일을 복사하거나 옮기는 순서는 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에 정리했습니다.

## microSD 사진을 아이폰으로 가져오는 방법

카메라나 액션캠에서 쓴 microSD의 사진과 영상은 사진 앱에서 가져옵니다. [Apple의 사진 가져오기 안내](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios)를 따른 순서입니다.

1. 카드를 넣은 리더를 아이폰에 연결합니다.
2. 사진 앱을 열고 가져오기를 누릅니다.
3. 가져올 사진과 영상을 고르고 저장할 위치를 정합니다.
4. 모두 가져오기를 누르거나, 항목을 골라 가져오기와 선택 항목 가져오기를 차례로 누릅니다.
5. 가져오기가 끝나면 카드의 사진을 남길지 지울지 정합니다.

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)에 따르면 이 방식은 디지털카메라로 찍은 콘텐츠를 가져옵니다. 이름을 바꾸거나 편집했거나 카드에 복사해 넣은 파일은 가져오지 못할 수 있습니다. 이런 파일은 파일 앱에서 복사해 보세요.

## 아이폰 사진을 microSD 카드로 옮기는 방법

같은 Apple 안내는 연결한 메모리 카드로 사진과 영상을 내보내는 방법도 설명합니다.

1. 카드를 넣은 리더를 아이폰에 연결합니다.
2. 사진 앱에서 옮길 사진과 영상을 고릅니다.
3. 공유 버튼을 누르고 수정되지 않은 원본 내보내기를 누릅니다.
4. 위치 아래에서 카드 이름을 누르고 저장을 누릅니다.

편집한 사진은 수정 전 원본이 저장됩니다. 가려진 항목 앨범이 잠겨 있으면 그 안의 사진은 옮겨지지 않습니다. 옮기기 전 확인할 제한은 [아이폰 사진 SD 카드로 옮기기](/blog/ko/iphone-photos-to-sd-card)에 더 자세히 있습니다.

## 카드가 보이지 않을 때 무엇을 확인하나요?

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)와 외부 저장장치 안내를 합친 순서입니다.

| 순서 | 확인할 것 | 해야 할 일 |
| --- | --- | --- |
| 1 | 카드 자리 | microSD가 리더의 microSD 자리에 끝까지 들어갔는지 봅니다 |
| 2 | 리더 연결 | 리더를 빼고 30초 뒤 다시 연결합니다 |
| 3 | 카드 연결 | 카드를 빼고 30초 뒤 다시 넣습니다 |
| 4 | 아이폰 | 아이폰을 재시동합니다 |
| 5 | 카드 형식 | Mac이나 PC에서 형식과 파티션 수를 봅니다. NTFS는 Apple 목록에 없습니다 |
| 6 | 다른 카드 | 다른 카드가 되면 원래 카드의 데이터를 의심합니다 |

## USB 메모리에 정기적으로 백업하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. 카드 리더에서의 동작은 확인하지 않았습니다. USB 메모리 연결과 형식은 [아이폰 외장 메모리 총정리](/blog/ko/iphone-usb-drive-guide)에서 확인하세요.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 아이폰 마이크로 SD 자주 묻는 질문

### 아이폰에 microSD를 바로 꽂을 수 있나요?

꽂을 수 없습니다. 아이폰에는 카드 슬롯이 없어 microSD 자리가 있는 카드 리더를 충전 단자에 연결해야 합니다.

### SD 자리만 있는 리더로 microSD를 읽을 수 있나요?

microSD는 SD 자리보다 작아 그대로 넣을 수 없습니다. microSD를 SD 크기로 바꾸는 어댑터도 있지만, 이 글은 그 조합을 시험하지 않았습니다. 연결 뒤 파일 앱의 위치 목록에 카드가 보이는지 확인하세요.

### 128GB microSD도 아이폰에서 쓸 수 있나요?

SD Association 기준으로 32GB를 넘는 microSDXC 카드의 기본 형식은 exFAT입니다. exFAT은 Apple의 외부 저장장치 형식 목록에 있습니다.

### 안드로이드 휴대폰에서 쓰던 microSD를 아이폰에서 열 수 있나요?

카드 형식이 Apple 목록에 있고 데이터 파티션이 하나라면 파일 앱에서 열 수 있습니다. 형식이 맞지 않으면 자료를 다른 곳에 옮긴 뒤 포맷하세요.

### microSD 카드의 내용은 암호화되나요?

[Microsoft 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에서 exFAT의 파일 시스템 수준 암호화는 지원하지 않음으로 나옵니다. microSD는 작아서 잃어버리기 쉬우니 보관에 유의하세요.
