# Go Vote

**Web Published: nykim@nykim.net**

_Last Modified: 2018-08-31_

## Tree Structure

- css/
  - scss/
    - base/
    - helpers/
    - layout/
    - modules/
  - style.css
- images/
- js/
- fonts/
- html/
- index.html

---

## Markup Contents

- 전체를 #wrapper 라는 div 로 감싸고 있습니다.
- #wrapper 는 페이지 역할에 따라 고유의 클래스(예: .pollSearch)를 갖습니다.
  - .myPolls : 나의 투표함 페이지
  - .pollSearch: 투표 검색
  - _(작성중...)_
- 대부분의 페이지 구조는 .page-top 과 .page-body 로 이루어집니다.
  - .page-top: 상단 영역. 타이틀이나, 뒤로가기 버튼 또는 검색 박스 등이 위치합니다.

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
