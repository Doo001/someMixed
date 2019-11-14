// import "element-ui/lib/theme-chalk/index.css"; // 字体icon 勿删
import Vue from "vue";
// import nutMgt from "@beexiao/nut-mgt";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/api";
// import axios from "axios";
import VueAxios from "vue-axios";

// import "@/assets/styles/main.css";
// import "@/assets/styles/font-icon/iconfont.css";
// import "../my-theme/index.less";
/** monitor **/

// Vue.use(nutMgt);
Vue.use(VueAxios, axios);   //2
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
