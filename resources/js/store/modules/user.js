const state = {
    isLoggedIn: false,
    userDetails: {}
};
const getters = {
    loggedIn(state) {
        return state.isLoggedIn;
    }
};

const mutations = {
    SET_LOGGEDIN(state, payload) {
        state.isLoggedIn = payload;
    }
};
const actions = {
    login(context, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/login", payload)
                .then(response => {
                    const token = response.data.success.token;
                    localStorage.setItem("access_token", token);
                    localStorage.setItem("user", response.data.success.name);
                    context.commit("SET_LOGGEDIN", true);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    logout(context) {
        return new Promise(resolve => {
            // axios.get("/api/logout", payload);
            localStorage.removeItem("access_token");  
            localStorage.removeItem("user");  
            context.commit("SET_LOGGEDIN", false);
            resolve(true);
        });
    },
    setLoggedInState(context) {
        return new Promise((resolve) => {
            if (localStorage.getItem("access_token")) {
                context.commit('SET_LOGGEDIN', true);
                resolve(true)
            } else {
                context.commit('SET_LOGGEDIN', false);
                resolve(false)
            }
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
