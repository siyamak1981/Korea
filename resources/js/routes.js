import Dashboard from "./Backend/Dashboard.vue";
import Landing from "./Frontend/Landing";
import VueRouter from "vue-router";


const router = new VueRouter({
    mode: "history",

    routes: [
        {
            path: "/landing",
            name: "landing",
            component: Landing
        },
       
        {
            name: "dashboard",
            path: "/dashboard",
            component: Dashboard,
            // children: [
            //     {
            //         name: "home",
            //         path: "/",
            //         component: Home
            //     },
            // ]
        }
    ]
});


export default router;
