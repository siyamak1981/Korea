window.Vue = require("vue");
import router from "./routes";
import Index from "./Index";


import VueRouter from "vue-router";
Vue.use(VueRouter);

import Vue from "vue";




const app = new Vue({
    el: "#app",
    router,
    mode: history,
    components: {
        Index: Index
    },
   
});
