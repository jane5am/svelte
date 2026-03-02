<!-- 다른 프레임워크와 마찬가지로 스벨트에서도 애플리케이션은 하나 이상의 컴포넌트로 구성된다. -->
<!-- 스벨트의 확장자는 .svelte이다 -->
<script>
  import logo1 from './assets/svelte.svg'; /* 1. 임포트문으로 이미지 가져오기 */
                                         /* 이 방식은 이미지의 경로가 상대적으로 지정이 되고 나중에 번들에 포함되어 최적화되며 경로도 변경된다 */
  let logo2 = '/vite.svg';
  let title = "영화제목 1";
  let year = 2024;
  let category = "액션";
  
  let textRed = "color: red;" /* 인라인 스타일 CSS*/
</script>

<main>
  <h1>영화정보</h1>
  <img src={logo1} alt="">
  <img src="/vite.svg" alt=""> <!--2. 퍼블릭 경로-->
                                <!-- 경로가 변경되지 않고 문서의 기본 경로를 통해 불러오는 방식 -->
  <img src={logo2} alt=""> <!-- 이렇게 변수로 만들어서 넣는것도 가능-->
  <div>
    <p3 class="bg-yellow" style={textRed}>{title}</p3> <!-- 변수를 테이블에 표시할대는 중괄호{}를 사용한다. -->
    <p>개봉: {year}</p>
    <p>장르: {category}</p>
    <p>{"hello".toUpperCase()}</p> <!-- 중괄호에는 자바스크립트 문법도 가능하다. -->
  </div>
</main>

<style>
  .bg-yellow {  /* 클래스로 정의한 CSS */
    background: gold;
    padding: 10px;
  }
</style>
