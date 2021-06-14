import store from "../store";


export default (permission) => {

    const userPermissions =store.getters["user/userDetails"]

    if(permission.length > 0){
        return userPermissions.includes(permission)
    }
};
