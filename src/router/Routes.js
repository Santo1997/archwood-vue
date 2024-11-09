import {createWebHistory, createRouter} from "vue-router";
import Home from "../components/pages/Home.vue";

const routes = [{path: "/", component: Home, meta: {title: "Home"}}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Touchwood || ${to.meta.title}` || "Touchwood";
  next();
});

export default router;
