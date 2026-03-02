import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

// 스벨트의 모든 코드는 컴포넌트 단위로 제작된다 그 시발점이 App
const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
