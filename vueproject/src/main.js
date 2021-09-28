import Vue from "vue";
import App from "./App.vue";
import List from "./components/ListComp.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.component("List", List);
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
