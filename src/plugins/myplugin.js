export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    Vue.prototype.$keks = {
      EventBus: new Vue(),

      toShowMenu(id) {
        this.EventBus.$emit("toShowMenu", id); //после запятой передается параметр
      },
      toShowEdition() {
        this.EventBus.$emit("toShowEdition");
      },
      toApplyEdition() {
        this.EventBus.$emit("toApplyEdition");
      },
      toDeleteUser() {
        this.EventBus.$emit("toDeleteUser");
      },
    };
  },
};
