---
title: "아이폰 사진 SD 카드로 옮기기: SD 카드 아이폰 연결부터 원본 내보내기까지"
description: "SD 카드 아이폰 연결에 필요한 리더, 카드 형식, 사진 앱에서 SD 카드로 원본을 내보내는 순서, 옮기기 전 확인할 제한을 Apple 안내 기준으로 정리했습니다."
date: 2026-11-11
---

## 핵심 요약

SD 카드 아이폰 연결은 카드 리더로 합니다. 리더에 SD 카드를 넣고 아이폰 충전 단자에 꽂은 뒤, 사진 앱에서 "수정되지 않은 원본 내보내기"로 카드에 저장합니다.

편집한 사진은 편집 전 원본이 저장됩니다. 가려진 항목 앨범이 잠겨 있으면 그 안의 사진은 옮겨지지 않습니다.

FAT32 카드는 4GB가 넘는 파일을 저장하지 못합니다. 긴 영상까지 옮기려면 exFAT 카드를 쓰세요.

"카메라 SD 카드에 아이폰 사진도 같이 보관하고 싶어요." "아이폰 저장 공간을 비우려고 하는데 컴퓨터가 없어요." 아이폰 사진을 SD 카드로 옮기려는 분들이 하는 고민입니다. 이 글은 아이폰에서 SD 카드로 내보내는 방향만 다룹니다. 카드의 사진을 아이폰으로 가져오는 방법은 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에 정리했습니다.

## SD 카드 아이폰 연결에는 무엇이 필요한가요?

아이폰에는 SD 카드 슬롯이 없어서 카드 리더가 필요합니다. [Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)는 아래 리더를 예로 듭니다. 모두 따로 구매합니다.

| 아이폰 단자 | Apple 안내에 나온 리더 |
| --- | --- |
| USB-C | USB-C to SD Card Camera Reader |
| Lightning | Lightning to SD Card Camera Reader |

카드는 데이터 파티션이 하나여야 하고, APFS, macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나로 포맷되어 있어야 합니다. NTFS는 목록에 없습니다. 단자별 차이는 [아이폰 SD 카드 슬롯 글](/blog/ko/iphone-sd-card-slot)에 있습니다.

이 글은 타사 카드 리더를 시험하지 않았습니다. 타사 리더를 쓴다면 연결 뒤 파일 앱의 위치 목록에 카드가 보이는지 먼저 확인하세요.

## 어떤 SD 카드에 옮겨야 하나요?

카드 용량에 따라 기본 형식이 다릅니다. [SD Association의 규격 안내](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) 기준입니다.

| 규격 | 용량 | 기본 파일 시스템 | 4GB가 넘는 영상 |
| --- | --- | --- | --- |
| SD | 2GB까지 | FAT12, FAT16 | 저장하지 못합니다 |
| SDHC | 2GB 초과 32GB까지 | FAT32 | 저장하지 못합니다 |
| SDXC | 32GB 초과 2TB까지 | exFAT | 저장할 수 있습니다 |
| SDUC | 2TB 초과 128TB까지 | exFAT | 저장할 수 있습니다 |

FAT32의 최대 파일 크기는 [Microsoft 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) 기준 4GiB입니다. 32GB 이하 카드에 긴 영상을 옮기려면 exFAT으로 다시 포맷해야 합니다. 포맷하면 카드의 자료가 모두 지워집니다. 방법은 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다.

## 아이폰 사진을 SD 카드로 옮기는 순서

[Apple의 사진 가져오기 및 내보내기 안내](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios)를 따른 순서입니다.

1. SD 카드를 리더에 넣습니다. 카드는 한 방향으로만 들어가니 억지로 밀지 마세요.
2. 리더를 아이폰의 USB-C 또는 Lightning 단자에 꽂습니다.
3. 사진 앱을 열고 옮길 사진과 영상을 선택합니다.
4. 공유 버튼을 누르고 "수정되지 않은 원본 내보내기"를 누릅니다.
5. 위치 아래에서 SD 카드 이름을 누르고 저장을 누릅니다.
6. 저장이 끝나면 파일 앱에서 카드를 열어 사진이 열리는지 확인합니다.

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)는 4단계 뒤 취소 버튼이 보일 때까지 뒤로 버튼을 누른 다음 위치에서 카드를 고르라고 설명합니다. 카드 이름이 바로 보이지 않으면 이 방법을 쓰세요.

