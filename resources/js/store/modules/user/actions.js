import { reject } from "lodash";

export default  {
    register: function(context, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post(`./api/register`, payload)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },

    login(context, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/login", payload)
                .then(response => {
                    const token = response.data.success.token;
                    if (token) {
                        localStorage.setItem("access_token", token);
                        localStorage.setItem(
                            "user",
                            response.data.success.name
                        );
                        context.commit("SET_LOGGEDIN", true);
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    logout(context) {
        return new Promise(resolve => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("user");
            context.commit("SET_LOGGEDIN", false);
            resolve(true);
        });
    },
    setLoggedInState(context) {
        return new Promise(resolve => {
            if (localStorage.getItem("access_token")) {
                context.commit("SET_LOGGEDIN", true);
                resolve(true);
            } else {
                context.commit("SET_LOGGEDIN", false);
                resolve(false);
            }
        });
    },
    forgotPassword(context, payload) {
        return new Promise(resolve => {
            axios
                .post("/api/forget-password", payload)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    sendResetPassword(context, payload) {
        return new Promise(resolve => {
            axios
                .post("/api/reset-password", payload)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },


    me(context){

        return new Promise((resolve, reject)=>{
            axios.get('/api/me')
            .then((response)=>{
                context.commit('SET_USER_DETAILS', response.data)
                console.log(response)
            })
            resolve(response)
        })
        .catch((error)=>{
            reject(error)
        })
    }
}
