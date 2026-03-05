<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import news from '../../assets/news';
</script>

<Header />
<main  class="container">
  <h2>비보이 브라더스 활동</h2>
  <div class="news">
    {#each news as item}
      <a class="news-item" href={'/#/detail/' + item.id}>
        <img src={item.imgUrl} alt={item.title}>
        <div class="item-text">
          <h3>{item.title}</h3>
          <p class="date">{item.date}</p>
          <div class="hashtag">
            {#each item.hashtag as tag}
              <span>#{tag}</span>&nbsp;
            {/each}
          </div>
        </div>
      </a>
    {/each}
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
    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .container {
    background: #fff;
  }
</style>