import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue")
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
