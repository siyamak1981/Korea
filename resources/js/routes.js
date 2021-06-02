import Dashboard from "./views/Backend/Dashboard.vue";
//profile
import Index from "./views/Backend/Profile/Index.vue";
import Edit from "./views/Backend/Profile/Edit.vue";

//FrontEnd
import Landing from "./views/Frontend/Landing";
import Login from "./views/Frontend/Auth/Login";
import Register from "./views/Frontend/Auth/Register";
import ForgetPassword from "./views/Frontend/Auth/ForgetPassword";
import ResetPassword from "./views/Frontend/Auth/ResetPassword";

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",

    routes: [
        {
            path: "/landing",
            name: "landing",
            component: Landing,
            children: [
                {
                    name: "Login",
                    path: "/login",
                    component: Login
                },
                {
                    name: "Register",
                    path: "/register",
                    component: Register
                },
                {
                    name: "resetpassword",
                    path: "/reset-password",
                    component: ResetPassword
                },
                {
                    name: "forgetpassword",
                    path: "/forget-password",
                    component: ForgetPassword
                }
            ]
        },

        {
            name: "dashboard",
            path: "/dashboard",
            component: Dashboard,
            children: [
                {
                    name: "ProfileIndex",
                    path: "/profile-index",
                    component: Index
                },
                {
                    name: "ProfileEdit",
                    path: "/profile/:id",
                    component: Edit
                }
            ]
        }
    ]
});

export default router;
