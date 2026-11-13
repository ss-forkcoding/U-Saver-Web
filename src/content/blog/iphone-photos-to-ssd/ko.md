---
title: "아이폰 사진·영상 SSD로 옮기기: 컴퓨터 없이 내보내기와 ProRes 바로 녹화"
description: "아이폰 사진과 영상을 외장 SSD로 옮기는 순서를 정리했습니다. 사진 앱의 원본 내보내기, 큰 영상의 형식 조건, ProRes를 SSD에 바로 녹화하는 조건을 Apple 안내 기준으로 확인하세요."
date: 2026-11-14
---

## 핵심 요약

아이폰 사진·영상을 SSD로 옮기는 방법은 두 가지입니다. 이미 찍은 사진과 영상은 사진 앱에서 "수정되지 않은 원본 내보내기"로 SSD에 저장합니다. 지원 모델은 ProRes 영상을 처음부터 SSD에 바로 녹화할 수 있습니다.

두 방법 모두 컴퓨터가 필요 없습니다. SSD는 데이터 파티션이 하나여야 하고 Apple 목록에 있는 형식이어야 합니다.

ProRes를 SSD에 바로 녹화하려면 아이폰 15 Pro 이후 Pro 모델, exFAT 형식, 초당 220MB 이상의 쓰기 속도가 필요합니다.

"영상이 너무 커서 아이폰 저장 공간이 금방 차요." "SSD에 옮긴 뒤 아이폰에서 지워도 되나요?" 영상을 많이 찍는 분들이 SSD를 찾는 이유입니다. 이 글은 사진과 영상을 SSD로 옮기는 순서, 큰 영상에서 막히는 지점, 옮긴 뒤 아이폰 공간을 비우는 순서를 정리합니다.

## 아이폰 사진·영상을 SSD로 옮기는 방법은 무엇이 있나요?

찍은 뒤에 옮길지, 찍을 때부터 SSD에 저장할지에 따라 방법이 나뉩니다.

