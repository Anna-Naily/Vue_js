import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Main",
  },
  {
    path: "*",
    name: "404",
    component: () => import("../components/404"),
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("../components/PaymentFormComp"),
  },
  {
    path: "/form?category=category?value=value",
    name: "Form2",
    component: () => import("../components/PaymentFormComp"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
