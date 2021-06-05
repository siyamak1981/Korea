import Middlewares from "./middlewares";

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
import middlewares from "./middlewares";
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
                    component: Login,
                    meta: {
                        middleware: [Middlewares.guest]
                    }
                },
                {
                    name: "Register",
                    path: "/register",
                    component: Register,
                    meta: {
                        middleware: [Middlewares.guest]
                    }
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
            meta: {
                middleware: [Middlewares.auth]
            },
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

function nextCheck(context, middleware, index) {
    const nextMiddleware = middleware[index];
    if (!nextMiddleware) return context.next;
    return (...parameters) => {
        context.next(...parameters);
        const nextMidd = nextCheck(context, middleware, index + 1);
        nextMiddleware({ ...context, next: nextMidd });
    };
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        //if meta tag exist on route do this else return next
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];
        const ctx = { from, next, router, to };
        const nextMiddleware = nextCheck(ctx, middleware, 1);
        return middleware[0]({ ...ctx, next: nextMiddleware });
    }
    return next();
});

export default router;