| 방법 | 대상 | 컴퓨터 | 근거 |
| --- | --- | --- | --- |
| 사진 앱에서 원본 내보내기 | 이미 찍은 사진, 영상 | 필요 없습니다 | [Apple iCloud 사진 다운로드 안내](https://support.apple.com/en-us/111762) |
| ProRes를 SSD에 바로 녹화 | 새로 찍는 ProRes 영상 | 필요 없습니다 | [Apple ProRes 안내](https://support.apple.com/en-us/109041) |
| Mac의 이미지 캡처로 가져온 뒤 SSD에 복사 | 이미 찍은 사진, 영상 | Mac이 필요합니다 | [Apple ProRes 안내](https://support.apple.com/en-us/109041) |

이 글은 컴퓨터 없이 쓰는 앞의 두 방법을 다룹니다. 사진 말고 연락처와 파일까지 SSD에 저장하려면 [아이폰 외장 SSD 백업 방법](/blog/ko/backup-iphone-to-ssd)을 보세요.

## SSD로 옮기기 전에 무엇을 확인하나요?

[Apple의 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)에 따르면 외부 저장장치는 데이터 파티션이 하나여야 합니다. 형식은 APFS, APFS(암호화), macOS 확장(HFS+), exFAT, FAT32, FAT 중 하나여야 합니다.

| 확인할 것 | 기준 | 영상에서 달라지는 점 |
| --- | --- | --- |
| 형식 | Apple 목록의 형식 | FAT32는 파일 하나가 4GiB를 넘지 못합니다 |
| 파티션 | 데이터 파티션 하나 | 같습니다 |
| 연결 | 아이폰 단자에 맞는 케이블이나 어댑터 | ProRes 바로 녹화는 USB-C 연결이 필요합니다 |
| 남은 용량 | 옮길 사진과 영상보다 커야 합니다 | ProRes 파일은 HEVC 파일보다 최대 30배 큽니다 |

FAT32의 4GiB 제한은 [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) 기준입니다. ProRes 파일 크기는 [Apple ProRes 안내](https://support.apple.com/en-us/109041) 기준입니다. 긴 영상을 옮길 SSD는 exFAT으로 준비하세요. 포맷 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)에 있고, 케이블과 전원 조건은 [아이폰 SSD 연결 방법](/blog/ko/iphone-external-ssd-connect)에 있습니다.

## 아이폰 사진·영상을 SSD로 옮기는 순서

[Apple의 iCloud 사진 다운로드 안내](https://support.apple.com/en-us/111762)를 따른 순서입니다.

1. SSD를 아이폰에 연결하고 파일 앱의 둘러보기에서 SSD 이름이 보이는지 확인합니다.
2. 사진 앱에서 보관함을 엽니다.
3. 선택을 누르고 옮길 사진과 영상을 고릅니다.
4. 공유 버튼을 누른 뒤 수정되지 않은 원본 내보내기를 누릅니다.
5. 파일 앱 화면에서 뒤로 화살표를 눌러 위치 아래의 SSD를 고릅니다.
6. 저장을 누르고 끝날 때까지 SSD를 빼지 않습니다.

iCloud 사진을 쓰면 원본을 내려받는 데 Wi-Fi가 필요합니다. 수정되지 않은 원본 내보내기는 편집 전 원본을 저장합니다. 편집한 결과가 필요한 사진은 저장 뒤 따로 확인하세요. 사진이 많다면 달이나 연도별로 나눠 옮기면 중간에 멈췄을 때 어디까지 끝났는지 찾기 쉽습니다. USB 메모리로 옮기는 순서는 [아이폰 사진 USB로 옮기기](/blog/ko/iphone-photos-to-usb)와 같습니다.

## ProRes 영상을 SSD에 바로 녹화할 수 있나요?

지원 모델이면 할 수 있습니다. [Apple ProRes 안내](https://support.apple.com/en-us/109041)에 따르면 아이폰 15 Pro, 16 Pro, 17 Pro, 18 Pro 모델은 USB-C로 연결한 외부 저장장치에 ProRes를 바로 녹화합니다. 아이폰 13 Pro와 14 Pro 모델은 ProRes를 내장 저장 공간에 녹화합니다.

| 녹화 조건 | 지원 모델 | SSD 조건 |
| --- | --- | --- |
| 4K 60fps ProRes | 아이폰 15 Pro, 16 Pro, 17 Pro, 18 Pro 모델 | 쓰기 속도 초당 220MB 이상, 최대 소비 전력 4.5W |
| 4K 120fps ProRes | 아이폰 16 Pro, 17 Pro, 18 Pro 모델 | 쓰기 속도 초당 440MB 이상, 최대 소비 전력 4.5W. 녹화 세션마다 먼저 다시 포맷합니다 |
| 공통 | 위 모델 | exFAT 형식 |

더 느린 SSD를 연결하면 녹화 속도가 느리다는 메시지가 나올 수 있습니다. [Apple의 ProRes 녹화 안내](https://support.apple.com/guide/iphone/record-prores-videos-iphde02c478d/ios)에 따르면 128GB 아이폰 15 Pro와 16 Pro 모델은 내장 저장 공간에 1080p 30fps로만 ProRes를 녹화합니다. 이 모델에서 4K ProRes를 찍으려면 조건에 맞는 SSD가 필요합니다.

ProRes를 켜는 순서는 아래와 같습니다. 출처는 [Apple ProRes 안내](https://support.apple.com/en-us/109041)입니다.

1. 설정 앱에서 카메라를 누르고 포맷을 누릅니다.
2. 비디오 캡처 아래의 Apple ProRes를 켭니다.
3. SSD를 USB-C로 연결합니다.
4. 카메라 앱에서 비디오 모드를 고릅니다.
5. 화면의 해상도와 프레임 값을 눌러 ProRes 형식, 해상도, 프레임을 고릅니다.

다시 아이폰에 녹화하려면 SSD를 분리합니다. 이 글은 특정 SSD의 쓰기 속도와 소비 전력을 측정하지 않았고 제품을 추천하지 않습니다. 제조사 사양에서 두 수치를 확인하세요.

## SSD로 옮긴 뒤 아이폰 공간은 어떻게 비우나요?

[Apple ProRes 안내](https://support.apple.com/en-us/109041)는 큰 사진과 영상을 외부 저장장치로 내보낸 뒤 사진 앱에서 지우고 최근 삭제된 항목에서 영구 삭제하라고 설명합니다. 아래 다섯 가지 중 하나라도 "아니요"라면 지우지 마세요.

1. 파일 앱에서 SSD의 사진이 열립니다.
2. 가장 긴 영상이 끝까지 재생됩니다.
3. SSD의 파일 수가 고른 사진과 영상 수와 같거나 많습니다.
4. 중요한 사진과 영상은 SSD가 아닌 곳에도 사본이 있습니다.
5. SSD를 잃어버려도 괜찮은 보관 계획이 있습니다.

[Apple의 iCloud 저장 공간 안내](https://support.apple.com/en-us/108922)에 따르면 최근 삭제된 항목의 사진과 영상은 30일 동안 되살릴 수 있습니다. iCloud 저장 공간을 넘긴 상태라면 지운 항목이 바로 사라집니다. 큰 영상을 나눠 옮기는 요령은 [아이폰 동영상 옮기기](/blog/ko/iphone-videos-to-usb)에 있습니다.

## USB 메모리에 정기적으로 저장하려면?

아래 앱은 USB 메모리를 기준으로 안내합니다. 외장 SSD에서의 동작은 확인하지 않았습니다.

NextGenAI가 만든 U-Saver는 일반 USB에 사진, 영상, 연락처를 저장하는 앱으로, exFAT이나 FAT32 형식의 USB를 쓰고 iOS 26 이상에서 동작합니다. U-Saver는 App Store 출시를 준비 중이며 가격은 4,900원이고 한 번 결제합니다. U-Saver는 메시지, 앱 데이터, 아이폰 설정은 저장하지 않고, U-Saver로 저장한 USB의 내용은 암호화되지 않습니다. 구매 전에 [U-Saver를 쓰기 전에 확인할 여섯 가지](/blog/ko/before-you-buy)를 확인하세요.

## 아이폰 사진·영상 SSD로 옮기기 자주 묻는 질문

### 컴퓨터 없이 아이폰 사진을 SSD로 옮길 수 있나요?

옮길 수 있습니다. SSD를 아이폰에 연결하고 사진 앱에서 수정되지 않은 원본 내보내기로 SSD를 고릅니다.

### 4GB가 넘는 영상이 SSD에 저장되지 않아요.

SSD가 FAT32일 가능성이 큽니다. FAT32는 파일 하나가 4GiB를 넘을 수 없습니다. 자료를 옮긴 뒤 exFAT으로 포맷하세요.

### 일반 영상도 SSD에 바로 녹화할 수 있나요?

Apple 안내에서 외부 저장장치에 바로 녹화하는 기능은 ProRes 영상 기준입니다. 일반 HEVC 영상은 찍은 뒤 사진 앱에서 SSD로 내보내세요.

### Lightning 아이폰도 ProRes를 SSD에 바로 녹화할 수 있나요?

Apple 안내의 지원 모델은 USB-C로 연결하는 아이폰 15 Pro 이후 Pro 모델입니다. Lightning 아이폰은 찍은 뒤 사진 앱에서 SSD로 옮기세요.

### SSD에 옮긴 사진은 암호화되나요?

형식에 따라 다릅니다. [Microsoft 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)에서 exFAT과 FAT32는 파일 시스템 수준 암호화를 지원하지 않음으로 나옵니다. SSD를 가진 사람은 누구나 내용을 열 수 있으니 보관 장소에 신경 쓰세요.
