import {createApp} from "vue";
import {OhVueIcon, addIcons} from "oh-vue-icons";
import router from "./router/routes";
import App from "./App.vue";
import "./style.css";

import {BiSearch, BiBag, MdArrowrightalt, CoFacebook, CoInstagram, BiTwitter, BiPinterest, FaLongArrowAltLeft, MdDisplaysettings} from "oh-vue-icons/icons";

addIcons(BiSearch, BiBag, MdArrowrightalt, CoFacebook, CoInstagram, BiTwitter, BiPinterest, FaLongArrowAltLeft, MdDisplaysettings);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
