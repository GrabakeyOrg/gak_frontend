import './app.css'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
