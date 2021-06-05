import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('user')
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters:{},
    modules: {
        user
    }
});
export default store;
