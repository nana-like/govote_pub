# Go Vote

**Web Published: nykim@nykim.net**

_Last Modified: 2018-08-27_

## Tree Structure

- css/
  - scss/
    - base/
      - common.scss
      - reset.scss
      - font.scss
      - icon.scss
      - svg.scss
    - helpers/
      - animations.scss
      - mediaQueries.scss
      - mixins.scss
      - variables.scss
    - layout/
      - login.scss
    - modules/
      - tab.scss
      - input.scss
      - button.scss
    - style.scss
  - style.css
- images/
- js/
- fonts/
- html/

---

## Markup Contents

- 전체를 #wrapper 라는 div 로 감싸고 있습니다.
- #wrapper 는 페이지 역할에 따라 고유의 클래스(예: .login)를 갖습니다.
  - .myPolls: 나의 투표함 페이지
  - _(작성중...)_
- 대부분의 페이지 구조는 .page-top 과 .page-body 로 이루어집니다.
  - .page-top: 상단 영역. 타이틀이나, 뒤로가기 버튼 또는 검색 박스 등이 위치합니다.

1. myPolls

- poll-list-item 은 투표 종류에 따라 다음의 추가적인 클래스를 갖습니다.
  - poll-upcoming: 참여 가능하지만 아직 시작하지 않은 투표
  - poll-inactive: 참여 불가능한 투표
  - poll-active: 참여 가능한 투표
  - poll-complete: 참여 완료한 투표
  - poll-over: 종료한 투표

---

## Style Name

### prefix class name

### toggle class name

- active: 활성화 처리된 요소

---

## CSS Guide

### 1.fonts

- 기본 폰트는 '본고딕'을 사용하며, /\_font.scss 에서 정의합니다.
  - normal
  - bold

### 2.variables

- \_variables.scss 에서 정의하고 있는 변수는 다음과 같습니다.
  - layout
  - z-idnex
  - path
  - font-weight

### 3.common style

- 공통으로 사용하는 스타일은 modules/ 폴더 내 개별 scss 에서 정의합니다.
- _(작성중...)_

  1.  **Button**

  - button-style01 : 양옆이 둥그런 파란색 버튼
  - button-style02 : btn-style01 과 동일하되, active 클래스가 붙지 않으면 회색 //삭제예정
  - button-style03 : 링크처럼 생긴 버튼 (예: 회원가입)

  2.  **Input**

  - input-style01 : 연한 배경 인풋
  - input-style02 : input-style01 과 동일하되, 플레이스홀더 색이 좀 더 진함 (로그인 화면에서 사용)

  3.  **Select**

  - 셀렉트의 경우, ui 만 input 으로 표시하며 유저가 터치 시 별도로 드롭 박스를 보여줍니다. (미확정)

  * select-style01 : input-style01 과 동일
  * select-style02: input-style02 와 동일

  4.  **Radio**

  - radio-type01 : 모서리가 살짝 둥근 라디오
