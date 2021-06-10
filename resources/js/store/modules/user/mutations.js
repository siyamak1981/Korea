export default {
    SET_LOGGEDIN(state, payload) {
        state.isLoggedIn = payload;
    },
    
    SET_USER_DETAILS(state,payload){
        state.userDetails = payload
    }
};