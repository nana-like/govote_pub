# [ BlockChain Campus & Go Vote ] WebApp

- **Web Published: nykim@nykim.net**
- **저장소 주소: [https://github.com/AnnYKim/govote_pub/tree/Update_10-12](https://github.com/AnnYKim/govote_pub/tree/Update_10-12)**
- _Last Modified: 2018-10-12_

---

## Tree Structure

- css/
  - style.css
  - style_bc.css
- images/
  - goVote/
  - bc/
- js/
  - library/
  - goVote.js
  - bc.js
- fonts/
- html_goVote/
- html_bc/
- index.html

* 폰트 파일은 공용입니다.
  > 18-09-28 : font weight 중 black 과 thin 은 사용하지 않음을 확인받았습니다.
* 투표앱 전용: style.css, images/goVote/, js/goVote.js, html_goVote/
* 블록체인 캠퍼스 전용: style_bc.css, images/bc/, js/bc.js, html_bc/

* 18-10-12 : 상단바를 추가했습니다. 마크업은 다음과 같습니다.
  또한 .page-header 가 있으면 바로 다음에 .page-body 가 와야합니다.
  상단바가 필요한 페이지인데 퍼블리싱에 없다면 #wrapper 바로 아래와 같이 추가해주세요.

1. 타이틀만 있음

```
  <header class="page-header">
    <h1 class="page-title">{타이틀}</h1>
  </header>
```

2. 타이틀 + 닫기 버튼

```
  <header class="page-header">
    <div class="page-header-left">
      <button class="button-close"></button>
    </div>
    <h1 class="page-title">{타이틀}</h1>
  </header>
```

3. 타이틀 + 뒤로가기 버튼

```
  <header class="page-header">
    <div class="page-header-left">
      <button class="button-back"></button>
    </div>
    <h1 class="page-title">{타이틀}</h1>
  </header>
```
