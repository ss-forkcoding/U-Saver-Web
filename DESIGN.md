# U-Saver Web 디자인 기준

- **사용자층:** 비숙련 기준. 아이폰 사진을 지키려는 일반 사용자이며 50~70대를 포함한다. 본문 16px 이상, 타깃 44px 이상, 전문용어는 풀어 쓴다.
- **북극성:** 구매 전에 무엇을 하고 무엇을 못 하는지 5초 안에 알게 한다.
- **형용사:** 단정함, 정직함, 조용함.
- **안티레퍼런스:** 보라 그라데이션 SaaS 랜딩, 3열 피처 카드, 검증 불가 통계와 후기.

## 토큰

값의 정본은 `src/app/globals.css`의 `:root`다.

## Named Rules

1. **Three Colors Rule:** `#191970`, `#58A6FF`, `#FFFFFF`만 쓴다. 투명도로 만든 중간색도 쓰지 않는다.
2. **No Horizon Text on White Rule:** Cool Horizon은 흰 배경의 글자에 쓰지 않는다(2.5:1).
3. **One Glyph Accent Rule:** Cool Horizon은 USB 아이콘과 상호작용 상태(hover·focus)에만 쓴다.
4. **Weight and Size Rule:** 위계는 크기와 굵기로 만든다. 카드와 그림자를 쓰지 않는다.
5. **Honest Scope Rule:** 앱에서 동작이 검증되지 않은 약속을 쓰지 않는다. 제외 범위와 조건을 구매 전에 보여 준다. "전체 백업"을 쓰지 않는다.
6. **No Fake CTA Rule:** 스토어 주소가 생기기 전에는 구매 버튼을 두지 않고 출시 상태를 글로 표시한다.
