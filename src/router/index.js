import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Manage from '../views/Manage.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import AddUser from '../views/AddUser.vue'
import Edit from '../components/Edit.vue'
import { app as firebaseApp } from "../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    props:true
  },
  {
    path: '/add',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    meta: { requiresAuth: true }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        alert('You must be logged to manage employee');
      next({
        path: '/',
      });
      }
    });
  } else {
    next();
  }
});

export default router
