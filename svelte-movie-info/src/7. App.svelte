<!-- Reactivity(반응성) - 사용자의 액션에따라 화면이 변경되는 상태 -->
<!-- 이벤트 핸들러 사용 -->

<script>
  import Counter from "./lib/Counter.svelte";

  const data = [
    {
      title: "파묘",
      year: 2024,
      category: "미스터리, 공포",
      likeCount: 0
    },
    {
      title: "고질라 X 콩: 뉴 엠파이어",
      year: 2024,
      category: "어드벤처, 액션, SF",
      likeCount: 0
    },
    {
      title: "듄: 파트2",
      year: 2024,
      category: "액션",
      likeCount : 0
    }
  ]
  
  let likeCount = 0; // 좋아요 수를 저장할 변수
                    // 스벨트는 일반 변수도 상태 변수이다. 
                    // 리액트나 뷰처럼 따로 상태관리 해주지 않아도된다.
  const handleLike = (i) => {
    data[i].likeCount += 1;
  }
</script>

<main>
  <h1>영화정보</h1>
    {#each data as movie, i}
    <div>
      <h3 class="bg-yellow">{movie.title}</h3>
      <p>개봉: {movie.year}</p>
      <p>장르: {movie.category}</p>
      <button on:click={()=>{handleLike(i)}}>좋아요 {data[i].likeCount}</button>
      <!-- <요소명 on:이벤트명={실행코드}> -->
    </div>
  {/each}
</main>

<style>
  .bg-yellow {
    background: gold;
    padding: 10px;
    color: #333;
  }
</style>
