import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import "./assets/css.css"
import "amfe-flexible"
import "./assets/font_evcjpkyiy9l/iconfont.css"

createApp(App).use(store).use(router).use(Vant).mount('#app')
