<script>
  import Router, {location, link} from 'svelte-spa-router';
  import Home from "./lib/components/Home.svelte";
  import About from "./lib/components/About.svelte";
  import News from './lib/components/News.svelte';
</script>

<Router routes={{
  '/': Home,
  '/about': About,
  '/news': News
}} />