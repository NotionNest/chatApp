import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Router from '@/router'
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)
app.use(Router)
app.component('svg-icon', SvgIcon)
app.mount("#app");
