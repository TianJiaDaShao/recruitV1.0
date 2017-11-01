import "../styles/usage/page/app.scss";
import commonUtil from "./utils/commonUtils";
commonUtil.initwx();
//引入路由js文件
import route from './utils/route.js'

let router = new VueRouter();

import store from "./vuex/store";
let App = Vue.extend({
  store: store
});
Vue.config.devtools = true

router.map(route);

router.start(App, 'body');