같은 순서로 USB 메모리에 옮기는 방법은 [아이폰 사진 USB로 옮기기](/blog/ko/iphone-photos-to-usb)에 있습니다.

## SD 카드로 옮길 때 빠지거나 달라지는 사진은?

Apple 안내에 나온 제한을 표로 정리했습니다.

| 상황 | 결과 | 해결 |
| --- | --- | --- |
| 사진 앱에서 편집한 사진 | 편집 전 원본이 저장됩니다 | 편집 결과는 따로 확인합니다 |
| 가려진 항목 앨범이 잠김 | 그 안의 사진은 옮겨지지 않습니다 | 설정 > 앱 > 사진에서 Face ID, Touch ID, 암호 사용을 끕니다 |
| FAT32 카드에 4GB가 넘는 영상 | 저장하지 못합니다 | exFAT 카드를 씁니다 |
| 카드에 파티션이 여러 개 | 아이폰이 읽지 못할 수 있습니다 | 데이터 파티션 하나로 포맷합니다 |

긴 영상만 따로 옮기는 방법은 [아이폰 동영상 옮기기](/blog/ko/iphone-videos-to-usb)에 정리했습니다.

## 옮긴 사진이 다른 기기에서 안 열리면?

아이폰은 사진을 HEIF, 영상을 HEVC 형식으로 저장할 수 있습니다. 이 형식을 지원하지 않는 기기에서는 카드의 파일이 열리지 않을 수 있습니다.

[Apple의 HEIF·HEVC 안내](https://support.apple.com/en-us/116944)에 따르면 설정 > 카메라 > 포맷에서 "높은 호환성"을 고르면 새로 찍는 사진과 영상이 JPEG와 H.264로 저장됩니다. 이미 찍은 사진의 형식은 바뀌지 않습니다.

## 아이폰에서 사진을 지우기 전 확인할 것

- 파일 앱에서 카드를 열었을 때 사진과 영상이 실제로 열립니다.
- 카드의 파일 수가 고른 항목 수와 같거나 더 많습니다.
- 중요한 사진은 SD 카드가 아닌 곳에도 사본이 있습니다. 카드 하나가 고장 나면 그 안의 사진을 잃을 수 있습니다.

iCloud 사진을 켠 상태라면 더 조심해야 합니다. [Apple의 iCloud 사진 안내](https://support.apple.com/en-us/108782)에 따르면 한 기기에서 지운 사진은 iCloud 사진을 쓰는 모든 기기에서 지워집니다. 최근 삭제된 항목에서 30일 동안 되살릴 수 있고, 그 뒤에는 영구 삭제됩니다.

## USB 메모리에 정기적으로 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. SD 카드와 카드 리더에서의 동작은 확인하지 않았습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 아이폰 사진 SD 카드로 옮기기 자주 묻는 질문

### SD 카드로 옮기면 화질이 떨어지나요?

"수정되지 않은 원본 내보내기"는 수정 전 원본 파일을 저장합니다. 편집한 사진은 편집 결과가 아닌 원본이 저장되니 확인하세요.

### 64GB 이상 SD 카드도 쓸 수 있나요?

SD Association 기준으로 32GB를 넘는 SDXC 카드는 exFAT을 씁니다. exFAT은 Apple의 외부 저장장치 형식 목록에 있습니다.

### 4GB가 넘는 영상이 SD 카드에 저장되지 않아요.

카드가 FAT32일 가능성이 큽니다. 카드의 자료를 다른 곳에 복사한 뒤 exFAT으로 포맷하세요.

### 일부 사진만 SD 카드에 옮겨지지 않았어요.

가려진 항목 앨범이 잠겨 있는지 확인하세요. Apple 안내에 따르면 잠긴 가려진 항목 앨범의 사진은 옮겨지지 않습니다.

### 전송 속도는 어느 정도인가요?

Apple 카메라 어댑터 안내는 iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, iPhone 16 Pro Max가 USB 3 전송 속도를 지원하고, 그 밖의 어댑터와 기기는 USB 2 속도를 쓴다고 적습니다. 이 글은 실제 속도를 측정하지 않았습니다.

### SD 카드의 내용은 암호화되나요?

[Microsoft 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에서 exFAT과 FAT32의 파일 시스템 수준 암호화는 지원하지 않음으로 나옵니다. 카드를 잃어버리면 다른 사람이 사진을 볼 수 있으니 보관에 유의하세요.
