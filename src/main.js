import Vue from "vue";
import App from "./App.vue";
import List from "./components/ListComp.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("List", List);
new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
