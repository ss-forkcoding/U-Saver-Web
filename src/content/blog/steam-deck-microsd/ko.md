---
title: "스팀 덱 SD 카드 추천 기준과 사용법: 쓸 수 있는 microSD, 포맷, 게임 옮기기"
description: "스팀 덱 SD 카드 추천 기준을 Valve 공식 안내로 정리했습니다. UHS-I microSD 규격, 카드 넣고 포맷하는 순서, ext4 형식, 내장 저장 공간의 게임을 microSD로 옮기는 법까지 담았습니다."
date: 2026-11-23
---

## 핵심 요약

스팀 덱 SD 카드는 microSD 카드입니다. Valve는 UHS-I(클래스 3 이상) microSD 카드를 모두 지원한다고 안내합니다. UHS-II와 UHS-III 카드도 작동할 것으로 보지만, 더 빠른 전송 속도는 지원하지 않습니다.

카드는 스팀 덱에서 먼저 포맷해야 씁니다. 스팀 덱은 카드를 ext4 형식으로 포맷합니다. 포맷하면 카드에 있던 자료는 지워집니다.

이 글의 스팀 덱 SD 카드 추천은 제품 순위가 아니라 규격 기준입니다. 특정 카드를 시험하거나 추천하지 않습니다.

"스팀 덱에 넣을 카드는 아무거나 되나요?" "카드에 게임을 옮기려면 어디로 가야 하나요?" 스팀 덱에 카드를 처음 넣을 때 자주 나오는 질문입니다. 이 글은 카드 규격, 넣고 포맷하는 순서, 게임 옮기기를 Valve 공식 문서로 확인합니다. 다른 기기의 microSD 사용법은 [마이크로 SD 카드 사용법](/blog/ko/how-to-use-microsd)에 있습니다.

## 스팀 덱 SD 카드 추천 기준은 무엇인가요?

