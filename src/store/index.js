import Vue from "vue";
import Vuex from "vuex";
import App from "../App.vue";

Vue.use(Vuex);

import users from "./users";

export default new Vuex.Store({
  modules: {
    users,
    App,
  },
});
