import {createApp} from "vue";
import {OhVueIcon, addIcons} from "oh-vue-icons";
import App from "./App.vue";
import "./style.css";

import {BiSearch, BiBag, MdArrowrightalt} from "oh-vue-icons/icons";

addIcons(BiSearch, BiBag, MdArrowrightalt);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
