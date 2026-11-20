---
title: "Mac SD 카드 사용법: 슬롯 있는 모델, 리더기, 사진 가져오기, 안 보일 때"
description: "Mac에서 SD 카드를 쓰려면 내 Mac에 SD 카드 슬롯이 있는지부터 확인합니다. 슬롯이 있는 모델, 지원 카드, 리더기 연결, 사진 앱 가져오기, Finder에 안 보일 때 확인할 것, 디스크 유틸리티 포맷을 Apple 공식 문서 기준으로 정리했습니다."
date: 2026-11-20
---

## 핵심 요약

Mac SD 카드 사용은 내 Mac에 SD 카드 슬롯이 있는지 확인하는 데서 시작합니다. Apple이 슬롯이 있는 모델 목록을 공개합니다. 목록에 없는 Mac은 USB SD 카드 리더기를 씁니다.

카드를 넣으면 Finder에서 파일을 엽니다. 사진과 영상은 사진 앱의 가져오기로도 옮깁니다. 다 쓴 카드는 아이콘을 휴지통으로 드래그해 꺼낸 뒤 뺍니다.

카드가 안 보이면 다시 꽂고, Finder 설정과 잠금 스위치를 확인합니다. 그래도 안 되면 디스크 유틸리티의 First Aid를 씁니다. 포맷은 자료를 옮긴 뒤 마지막에 합니다.

"내 MacBook에 SD 슬롯이 있나요?" "카드를 꽂았는데 Finder에 안 보여요." 이 글은 Mac에서 SD 카드를 쓰는 순서만 다룹니다. 윈도우 PC까지 함께 보려면 [SD 카드 컴퓨터 연결 방법](/blog/ko/sd-card-to-pc)을 읽으세요.

## 내 Mac에 SD 카드 슬롯이 있나요?

