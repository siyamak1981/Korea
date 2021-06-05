window.Vue = require("vue");
import router from "./routes";
import App from "./App.vue";
import "bootstrap";

import store from "./store/index";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "axios";
window.axios = axios;



// sweetalert
import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});
window.Toast = Toast;



new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
