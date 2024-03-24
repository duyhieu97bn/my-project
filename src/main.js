import { createApp } from 'vue'
import App from './App.vue'
import myIcon from '@/common/components/MyIcon.vue'
import '@/style/globalstyle.scss'
import infinitesScroll from './directives/infinitesScroll'



console.log(infinitesScroll);
const app = createApp(App)
app.directive("infinitesScroll", infinitesScroll)
app.component('myIcon', myIcon)
app.mount('#app')