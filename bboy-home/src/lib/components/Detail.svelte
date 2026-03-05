<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  // news 데이터 가져오는 함수
  import { getNews } from '../../assets/news';
  // params 가져오기(props로 전달)
  export let params = {}; // 객체로 받는다.
                          // url로 받는 변수는 자료형이 문자다. 그래서 지금 getNews에 파라미터로 숫자를 보내면 === 같지않음
  console.log(params);
  console.log(getNews(Number(params.id)));
  let news = getNews(Number(params.id));
</script>

<Header />
<main  class="container">
  <div class="main-header">
    <h2>{news.title}</h2>
    <p class="date">{news.date}</p>
    <img src={news.imgUrl} alt={news.title}/>
  </div>
  <article>
    {@html news.desc}
  </article>
</main>
<Footer />

<style lang="scss">
  .main-header {
    h2 {margin-bottom: 10px;}
    .date {
      margin-bottom: 20px;
      font-size: 15px;
      color: #666;    
    }
  }
  
  article { margin-top: 50px; }
  
  .container {
    background: #fff;
  }
</style>