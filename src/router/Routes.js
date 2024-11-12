import {createWebHistory, createRouter} from "vue-router";
import Home from "../components/pages/Home.vue";
import Products from "../components/pages/Products.vue";
import ProductFilters from "../components/pages/ProductFilters.vue";
import Articles from "../components/pages/Articles.vue";
import ViewArticle from "../components/pages/ViewArticle.vue";
import Item from "../components/pages/Item.vue";
import Login from "../components/pages/Login.vue";
import Verify from "../components/pages/Verify.vue";
import Profile from "../components/pages/Profile.vue";
import Cart from "../components/pages/Cart.vue";

const routes = [
  {path: "/", component: Home, meta: {title: "Home"}},
  {path: "/products", component: Products, meta: {title: "Products"}},
  {path: "/products/:slug", component: ProductFilters, meta: {title: "Products"}},
  {path: "/articles", component: Articles, meta: {title: "Articles"}},
  {path: "/articles/:slug", component: ViewArticle, meta: {title: "Articles"}},
  {path: "/items/:id", component: Item, meta: {title: "Articles"}},
  {path: "/login", component: Login, meta: {title: "Login"}},
  {path: "/verify", component: Verify, meta: {title: "Verify"}},
  {path: "/profile", component: Profile, meta: {title: "Profile"}},
  {path: "/cart", component: Cart, meta: {title: "Cart"}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Touchwood || ${to.meta.title}` || "Touchwood";
  next();
});

export default router;
