<script>
import data  from './lib/movies'; 
import Navbar from './lib/components/Navarbar.svelte';
import Modal from './lib/components/Modal.svelte';
import Movies from './lib/components/Movies.svelte';

  const handleLike = (i) => {
    data[i].likeCount += 1;
  }
  
  let isModal = false; 
  let selectedMovie = 0;
  
  const closeModal = () => {
    isModal = false;
  }
  
  const handleMovieNumber = (i) => {
    selectedMovie = 1;
  }
  
  let isEvent = true; // 이벤트창 표시 여부
  
  const closeEvent = () => {
    isEvent = false;
  }
</script>

<Navbar />
<div class={isEvent ? 'event show' : 'event'}> <!-- class 명을 동적으로 사용 -->
  <p>NETPLIX 강렬한 운명의 드라마, 경기크리처</p>
  <button on:click={closeEvent} >X</button>
</div>
<Movies 
  {data} 
  bind:isModal 
  {handleMovieNumber}
  {handleLike}
/>

<!-- props : 요소에 속성을 정의하여 값을 전달화는 방식 
      <요소명 props이름 = {전달값 | 변수명} 
      기본적으로 props로 전달하는 값은 자식측에서 변경이 안됨(단방향 전달)-->

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
  .event {
    width: 100%;
    background: #666;
    padding: 5px 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    text-align: center;
    margin-bottom: 1em;
    padding: 10px 20px;

    /* 창이 보이지 않게 */
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.4s;
  }

  /* 기본: 창이 보이게 */
  .show {
    opacity: 1;
    max-height: 100px;
  }

  .event button {
    padding: 2px;
  }

  .event p, .event button {
    margin: 0;
  }
  .event p {
    width: 100%;
  }
</style>
