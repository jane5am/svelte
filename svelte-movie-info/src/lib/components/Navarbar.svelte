<!-- 컴포넌트의 확장자는 '컴포넌트명.svelte' 
    파일명 첫글자는 대문자로 해야한다 (암묵적 규약)-->
    
<nav>
  <a href="#">home</a>
  <a href="#">movies</a>
  <a href="#">about</a>
</nav>

<style>
  nav {
    background: #333;
    padding: 20px;
    text-align: center;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    text-transform: capitalize;
  }
</style>