[Apple의 Mac SD 카드 슬롯 안내](https://support.apple.com/en-us/102352)에 따르면 SDXC 카드 슬롯이 있는 모델은 아래와 같습니다.

| Mac 종류 | SDXC 슬롯이 있는 모델 |
| --- | --- |
| Mac Studio | 2022년 이후 |
| 14형·16형 MacBook Pro | 2021년 이후 |
| MacBook Pro | 2011년~2015년 |
| Mac mini | 2011년~2014년 |
| 13형 MacBook Air | 2013년~2017년 |
| 27형·21.5형 iMac | 2010년 이후 |

같은 목록은 [Apple의 Mac 포트 안내](https://support.apple.com/en-us/109523)에도 있습니다. 이 안내는 SD 카드 슬롯에 SD, SDHC, SDXC, MMC, UHS-II 카드를 쓴다고 적습니다.

목록에 없는 Mac은 슬롯이 없습니다. 이때는 USB 리더기를 씁니다.

## 슬롯이 없는 Mac은 어떤 리더기를 쓰나요?

Mac의 USB 단자에 맞는 리더기를 고릅니다. USB-C 단자만 있는 Mac이라면 USB-C 리더기를 쓰거나 어댑터를 거칩니다. 특정 제품을 추천하지 않고, 확인할 항목만 정리합니다.

| 확인할 것 | 이유 |
| --- | --- |
| 리더기 단자 | Mac의 단자(USB-C, USB-A)와 맞아야 꽂을 수 있습니다 |
| 카드 크기 | SD만 받는 리더기에 microSD를 넣으려면 어댑터가 필요합니다 |
| 용량 규격 | SDXC 카드는 SDXC 이상을 지원하는 리더기에서 읽습니다 |
| 버스 방식 | UHS-II 카드도 UHS-I 리더기에서 쓰지만 UHS-II 속도는 나지 않습니다 |

용량 규격 호환은 [SD Association의 용량 규격 안내](https://www.sdcard.org/consumers/about-sd-memory-card-choices/sd-sdhc-sdxc-and-sduc-card-capacity-choices/), 버스 방식 호환은 [SD Association의 버스 방식 안내](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/) 기준입니다. 고르는 기준은 [SD 카드 리더기 고르는 법](/blog/ko/choose-sd-card-reader)에 자세히 있습니다. USB-C 리더기를 꽂고 빼는 순서는 [C 타입 SD 카드 리더기 사용법](/blog/ko/usb-c-sd-card-reader)을 보세요.

## Mac 슬롯은 어떤 카드를 지원하나요?

[Apple 안내](https://support.apple.com/en-us/102352)에 적힌 슬롯 조건입니다.

| 항목 | Apple 안내 |
| --- | --- |
| 지원 카드 | MMC, Default Speed, High Speed, UHS-I |
| UHS-II 지원 | 2022년 이후 Mac Studio, 2021년 이후 MacBook Pro, 2020년 iMac, iMac Pro |
| miniSD, microSD | 어댑터를 끼워 사용 |
| 지원하지 않는 카드 | SDIO 카드 |
| 주의 | 두께 2.1mm를 넘는 카드는 슬롯을 망가뜨릴 수 있습니다 |

UHS-II를 지원하지 않는 Mac에 UHS-II 카드를 넣어도 카드는 씁니다. 다만 속도는 UHS-I 수준입니다. 방식별 차이는 [UHS-I·UHS-II·SD Express 차이](/blog/ko/uhs-sd-card)에 있습니다. microSD와 어댑터는 [micro SD 카드와 SD 카드 차이](/blog/ko/microsd-vs-sd)를 보세요.

## Mac에서 SD 카드를 열고 꺼내는 순서

[Apple의 Mac SD 카드 슬롯 안내](https://support.apple.com/en-us/102352)를 따른 순서입니다.

1. 카드의 금속 접점이 아래를 보고 Mac 쪽을 향하게 해서 슬롯에 넣습니다. 리더기를 쓰면 카드를 리더기에 넣고 리더기를 Mac에 꽂습니다.
2. 힘을 주어 밀어 넣지 않습니다. Apple은 억지로 넣으면 슬롯이 손상될 수 있다고 적습니다.
3. 카드 아이콘이 나타나면 Finder에서 열고 파일을 Mac 폴더로 복사합니다.
4. 다 쓴 뒤 카드 아이콘을 휴지통으로 드래그해 꺼냅니다.
5. 아이콘이 사라지면 카드를 뺍니다.

Apple은 Mac이 잠자기 상태일 때 카드를 빼면 데이터를 잃을 수 있다고 적습니다. Mac을 깨우고 꺼낸 뒤에 뺍니다.

## Mac 사진 앱으로 SD 카드 사진을 가져오려면?

[Apple의 사진 앱 가져오기 안내](https://support.apple.com/guide/photos/import-from-storage-devices-phtae4e05c67/mac)를 따른 순서입니다.

1. 카드를 Mac의 SD 카드 슬롯에 넣거나, 리더기에 넣어 Mac에 연결합니다.
2. 사진 앱을 엽니다.
3. 파일 > 가져오기를 고르고, 가져올 사진이나 영상을 선택한 뒤 가져오기 검토를 누릅니다.
4. 새 사진을 모두 가져오려면 모든 새로운 사진 가져오기를, 일부만 가져오려면 사진을 고른 뒤 선택 항목 가져오기를 누릅니다.
5. 가져온 뒤 카드의 사진을 지울지 묻는 창이 뜨면 항목 삭제나 항목 유지를 고릅니다.
6. 다 끝나면 카드를 꺼냅니다.

가져온 사진은 사이드바의 가져오기 앨범과 사진 앨범에 나타납니다. 카드의 원본을 남겨 두려면 5단계에서 항목 유지를 고릅니다. 파일 이름과 폴더 구조를 그대로 옮기려면 Finder로 복사하는 편이 단순합니다.

## SD 카드가 Finder에 안 보이면 무엇을 확인하나요?

| 증상 | 확인할 것 |
| --- | --- |
| 카드를 넣어도 아무것도 뜨지 않습니다 | 카드를 뺐다가 다시 넣습니다. Apple은 너무 느리거나 빠르게 넣으면 인식되지 않을 수 있다고 적습니다 |
| 카드는 연결된 것 같은데 아이콘이 없습니다 | Finder > 설정의 일반과 사이드바 탭에서 외장 디스크 표시를 켭니다 |
| '수정할 수 없음'이 뜹니다 | 카드를 꺼내고 잠금 스위치를 풀어 다시 넣습니다 |
| 리더기에서는 보이고 슬롯에서는 안 보입니다 | 카드가 슬롯의 지원 목록에 있는지 확인합니다 |
| 파일이 열리지 않거나 오류가 납니다 | 디스크 유틸리티 First Aid로 검사합니다 |

Finder에 외장 디스크를 표시하는 방법은 [Apple의 연결된 기기 보기 안내](https://support.apple.com/guide/mac-help/see-the-devices-connected-to-your-mac-mchlp1039/mac)에 있습니다. 잠금 스위치 위치는 [SD 카드 잠금 스위치 글](/blog/ko/sd-card-lock-switch)에서 확인하세요.

## 디스크 유틸리티 First Aid는 어떻게 쓰나요?

[Apple의 저장장치 복구 안내](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac)에 따르면 First Aid는 저장장치의 포맷과 디렉터리 구조 오류를 검사하고 고칩니다. 모든 문제를 찾거나 고치지는 못합니다.

1. 디스크 유틸리티를 엽니다.
2. 보기 > 모든 기기 보기를 고릅니다.
3. 사이드바에서 카드의 볼륨을 고르고 First Aid를 누른 뒤 실행을 누릅니다.
4. 컨테이너가 있으면 컨테이너에도 같은 순서로 실행합니다.
5. 마지막으로 카드 자체(맨 위 항목)를 골라 실행합니다.

Apple은 실패하면 한 번 더 시도하라고 적습니다. 그래도 안 되면 가능한 자료를 먼저 백업하고 다시 포맷하라고 안내합니다. 포맷을 묻는 창이 바로 떠도 누르지 마세요. [SD 카드 인식 안 될 때 확인 순서](/blog/ko/sd-card-not-working)를 먼저 따르세요.

## Mac에서 SD 카드를 포맷하려면?

포맷하면 카드의 파일이 모두 지워집니다. 남길 파일은 먼저 다른 곳에 복사합니다. 형식은 카드를 어디서 쓸지에 맞춰 고릅니다. [Apple의 파일 시스템 형식 안내](https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac) 기준입니다.

| 형식 | Apple 안내 |
| --- | --- |
| APFS | macOS 10.13 이후 Mac의 기본 파일 시스템입니다 |
| MS-DOS(FAT) | 32GB 이하 윈도우 볼륨에 씁니다 |
| ExFAT | 32GB를 넘는 윈도우 볼륨에 씁니다 |

[Apple의 윈도우용 포맷 안내](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac)를 따른 순서입니다.

1. 디스크 유틸리티를 열고 보기 > 모든 기기 보기를 고릅니다.
2. 사이드바에서 카드를 고르고 지우기를 누릅니다.
3. 설계를 고르고, 포맷에서 MS-DOS(FAT)나 ExFAT을 고릅니다.
4. 이름을 입력합니다. 이름은 11자까지입니다.
5. 지우기를 누른 뒤 완료를 누릅니다.

카메라에 넣을 카드는 기기 설명서가 안내하는 방법을 먼저 따르세요. SD 규격 단체의 프로그램으로 포맷하는 방법은 [SD 카드 포맷 프로그램 사용법](/blog/ko/sd-card-formatter)에 있습니다. 용량별 형식 고르기는 [SD 카드 포맷 방법](/blog/ko/format-sd-card)을 보세요.

## 아이폰에서 SD 카드를 쓰려면?

이 글은 Mac 기준입니다. 아이폰에 카드를 연결하려는 분은 아래 글을 보세요.

| 하려는 일 | 읽을 글 |
| --- | --- |
| 아이폰에 SD 카드 리더기 연결 | [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader) |
| 아이폰 사진을 카드로 옮기기 | [아이폰 사진 SD 카드로 옮기기](/blog/ko/iphone-photos-to-sd-card) |
| 리더 종류와 조건 한눈에 보기 | [아이폰 SD 카드 총정리](/blog/ko/iphone-sd-card-guide) |

## Mac SD 카드 자주 묻는 질문

### MacBook Air에 SD 카드 슬롯이 있나요?

Apple 목록에서 SDXC 슬롯이 있는 MacBook Air는 2013년~2017년 13형 모델입니다. 그 밖의 MacBook Air는 USB 리더기를 씁니다.

### Mac 슬롯에 microSD를 그대로 넣을 수 있나요?

넣지 않습니다. Apple은 microSD와 miniSD를 어댑터에 끼워 쓰라고 안내합니다.

### UHS-II 카드를 넣었는데 속도가 기대보다 느려요.

Apple 안내에서 UHS-II를 지원하는 Mac은 2022년 이후 Mac Studio, 2021년 이후 MacBook Pro, 2020년 iMac, iMac Pro입니다. 다른 모델의 슬롯은 UHS-I까지 지원합니다. 리더기를 쓴다면 리더기의 지원 방식도 확인하세요.

### 꺼내기 없이 그냥 빼도 되나요?

권하지 않습니다. Apple은 아이콘을 휴지통으로 드래그해 꺼낸 뒤 빼라고 안내합니다. 잠자기 중에 빼면 데이터를 잃을 수 있다고도 적습니다.

### Mac에서 APFS로 포맷한 카드를 윈도우 PC에서 쓸 수 있나요?

Apple은 윈도우와 함께 쓸 디스크에 MS-DOS(FAT)나 ExFAT을 고르라고 안내합니다. 윈도우 PC와 함께 쓸 카드는 이 두 형식 중 하나로 포맷하세요.
