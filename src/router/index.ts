import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
        title: "Login",
        hideFromNav: true
     }
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//router.beforeEach((to, from, next) => {
//    //update page title
//    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
//    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

//    if (!to.path.startsWith('/client/error')) {
//        //check current auth
//        //Promise.all([AuthModule.CheckAuth(), AuthModule.ValidateIP()])        
//        AuthModule.CheckAuth()
//            .then(() => {
//                if (!router.app.$store.state.AuthModule.loggedIn && to.name != 'Login') {
//                    next({ name: "Login" })
//                }
//                else if (!AuthModule.isAuthenticated && router.app.$store.state.AuthModule.loggedIn) {
//                    if (to.name != 'LoginPrompt')
//                        next({ name: "LoginPrompt" })
//                    else
//                        next()
//                }
//                else {
//                    //validate permission
//                    if (to.meta?.viewAuth) {
//                        const permission = router.app.$store.state.AuthModule.user.hasPermission(to.meta.viewAuth, 'View')
//                        if (permission) {
//                            next()
//                        }
//                        else {
//                            if (to.name !== '403')
//                                next({ name: '403' })
//                        }
//                    }
//                    else {
//                        if (to.name === 'Login' || to.name === 'LoginPrompt') {
//                            next({ name: "Dashboard" })
//                        }
//                        else {
//                            next()
//                        }
//                    }
//                }
//            }).catch(() => {
//                if (to.name != 'Login')
//                    next({ name: 'Login' })
//                else {
//                    next()
//                }
//            })
//    }
//    else {
//        next()
//    }
//})

export default router
