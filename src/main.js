import Vue from "vue";
import App from "./App.vue";
import List from "./components/ListComp.vue";
import store from "./store";
import router from "./router";
import myplugin from "./plugins/myplugin";
import vuetify from "./plugins/vuetify";
import HighchartsVue from "highcharts-vue";

Vue.config.productionTip = false;
Vue.use(myplugin);
Vue.use(HighchartsVue);
Vue.component("List", List);
new Vue({
  router,
  render: (h) => h(App),
  vuetify,
  store,
}).$mount("#app");
