---
title: "Mac USB 메모리 사용법: 단자, 연결 허용, Finder 복사, 꺼내기, 포맷"
description: "Mac에서 USB 메모리를 쓰는 순서를 Apple 공식 문서 기준으로 정리했습니다. 단자와 어댑터, 연결 허용 창, Finder 복사, 안전하게 꺼내기, 안 보이거나 꺼내지지 않을 때 확인할 것, 형식과 암호 설정을 다룹니다."
date: 2026-11-21
---

## 핵심 요약

Mac에서 USB 메모리를 쓰는 순서는 네 단계입니다. 맞는 단자에 꽂고, 허용을 묻는 창이 뜨면 허용하고, Finder에서 파일을 복사하고, 꺼낸 뒤에 뽑습니다.

Apple 실리콘 Mac 노트북은 처음 보는 USB 기기를 연결할 때 허용 여부를 묻습니다. 허용 안 함을 누르면 Mac이 USB 메모리를 인식하지 않습니다.

윈도우 PC나 아이폰에서도 쓸 USB라면 exFAT이나 FAT32로 포맷합니다. APFS는 Mac용 형식입니다. FAT32는 4GB가 넘는 파일을 저장하지 못합니다.

"MacBook에 USB를 꽂았는데 아무 반응이 없어요." "디스크를 꺼낼 수 없다고 나와요." 이 글은 Mac에서 USB 메모리를 쓰는 순서만 다룹니다. 윈도우 PC까지 함께 보려면 [USB 메모리 사용법](/blog/ko/usb-flash-drive-basics)을 읽으세요.

## 내 Mac에는 어떤 단자와 어댑터가 필요한가요?

