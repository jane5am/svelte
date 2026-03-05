<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import news from '../../assets/news';
</script>

<Header />
<main  class="container">
  <h2>비보이 브라더스 활동</h2>
  <div class="news">
    <div class="news-item">
      <img src={news[0].imgUrl} alt={news[0].title}>
      <div class="item-text">
        <h3>{news[0].title}</h3>
        <p class="date">{news[0].date}</p>
        <div class="hashtag">
          <span>#{news[0].hashtag[0]}</span>
          <span>#{news[0].hashtag[1]}</span>
          <span>#{news[0].hashtag[2]}</span>
        </div>
      </div>
    </div>
  </div>
</main>
<Footer />

<style lang="scss">
  .news {
    display: flex;
    gap: 20px;
    .item-text { padding: 20px; }
    .news-item {
      width: calc(100% / 3);
      img {
        width: 100%;
      }
      box-shadow: 4px 4px 10px rgba(0,0,0,0.2);
    }
    h3 { margin-bottom: 10px;}
    p { margin-bottom: 4px;}
    .date, .hashtag {
      font-size: 15px;
      color: #666;
    }
  }

  .container {
    background: #fff;
  }
</style>