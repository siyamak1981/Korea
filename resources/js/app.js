window.Vue = require("vue");
import router from "./routes";
import App from "./App.vue";
import "bootstrap";

import store from "./store/index";
import Vuex from "vuex";
Vue.use(Vuex);

// sweetalert
import Swal from "sweetalert2";
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

import axios from "axios";
window.axios = axios;

axios.interceptors.request.use(
    function(config) {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.common["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
