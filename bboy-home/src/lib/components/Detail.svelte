<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<Header />
<main  class="container">
  <div class="main-header">
    <h2>서울 비보이 페스티벌</h2>
    <p class="date">2022-10-11</p>
    <img src="images/detail_img01.jpg" alt=""/>
  </div>
  <article>
    <p>올해 2회차인 2024 서울비보이페스티벌은 초여름 한강을 배경으로 펼쳐지는 열정적인 브레이킹 문화를 온몸으로 체험할 수 있는 축제입니다.
      
      지난 10년간 ‘서울시 대표 비보이단’ 공연과 교육, 작품제작으로 브레이킹 문화를 지원해 온 서울문화재단과 함께 2022년부터 페스티벌을 통해 스트리트 문화의 자유로움과 힘찬 에너지를 시민들에게 전달하고 있습니다. 국내 및 해외 우수한 힙합 아티스트들의 멋진 공연과 뜨거운 배틀의 열기, 다채로운 즐길거리가 마련되어 있습니다.</p>
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