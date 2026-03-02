<!-- Reactivity(반응성) - 사용자의 액션에따라 화면이 변경되는 상태 -->
<!-- 이벤트 핸들러 사용 -->

<script>
  const data = [
    {
      title: "파묘",
      year: 2024,
      category: "미스터리, 공포",
      likeCount: 0,
      imgUrl: '/images/파묘.jpg'
    },
    {
      title: "고질라 X 콩: 뉴 엠파이어",
      year: 2024,
      category: "어드벤처, 액션, SF",
      likeCount: 0,
      imgUrl: '/images/고질라X콩.jpg'

    },
    {
      title: "듄: 파트2",
      year: 2024,
      category: "액션",
      likeCount : 0,
      imgUrl: '/images/듄-파트2.jpg'
    }
  ]
  
  let likeCount = 0; // 좋아요 수를 저장할 변수
                    // 스벨트는 일반 변수도 상태 변수이다. 
                    // 리액트나 뷰처럼 따로 상태관리 해주지 않아도된다.
  const handleLike = (i) => {
    data[i].likeCount += 1;
  }
</script>

<main class="container">
  <h1>영화정보</h1>
    {#each data as movie, i}
    <div class="item">
      <figure>
        <img src={movie.imgUrl} alt={movie.title}>
      </figure>
      <div class="info">
        <h3 class="bg-yellow">{movie.title}</h3>
        <p>개봉: {movie.year}</p>
        <p>장르: {movie.category}</p>
        <button on:click={()=>{handleLike(i)}}>좋아요 {data[i].likeCount}</button>
      </div>
    </div>
  {/each}
</main>

<style>
/* 지역 스타일 - 해당 컴포넌트에 반영되는 스타일 */
/* 전역 스타일은 app.css에 넣기 */
.bg-yellow {
    background: gold;
    padding: 10px;
    color: #333;
  }

  .item {
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
    margin-bottom: 20px;
    padding: 1rem;
  }

  .item figure {
    width: 30%;
    margin-right: 1rem;
  }

  .item img {
    width: 100%;
  }

  .item .info {
    width: 100%;
  }
</style>