USB 메모리의 단자와 Mac의 포트를 맞춰 봅니다. 포트 종류는 [Apple의 Mac 포트 안내](https://support.apple.com/en-us/109523)에서 확인합니다.

| USB 메모리 단자 | Mac 포트 | 할 일 |
| --- | --- | --- |
| USB-C | USB-C 또는 Thunderbolt(USB-C) | 그대로 꽂습니다 |
| USB-A | USB-A | 그대로 꽂습니다 |
| USB-A | USB-C나 Thunderbolt(USB-C)만 있음 | USB-C to USB 어댑터를 씁니다 |

[Apple의 USB-C 케이블 안내](https://support.apple.com/guide/mac-help/use-usb-c-cables-mchl447b9239/mac)는 USB-C to USB 어댑터를 USB 메모리 같은 일반 USB 기기용으로 소개합니다. [Apple의 저장장치 연결 안내](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac)도 케이블이 포트에 맞지 않으면 어댑터를 쓸 수 있다고 적습니다. 이 글은 특정 제품을 추천하지 않습니다.

## Mac이 USB 메모리 연결을 허용하라고 묻는 이유는?

[Apple 안내](https://support.apple.com/en-us/102282)에 따르면 Apple 실리콘 Mac 노트북은 처음 보거나 알 수 없는 USB 기기, Thunderbolt 기기, SD 카드를 연결할 때 허용을 묻는 창을 띄웁니다.

| 상황 | 결과 |
| --- | --- |
| 허용을 누릅니다 | Mac이 USB 메모리를 인식합니다 |
| 허용 안 함을 누릅니다 | Mac이 인식하지 않습니다. 다음에 연결할 때 다시 묻습니다 |
| Mac이 잠겨 있습니다 | 잠금을 풀어야 허용할 수 있습니다 |
| Mac이 3일 이상 잠겨 있었습니다 | 전에 허용한 기기도 잠금을 풀어야 다시 쓸 수 있습니다 |

설정을 바꾸려면 Apple 메뉴 > 시스템 설정 > 개인정보 보호 및 보안 > 액세서리로 갑니다. '액세서리 연결 허용'의 기본값은 새 액세서리에 대해 묻기입니다. 이 밖에 항상 묻기, 잠금 해제 시 자동 허용, 항상 허용을 고를 수 있습니다.

## Mac에서 USB 메모리로 파일을 복사하는 순서는?

[Apple의 저장장치 연결 안내](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac)를 따른 순서입니다.

1. USB 메모리를 Mac에 꽂습니다. 허용을 묻는 창이 뜨면 허용합니다.
2. Dock에서 Finder 아이콘을 눌러 Finder 창을 엽니다.
3. USB로 옮기려면 데스크탑이나 폴더에서 파일을 골라 Finder 사이드바 '위치' 아래의 USB 메모리로 드래그합니다.
4. Mac으로 가져오려면 '위치' 아래의 USB 메모리를 고르고, 파일을 Mac의 폴더로 드래그합니다.
5. 복사가 끝나면 USB 메모리를 꺼낸 뒤 뽑습니다.

권한 때문에 USB의 파일이 열리지 않으면, Apple은 관리자가 인증하거나 파일의 공유 및 권한 설정을 바꾸라고 안내합니다. 관리자가 아니라면 관리자에게 접근 권한을 요청합니다.

## Mac에서 USB 메모리를 꺼내는 방법은?

Apple은 같은 안내에서 세 가지 방법을 적습니다.

| 위치 | 꺼내는 방법 |
| --- | --- |
| Finder 메뉴 | USB 메모리를 고르고 파일 > 추출을 고릅니다 |
| Finder 사이드바 | USB 메모리 이름 옆의 추출 버튼을 누릅니다 |
| 데스크탑 | USB 메모리 아이콘을 휴지통으로 드래그합니다 |

복사가 끝날 때까지 기다린 뒤 꺼내고, 그다음에 뽑습니다.

## '디스크를 꺼낼 수 없음'이 뜨면 어떻게 하나요?

[Apple 안내](https://support.apple.com/guide/mac-help/eject-a-disk-mac-app-mh27076/mac)에 따르면 앱이 디스크를 쓰고 있으면 꺼내지 못할 수 있습니다.

1. 경고 문구를 읽습니다. 디스크를 쓰는 앱 이름이 나올 때가 있습니다.
2. Command-Tab을 눌러 열린 앱을 확인합니다.
3. 디스크를 쓰는 앱을 종료하고 다시 꺼냅니다.
4. 앱을 종료할 수 없으면 USB에 있는 문서를 닫고 다시 꺼냅니다.

같은 Mac의 다른 사용자가 USB를 쓰고 있다면 [Apple의 다른 사용자가 쓰는 디스크 안내](https://support.apple.com/guide/mac-help/eject-a-disk-user-mac-mh27077/mac)를 따르세요.

## USB 메모리가 Mac에 안 보이면 무엇을 확인하나요?

| 증상 | 확인할 것 |
| --- | --- |
| 꽂아도 아무 반응이 없습니다 | 허용을 묻는 창이 떴는지 봅니다. 허용 안 함을 눌렀다면 뽑았다가 다시 연결합니다 |
| Finder 사이드바에 없습니다 | Finder > 설정의 일반과 사이드바 탭에서 외장 디스크 표시를 켭니다 |
| 어댑터나 허브를 거치면 연결되지 않습니다 | USB 메모리나 어댑터를 Mac에 바로 꽂습니다 |
| 파일이 복사되거나 열리지 않습니다 | 디스크 유틸리티 First Aid로 검사합니다 |
| 4GB가 넘는 파일만 복사되지 않습니다 | USB가 FAT32인지 확인합니다. 큰 파일은 exFAT USB에 저장합니다 |

Finder 설정은 [Apple의 연결된 기기 보기 안내](https://support.apple.com/guide/mac-help/see-the-devices-connected-to-your-mac-mchlp1039/mac)에 있습니다.

## USB 메모리에 First Aid를 실행하려면?

[Apple의 저장장치 복구 안내](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac)에 따르면 First Aid는 저장장치의 포맷과 디렉터리 구조 오류를 검사하고 고칩니다. 모든 문제를 찾거나 고치지는 못합니다.

1. 디스크 유틸리티를 열고 보기 > 모든 기기 보기를 고릅니다.
2. 사이드바에서 USB의 볼륨을 고르고 First Aid를 누른 뒤 실행을 누릅니다.
3. 컨테이너가 있으면 컨테이너마다 같은 순서로 실행합니다.
4. 마지막으로 USB 자체(맨 위 항목)를 골라 실행합니다.

Apple은 실패하면 한 번 더 시도하라고 적습니다. 그래도 안 되면 가능한 자료를 먼저 백업하고 다시 포맷하라고 안내합니다. 디스크가 곧 고장 난다는 보고가 나오면 고칠 수 없으니 파일을 옮기고 USB를 바꾸라고 적습니다.

## Mac에서 USB 메모리는 어떤 형식으로 쓰나요?

USB를 어디서 쓸지에 맞춰 고릅니다. 형식 설명은 [Apple의 파일 시스템 형식 안내](https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac), FAT32 제한은 [Microsoft의 파일 시스템 비교표](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) 기준입니다.

| 형식 | Apple 안내 | 이럴 때 고릅니다 |
| --- | --- | --- |
| APFS | macOS 10.13 이후 Mac의 기본 파일 시스템입니다 | Mac에서만 씁니다 |
| APFS(암호화) | 볼륨을 암호화한 APFS입니다 | Mac에서만 쓰고 암호를 걸고 싶습니다 |
| ExFAT | 32GB를 넘는 윈도우 볼륨에 씁니다 | 윈도우나 아이폰에서도 쓰고, 4GB가 넘는 파일도 옮깁니다 |
| MS-DOS(FAT) | 32GB 이하 윈도우 볼륨에 씁니다 | FAT32가 필요하고 4GB가 넘는 파일이 없습니다 |

포맷하려면 Finder 사이드바에서 USB를 Control-클릭하고 디스크 지우기를 고릅니다. 형식을 고른 뒤 지우기를 누릅니다. 더 많은 옵션은 디스크 유틸리티에 있습니다. 포맷하면 USB의 파일이 모두 지워지니 먼저 복사하세요. 자세한 순서는 [exFAT 포맷 방법](/blog/ko/format-usb-exfat)과 [USB FAT32 포맷 방법](/blog/ko/format-usb-fat32)에 있습니다.

## Mac에서 USB 메모리에 암호를 걸 수 있나요?

걸 수 있습니다. 다만 USB를 먼저 지워야 합니다. [Apple의 암호화 안내](https://support.apple.com/guide/disk-utility/encrypt-protect-storage-device-password-dskutl35612/mac)를 따른 순서입니다.

1. 남길 파일을 다른 저장장치에 복사합니다.
2. 디스크 유틸리티를 열고 보기 > 모든 기기 보기를 고릅니다.
3. USB를 고르고 지우기를 누릅니다.
4. 이름을 입력하고 설계를 GUID 파티션 맵으로 고릅니다.
5. 포맷에서 APFS(암호화) 같은 암호화 형식을 고릅니다.
6. 암호를 두 번 입력하고 선택을 누릅니다.
7. 지우기를 누른 뒤 완료를 누릅니다.

이후에는 USB를 연결할 때마다 암호를 입력합니다. APFS는 Apple이 적은 윈도우 호환 형식이 아닙니다. 윈도우 PC에서도 쓸 USB라면 이 방법을 쓰지 마세요.

## 아이폰에서 USB 메모리를 쓰려면?

이 글은 Mac 기준입니다. 아이폰에 USB를 연결하려는 분은 아래 글을 보세요.

| 하려는 일 | 읽을 글 |
| --- | --- |
| 아이폰에 USB를 꽂고 파일 복사 | [아이폰 USB 메모리 사용법](/blog/ko/iphone-flash-drive-guide) |
| 아이폰 사진을 USB로 옮기기 | [아이폰 사진 USB로 옮기기](/blog/ko/iphone-photos-to-usb) |
| 단자, 형식, 용량 한눈에 보기 | [아이폰 외장 메모리 총정리](/blog/ko/iphone-usb-drive-guide) |

Mac에서 SD 카드를 쓰려면 [Mac SD 카드 사용법](/blog/ko/sd-card-on-mac)을 보세요.

## Mac USB 메모리 자주 묻는 질문

### Mac에서 USB 메모리는 어디서 여나요?

Finder 창을 열고 사이드바의 '위치' 아래를 봅니다. 없으면 Finder > 설정에서 외장 디스크 표시를 켭니다.

### USB-C만 있는 MacBook에 USB-A 메모리를 쓸 수 있나요?

어댑터를 쓰면 됩니다. Apple은 USB-C to USB 어댑터를 USB 메모리 같은 일반 USB 기기용으로 안내합니다.

### 실수로 허용 안 함을 눌렀어요.

USB를 뽑았다가 다시 연결합니다. Apple은 다음 연결 때 다시 묻는다고 적습니다.

### 꺼내기 없이 그냥 뽑아도 되나요?

권하지 않습니다. 복사가 끝날 때까지 기다리고, Finder에서 꺼낸 뒤 뽑습니다.

### Mac과 윈도우에서 함께 쓰려면 어떤 형식이 맞나요?

exFAT을 고르세요. Apple은 윈도우와 함께 쓸 디스크가 32GB 이하면 MS-DOS(FAT), 32GB를 넘으면 ExFAT을 권합니다. 4GB가 넘는 파일을 옮길 계획이면 용량과 관계없이 exFAT이 맞습니다.

### Mac에서 쓰는 USB 메모리는 암호화되나요?

기본으로는 암호화되지 않습니다. Microsoft 비교표에서 exFAT과 FAT32는 파일 시스템 수준 암호화를 지원하지 않습니다. Mac에서는 APFS(암호화)로 지워 암호를 걸 수 있지만, APFS는 Apple이 적은 윈도우 호환 형식이 아닙니다.
