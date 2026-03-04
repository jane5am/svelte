<script>
  import { onDestroy, onMount } from 'svelte';
  import data  from './lib/movies'; 
  import Navbar from './lib/components/Navarbar.svelte';
  import Modal from './lib/components/Modal.svelte';
  import Movies from './lib/components/Movies.svelte';
  import Event from './lib/components/Event.svelte';
  import SearchBar from './lib/components/SearchBar.svelte';
  
  const eventText = [
    "영화 정보 업데이트",
    "신규 영화 추가",
    "이벤트 진행중"
  ]
  // data 사본 추가
  let data_temp = [...data]; // 복사본
                              // 그냥 data로 넣으면 같은 참조주소를 보고 있어서 복사가 안됨
  
  const handleLike = (id) => {
    // data[i].likeCount += 1;
    
    // 원본 data에서 id에 해당하는 like를 1 증가
    data.map(movie => {
      if (movie.id === id){
        movie.likeCount += 1;
      }
    });
    
    //data_temp = [...data];
    // data_temp 있는 내용만 필터링해서 복사
    data_temp = data.filter(movie =>{
      return data_temp.includes(movie);
    })
  };
  
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
  
  let alertText = "";
  let eventIndex = 0; // 이벤트 텍스트 인덱스
  let intervalEventText;
  
  // 1. 라이프 사이클 사용하는 방법
  // onMount(()=>{
  //   // 일정 시간 경과 후 eventIndex를 1 증가
  //   intervalEventText = setInterval(()=>{
  //     eventIndex += 1;
  //     if(eventIndex >= eventText.length){
  //       eventIndex = 0;
  //     }
  //   }, 3000)
  // });
  
  // onDestroy(()=>{
  //   // 이벤트 인터벌 제거
  //   clearInterval(intervalEventText);
  // })
  
  // 2. $: 사용하는 방법
  $: {
     // 이벤트 인터벌 제거
    clearInterval(intervalEventText);
     // 일정 시간 경과 후 eventIndex를 1 증가
    intervalEventText = setInterval(()=>{
      eventIndex += 1;
      if(eventIndex >= eventText.length){
        eventIndex = 0;
      }
    }, 3000)
  }
</script>

  <Navbar />

<!-- <div class={isEvent ? 'event show' : 'event'}> class 명을 동적으로 사용 -->
  {#if isEvent}
    <Event {closeEvent} {eventText} {eventIndex}/>
  {/if}
  <SearchBar {data} bind:data_temp bind:alertText/>
  <!-- 전체 보기 버튼 추가 -->
  <div class="container">
    <button on:click={()=>{
        data_temp = [...data]; // 데이터 복사본으로 초기화
        alertText = "";
      }}>전체보기
    </button>
  </div>
  
  <Movies 
    {data_temp} 
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
  .container {
    text-align: center;
  }
</style>