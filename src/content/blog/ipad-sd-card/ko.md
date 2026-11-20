---
title: "아이 패드 SD 카드 사용법: 리더기 연결, 사진 가져오기, 파일 복사"
description: "아이 패드 SD 카드는 리더기를 충전 단자에 꽂아 사진 앱과 파일 앱에서 씁니다. 필요한 어댑터, 카드 형식, 사진 가져오기와 내보내기, 안 보일 때 확인할 순서를 Apple 안내 기준으로 정리했습니다."
date: 2026-11-21
---

## 핵심 요약

아이패드에는 SD 카드 슬롯이 없습니다. 아이 패드 SD 카드는 리더기를 충전 단자에 꽂아 씁니다. 카메라 사진은 사진 앱에서 가져오고, 문서 같은 파일은 파일 앱에서 복사합니다.

카드는 데이터 파티션이 하나여야 하고 APFS, macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나로 포맷되어 있어야 합니다. NTFS는 목록에 없습니다.

가져오기 화면이 뜨지 않으면 리더기와 카드를 빼고 30초 뒤 다시 연결합니다. 그래도 안 되면 아이패드를 재시동하고 다른 카드로 시험합니다.

"아이패드에 카드를 꽂을 곳이 안 보여요." "카메라 사진을 아이패드로 바로 보고 싶어요." 아이패드에서 SD 카드를 처음 쓰는 분들이 자주 하는 말입니다. 연결 방법과 앱 순서는 아이폰과 거의 같습니다. 아이폰 기준 설명은 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에 따로 정리했습니다.

## 아이 패드 SD 카드는 어떻게 연결하나요?

[Apple의 아이패드 외부 저장장치 안내](https://support.apple.com/guide/ipad/external-storage-devices-ipad75b7b23f/ipados)에 따르면 SD 카드 리더기를 아이패드 충전 단자에 연결합니다. 단자 종류에 따라 쓰는 어댑터가 다릅니다.

| 아이패드 단자 | Apple 안내에 나오는 리더·어댑터 |
| --- | --- |
| USB-C | USB-C to SD Card Camera Reader |
| Lightning | Lightning to SD Card Camera Reader, Lightning to USB Camera Adapter, Lightning to USB 3 Camera Adapter |

리더기는 모두 따로 판매합니다. 카드는 한 방향으로만 들어가니 억지로 밀어 넣지 않습니다. USB-C 리더기를 고를 때 볼 항목은 [C 타입 SD 카드 리더기 사용법](/blog/ko/usb-c-sd-card-reader)과 [SD 카드 리더기 고르는 법](/blog/ko/choose-sd-card-reader)에 있습니다.

이 글은 타사 리더기를 시험하지 않았습니다. 타사 리더기를 쓴다면 연결한 뒤 파일 앱의 위치 목록에 카드가 보이는지 먼저 확인하세요.

## 아이패드에서 쓸 수 있는 SD 카드 종류와 형식은?

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)는 아이폰과 아이패드에 같은 지원 목록을 적어 두었습니다.

| 구분 | Apple 안내의 지원 목록 |
| --- | --- |
| 카드 | SDSC, SDHC, SDXC, miniSD, microSD, MMC |
| 전송 방식 | PTP(사진 전송 프로토콜), 대용량 저장장치 프로토콜 |
| 포맷 | APFS, APFS(암호화), macOS 확장(HFS+), exFAT, FAT32, FAT |

