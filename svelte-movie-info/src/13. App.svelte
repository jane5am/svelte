<script>
  import data  from './lib/movies'; 
  import Navbar from './lib/components/Navarbar.svelte';
  import Modal from './lib/components/Modal.svelte';
  import Movies from './lib/components/Movies.svelte';
  import Event from './lib/components/Event.svelte';
  import SearchBar from './lib/components/SearchBar.svelte';
  
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

<!-- <div class={isEvent ? 'event show' : 'event'}> class 명을 동적으로 사용 -->
  {#if isEvent}
    <Event {closeEvent} />
  {/if}
  <SearchBar {data} />
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