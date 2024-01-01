import { createApp } from 'vue'
import App from './App.vue'
import myIcon from '@/common/components/MyIcon.vue'
import '@/style/globalstyle.scss'





const app = createApp(App)
app.component('myIcon', myIcon)
app.mount('#app')