포맷 목록은 [아이패드 외부 저장장치 안내](https://support.apple.com/guide/ipad/external-storage-devices-ipad75b7b23f/ipados) 기준입니다. 데이터 파티션은 하나여야 합니다.

카메라와 컴퓨터에서 함께 쓸 카드라면 exFAT이 편합니다. [Microsoft 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에 따르면 FAT32는 파일 하나가 4GiB를 넘지 못합니다. 긴 영상을 담으려면 exFAT으로 포맷하세요. 포맷 방법은 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있습니다.

## 아이패드 SD 카드 사진은 어떻게 가져오나요?

[Apple의 아이패드 사진 가져오기 안내](https://support.apple.com/guide/ipad/import-and-export-photos-and-videos-ipad99c6eb3e/ipados)를 따른 순서입니다.

1. 리더기를 아이패드의 Lightning 또는 USB-C 단자에 꽂습니다.
2. SD 카드를 리더기에 넣습니다.
3. 사진 앱을 열고 가져오기를 누릅니다.
4. 가져올 사진과 영상을 고르고 가져올 위치를 정합니다.
5. 모두 가져오려면 모두 가져오기를 누릅니다. 일부만 가져오려면 항목을 눌러 체크 표시를 한 뒤 가져오기, 선택 항목 가져오기를 누릅니다.
6. 끝나면 카드의 원본을 남길지 지울지 정합니다.
7. 리더기를 뺍니다.

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)는 iOS 18 기준으로 사진 앱의 모음에서 기기 항목으로 내려가 카드를 누르는 방법도 설명합니다. 기기 항목이 없으면 최신 버전으로 업데이트하라고 안내합니다.

## 아이패드 사진을 SD 카드로 내보내려면?

같은 [Apple 사진 가져오기 안내](https://support.apple.com/guide/ipad/import-and-export-photos-and-videos-ipad99c6eb3e/ipados)에 내보내기 순서도 있습니다.

1. 카드를 넣은 리더기를 아이패드에 연결합니다.
2. 사진 앱에서 내보낼 사진과 영상을 고릅니다.
3. 공유 버튼을 누르고 수정되지 않은 원본 내보내기를 누릅니다.
4. 위치 아래의 카드 이름을 누르고 저장을 누릅니다.

편집한 사진은 편집 전 원본으로 저장됩니다. 가려진 항목 앨범이 잠겨 있으면 그 안의 사진은 옮겨지지 않습니다. 잠금을 풀려면 설정 > 앱 > 사진에서 Face ID 사용, Touch ID 사용, 암호 사용을 끕니다. 아이폰에서 같은 일을 하는 방법은 [아이폰 사진 SD 카드로 옮기기](/blog/ko/iphone-photos-to-sd-card)에 있습니다.

## 파일 앱에서 SD 카드 파일을 복사하는 방법

사진 앱에 나오지 않는 PDF, 문서, 압축 파일은 파일 앱에서 다룹니다. [Apple의 아이패드 외부 저장장치 안내](https://support.apple.com/guide/ipad/external-storage-devices-ipad75b7b23f/ipados)와 [파일 정리 안내](https://support.apple.com/guide/ipad/organize-files-and-folders-ipadeb120505/ipados)를 따른 순서입니다.

1. 파일 앱을 열고 화면의 둘러보기를 누릅니다.
2. 위치 아래의 카드 이름을 누릅니다. 위치가 보이지 않으면 둘러보기를 한 번 더 누릅니다.
3. 옮길 파일을 길게 누르고 복사나 이동을 고릅니다.
4. 여러 개를 옮기려면 선택을 누르고 파일을 고른 뒤 화면 위쪽의 이동을 누릅니다.

카드 이름을 길게 누르면 이름 변경과 지우기 메뉴가 나옵니다. [Apple 파일 전송 안내](https://support.apple.com/guide/ipad/transfer-files-ipad-a-storage-device-server-ipad8139864c/ipados)에 따르면 USB-C 아이패드는 지우기에서 APFS, ExFAT, MS-DOS(FAT) 중 하나로 포맷할 수 있습니다. 지우면 카드의 자료가 모두 삭제됩니다.

다 쓴 뒤에는 복사가 끝난 것을 확인하고 리더기를 충전 단자에서 뺍니다. Apple 안내는 충전 단자에서 빼는 방법만 설명합니다.

## 아이패드에서 SD 카드가 안 보일 때 무엇을 확인하나요?

[Apple 카메라 어댑터 안내](https://support.apple.com/en-us/118280)의 순서입니다.

| 순서 | 확인할 것 | 해야 할 일 |
| --- | --- | --- |
| 1 | 소프트웨어 버전 | 기기 항목이 없으면 최신 버전으로 업데이트합니다 |
| 2 | 리더기 연결 | 리더기를 빼고 30초 뒤 다시 연결합니다 |
| 3 | 카드 연결 | 카드를 빼고 30초 뒤 다시 넣습니다 |
| 4 | 아이패드 | 아이패드를 재시동합니다 |
| 5 | 다른 카드 | 다른 카드로 시험합니다. 다른 카드가 되면 원래 카드의 데이터를 의심합니다 |

다른 카드는 되는데 원래 카드만 안 되면, Apple은 먼저 다른 기기나 컴퓨터로 데이터를 가져온 뒤 카메라에서 카드를 포맷하라고 안내합니다. 포맷하면 카드의 사진이 모두 지워집니다. 카드 자체가 의심스럽다면 [SD 카드 인식 안 될 때](/blog/ko/sd-card-not-working)를 먼저 보세요.

일부 파일만 안 보일 수도 있습니다. 같은 Apple 안내에 따르면 카메라 어댑터는 디지털카메라로 찍은 콘텐츠만 가져옵니다. 이름을 바꾸거나 편집했거나 카드에 복사해 넣은 파일은 사진 앱으로 가져오지 못할 수 있습니다. 이런 파일은 파일 앱에서 카드를 열고 복사해 보세요.

## 아이폰 사진을 USB 메모리에 저장하려면?

아래 앱은 아이폰과 USB 메모리를 기준으로 안내합니다. 아이패드와 카드 리더에서의 동작은 확인하지 않았습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비하고 있으며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 아이 패드 SD 카드 자주 묻는 질문

### 리더기를 꽂았는데 아무 반응이 없어요.

Apple 안내에는 연결하면 창이 뜬다는 설명이 없습니다. 사진 앱의 가져오기나 파일 앱의 위치 목록에서 카드를 찾으세요.

### microSD 카드도 쓸 수 있나요?

Apple 카메라 어댑터 안내의 지원 목록에 microSD가 있습니다. 쓰는 리더기에 microSD를 꽂을 자리가 있는지 확인하세요. 카드 크기 차이는 [microSD와 SD 카드 차이](/blog/ko/microsd-vs-sd)에 정리했습니다.

### 전송 속도는 어느 정도인가요?

Apple 카메라 어댑터 안내는 Lightning to USB 3 Camera Adapter를 쓸 때 iPad Pro 12.9형(1세대, 2세대)과 iPad Pro 10.5형이 USB 3 속도로 전송한다고 적습니다. 그 밖의 어댑터와 기기는 USB 2 속도를 쓴다고 적습니다. 이 글은 실제 속도를 측정하지 않았습니다.

### 아이패드에서 SD 카드를 포맷할 수 있나요?

Apple 파일 전송 안내에 따르면 USB-C 단자가 있는 아이패드는 파일 앱에서 포맷할 수 있습니다. 카메라에서 쓸 카드라면 Apple은 카메라에서 포맷하라고 안내합니다. 포맷하면 카드의 자료가 모두 지워집니다.

### SD 카드의 내용은 암호화되나요?

[Microsoft 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에서 exFAT의 파일 시스템 수준 암호화는 지원하지 않음으로 나옵니다. 카드를 잃어버리면 다른 사람이 내용을 볼 수 있으니 보관에 유의하세요.
