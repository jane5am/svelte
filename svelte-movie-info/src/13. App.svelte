<script>
import data  from './lib/movies'; 
import Navbar from './lib/components/Navarbar.svelte';
import Modal from './lib/components/Modal.svelte';

  const handleLike = (i) => {
    data[i].likeCount += 1;
  }
  
  let isModal = false; 
  let selectedMovie = 0;
  
  const closeModal = () => {
    isModal = false;
  }
</script>

<Navbar />
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
        <button 
          on:click={()=>{
            isModal = true; 
            selectedMovie = i;
            console.log('Selected movie: ' , data[i]);
          }} 
          class="btn btn-primary"
        >상세보기</button>
      </div>
    </div>
  {/each}
</main>

<!-- props : 요소에 속성을 정의하여 값을 전달화는 방식 
      <요소명 props이름 = {전달값 | 변수명} -->

{#if isModal}
  <Modal 
    data={data} 
    selectedMovie={selectedMovie} 
    // bind:isModal={isModal} //  bind : 양방향으로 사용할 수 있는 방식 
                           // 여러 컴포넌트가 공유하는 데이터는 이 방식 위험!!! 
    {closeModal} // 축약형
  />
{/if}

<style>
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