Valve가 밝힌 규격을 기준으로 고릅니다. 아래 표는 [Steam Deck 기본 사용 및 문제 해결 안내](https://help.steampowered.com/ko/faqs/view/69E3-14AF-9764-4C28)와 [Steam Deck 기술 사양](https://www.steamdeck.com/ko/tech)을 정리한 것입니다.

| 확인 항목 | Valve 안내 |
| --- | --- |
| 카드 크기 | microSD. 슬롯은 본체 밑면에 있음 |
| 용량 규격 | SD, SDHC, SDXC 지원 |
| 버스 방식 | UHS-I(클래스 3 이상) 카드 모두 지원 |
| UHS-II, UHS-III 카드 | 작동할 것으로 예상. 더 빠른 전송 속도는 지원하지 않음 |
| 파일 시스템 | 스팀 덱이 ext4로 포맷 |

Valve는 "클래스 3"이 카드의 어떤 표시를 뜻하는지 따로 적지 않았습니다. 카드 겉면의 U3는 UHS 스피드 클래스 3 표시입니다. 속도 표시는 [SD 카드 속도 표시 읽는 법](/blog/ko/sd-card-speed-class)에, UHS-I와 UHS-II의 차이는 [UHS-I·UHS-II·SD Express 차이](/blog/ko/uhs-sd-card)에 정리했습니다.

UHS-II 카드는 스팀 덱에서 UHS-II 속도를 내지 못합니다. 같은 값이라면 Valve 안내에 맞는 UHS-I 카드로 충분한지 먼저 따져 보세요.

## 스팀 덱 SD 카드 용량은 얼마나 큰 것까지 되나요?

이 글에서 확인한 Valve 문서에는 최대 용량이 없습니다. 기술 사양은 SD, SDHC, SDXC를 지원한다고만 적습니다. SDXC 규격은 2TB까지입니다. 용량 규격의 차이는 [SDHC·SDXC·SDUC 차이](/blog/ko/sdhc-vs-sdxc)에 있습니다.

용량이 큰 카드는 가짜 제품이 섞이기 쉽습니다. 새 카드의 실제 용량은 [가짜 SD 카드 구별법](/blog/ko/fake-sd-card)으로 확인하세요.

## 스팀 덱에 microSD 카드를 넣고 포맷하는 방법은?

본체 설정에서 포맷합니다. [Valve 안내](https://help.steampowered.com/ko/faqs/view/69E3-14AF-9764-4C28)의 순서입니다.

1. 카드를 본체 밑면의 슬롯에 넣습니다.
2. Steam 버튼을 눌러 설정을 엽니다.
3. 시스템 > SD 카드 포맷을 고릅니다.
4. 포맷이 끝날 때까지 기다립니다. Valve는 몇 분 정도 걸릴 수 있다고 적습니다.

포맷하면 카드의 기존 자료가 지워집니다. 카메라나 휴대폰에서 쓰던 카드라면 사진과 영상을 먼저 다른 곳에 복사합니다. 컴퓨터에서 카드를 여는 방법은 [SD 카드 컴퓨터 연결 방법](/blog/ko/sd-card-to-pc)에 있습니다.

## 스팀 덱이 포맷한 카드는 어떤 형식인가요?

ext4입니다. [Steam Deck FAQ](https://www.steamdeck.com/ko/faq)는 스팀 덱 microSD 카드가 ext4를 쓰고, 스팀 덱이 카드를 알맞은 형식으로 포맷한다고 적습니다. 영문 FAQ는 이 형식을 "ext4 with casefolding"이라고 부릅니다. 파일 이름의 대소문자를 구분하지 않게 하는 기능입니다.

| 기기 | 기본으로 쓰는 카드 형식 | 근거 |
| --- | --- | --- |
| 스팀 덱 | ext4 | [Steam Deck FAQ](https://www.steamdeck.com/ko/faq) |
| 아이폰 | APFS, macOS 확장, exFAT, FAT32, FAT를 읽음 | [Apple 외부 저장장치 안내](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |

Apple이 밝힌 아이폰 지원 형식에 ext4는 없습니다. 이 글은 스팀 덱이 포맷한 카드를 아이폰에서 시험하지 않았습니다. 스팀 덱 카드를 다른 기기에서 다시 쓰려면 그 기기에서 다시 포맷해야 할 수 있습니다. 다른 기기용 포맷은 [마이크로 SD 카드 포맷 방법](/blog/ko/format-microsd)에 있습니다.

## 내장 저장 공간의 게임을 SD 카드로 옮길 수 있나요?

옮길 수 있습니다. [Valve 안내](https://help.steampowered.com/ko/faqs/view/69E3-14AF-9764-4C28)는 스팀 덱이 기본으로 내장 저장 공간을 쓰고, 연결된 저장 공간을 Steam > 설정 > 저장 공간에서 관리한다고 적습니다.

게임을 옮기는 순서는 [Steam 게임 설치 폴더 이동 안내](https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327)를 따릅니다. 이 안내는 Steam 클라이언트 전체에 쓰는 문서입니다.

1. 카드를 스팀 덱에서 포맷해 저장 공간으로 쓸 수 있게 합니다.
2. Steam > 설정 > 저장 공간을 엽니다.
3. 게임이 들어 있는 드라이브(내장 저장 공간)를 고릅니다.
4. 옮길 게임을 고르고 이동을 누릅니다.

같은 Steam 안내는 이동 기능이 게임을 지우고 다시 받지 않고도 설치 위치를 바꾼다고 설명합니다.

## 닌텐도 스위치용 카드와 무엇이 다른가요?

카드 모양은 같은 microSD지만 형식과 규격 안내가 다릅니다.

| 항목 | 스팀 덱 | 닌텐도 스위치 |
| --- | --- | --- |
| 지원 버스 | UHS-I. UHS-II 속도는 지원하지 않음 | UHS-I. UHS-II 규격은 지원하지 않음 |
| 공식 최대 용량 | 확인한 Valve 문서에 없음 | microSDXC 2TB |
| 포맷 | 스팀 덱이 ext4로 포맷 | 본체 설정에서 포맷 |
| 근거 | [Valve 안내](https://help.steampowered.com/ko/faqs/view/69E3-14AF-9764-4C28) | [닌텐도 스위치 SD 카드 사용법](/blog/ko/switch-microsd) |

스위치에서 쓰던 카드를 스팀 덱에 넣으면 스팀 덱에서 다시 포맷해야 씁니다. 포맷하면 스위치가 저장한 화면 사진과 소프트웨어 데이터가 지워집니다.

## 스팀 덱이 SD 카드를 인식하지 못하면?

아래는 Valve 안내와 일반 카드 점검을 합친 순서입니다.

1. 카드가 microSD이고 UHS-I 대응인지 확인합니다.
2. 설정 > 시스템 > SD 카드 포맷을 다시 실행합니다. 카드 자료는 지워집니다.
3. 컴퓨터에 카드를 연결해 용량이 제대로 보이는지 확인합니다.
4. 표시 용량과 실제 용량이 다르면 [가짜 SD 카드 구별법](/blog/ko/fake-sd-card)으로 점검합니다.
5. 컴퓨터에서도 읽히지 않으면 [SD 카드 포맷 안될 때](/blog/ko/sd-card-not-working)의 순서를 따릅니다.

## 아이폰 사진도 SD 카드에 옮기고 싶다면?

아이폰은 스팀 덱과 다른 형식을 씁니다. 아이폰에서 카드를 쓰려면 exFAT처럼 아이폰이 읽는 형식으로 포맷한 카드를 리더기로 연결합니다. 연결 순서는 [아이폰 마이크로 SD 쓰는 법](/blog/ko/iphone-microsd)과 [아이폰 SD 카드 리더기 사용법](/blog/ko/iphone-sd-card-reader)에 있습니다. USB 메모리로 옮기는 방법은 [아이폰 사진 USB로 옮기기](/blog/ko/iphone-photos-to-usb)에 정리했습니다.

## 스팀 덱 SD 카드 자주 묻는 질문

### 스팀 덱 SD 카드 추천은 어떤 기준으로 고르나요?

microSD, UHS-I 대응, Valve가 적은 클래스 3 이상을 기준으로 고릅니다. UHS-II 카드는 스팀 덱에서 더 빠른 속도를 내지 못합니다. 이 글은 특정 제품을 추천하지 않습니다.

### 컴퓨터에서 exFAT으로 포맷한 카드를 그대로 쓸 수 있나요?

Valve는 스팀 덱에서 쓰기 전에 카드를 포맷해야 한다고 안내합니다. 스팀 덱의 SD 카드 포맷 메뉴로 다시 포맷하세요.

### 카드를 포맷하면 내장 저장 공간의 게임도 지워지나요?

SD 카드 포맷은 카드를 대상으로 합니다. 내장 저장 공간에 설치한 게임은 카드 포맷 대상이 아닙니다. 카드에 옮긴 게임은 카드와 함께 지워집니다.

### 스팀 덱은 microSD로 부팅할 수 있나요?

[Steam Deck FAQ](https://www.steamdeck.com/ko/faq)는 microSD 부팅을 지원한다고 적습니다.

### UHS-II 카드는 못 쓰나요?

쓸 수 있을 것으로 Valve는 예상합니다. 다만 UHS-II의 더 빠른 전송 속도는 지원하지 않습니다.
