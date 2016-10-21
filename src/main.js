import Vue from 'vue'
import App from './App'
var VueRouter=require("vue-router");
var RouterConfig=require("./config")
//console.log(VueRouter)

/* eslint-disable no-new */
Vue.use(VueRouter);
var router=new VueRouter();
//console.log(router);
RouterConfig(router);
router.start(App,"#apps")
new Vue({
  el: 'body',
  components: { App }
})
