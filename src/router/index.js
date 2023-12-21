import { createWebHistory, createRouter } from "vue-router";
//! la ƒ° createWebHistory
//* très commun dans les app SPA (web-mobile-etc...)
//* Permet de créer un historique de navigation (VUE sait tjrs d'ou vous venez)
//* Exemple  : les boutons précèdent dans les app Mobile
// ! la ƒ° createRouter 
//* permet à VUE d'instancier une nouvelle instance router
const routes =  [
    {
        path: "/",
        alias: "/home",
        name: "Home",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/feed",
        name: "Feed",
        component: () => import("../views/Feed.vue")
    },
    {
        path: "/:patchMatch(.*)",
        name: "NotFound",
        component: () => import("../views/NotFound.vue")
    },
    {
        path: "/admin",
        name: "Admin",
        component: () => import("../views/Admin.vue")
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue")
    },
    { 
        path: "/sign-in",
        name:"SignIn",
        component: () => import("../views/SignIn.vue") 
    }
    ];
    
    const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
    export default router;