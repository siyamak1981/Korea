// import can from "../helpers/can";


// export default function checkPermissions({ next, to, from, router }) {
    
//     console.log({to, from});
//     const requiredPermissions = to.meta['middleware'];
//     console.log(requiredPermissions);
//     let canEnter = false;
//     requiredPermissions.forEach(permission => {
//         if (can(permission)) {
//             canEnter = true;
//         }
//     });
//     if (canEnter) {
//         return next();
//     }

//     return router.push({ name: "home" });
// }
