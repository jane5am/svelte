<!-- 다른 프레임워크와 마찬가지로 스벨트에서도 애플리케이션은 하나 이상의 컴포넌트로 구성된다. -->
<!-- 스벨트의 확장자는 .svelte이다 -->
<script>
  import logo1 from './assets/svelte.svg'; /* 1. 임포트문으로 이미지 가져오기 */
                                         /* 이 방식은 이미지의 경로가 상대적으로 지정이 되고 나중에 번들에 포함되어 최적화되며 경로도 변경된다 */
  let logo2 = '/vite.svg';
  let textRed = "color: red;" /* 인라인 스타일 CSS*/
  
  const data = [
    {
      title: "파묘",
      year: 2024,
      category: "미스터리, 공포"
    },
    {
      title: "고질라 X 콩: 뉴 엠파이어",
      year: 2024,
      category: "어드벤처, 액션, SF"
    },
    {
      title: "듄: 파트2",
      year: 2024,
      category: "액션"
    }
  ]
  
  const foods = ['pizza', 'burger', 'chobap', 'pasta'];
</script>

<main>
<!-- 반복문 : #each 배열명 as 변수명 
      매개변수 하나 가능, 이건 배열 번호
-->
  {#each foods as food, i}
    <p>{i} : {food}</p>
  {/each}
  <h1>영화정보</h1>
  <img src={logo1} alt="">
  <img src="/vite.svg" alt=""> <!--2. 퍼블릭 경로-->
                                <!-- 경로가 변경되지 않고 문서의 기본 경로를 통해 불러오는 방식 -->
  <img src={logo2} alt=""> <!-- 이렇게 변수로 만들어서 넣는것도 가능-->
    {#each data as movie}
    <div>
      <h3 class="bg-yellow" style={textRed}>{movie.title}</h3>
      <p>개봉: {movie.year}</p>
      <p>장르: {movie.category}</p>
    </div>
  {/each}
</main>

<style>
  .bg-yellow {  /* 클래스로 정의한 CSS */
    background: gold;
    padding: 10px;
  }
</style>
