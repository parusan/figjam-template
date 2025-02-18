import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import './assets/style.css'

const app = createApp(App)
const pinia = createPinia()



//Setup router
const routes = [
    // {
    //   path: '/auth',
    //   component: () => import('./layouts/Auth.vue'), // Top-level layout
    //   children: [
    //     { path: '/auth/sign-in', component: SignIn, name: 'signin', meta: { requiresAuth: false }},
    //      {path: '/auth/sign-up', component: SignUp, name: 'signup', meta: { requiresAuth: false },}
    //   ]
    // },
    {
        path: '/app',
        component: () => import('./layouts/Main.vue'), // Top-level layout
        children: []
    },
    {
        path: '/',
        redirect: '/app'
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: '/app'
      },
    ]

    const router = createRouter({
        history: createMemoryHistory(),
        routes,
      })


app.use(pinia)
app.use(router)
app.mount('#app')