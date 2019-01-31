import Vue from 'vue';
import Router from 'vue-router';

import ListQuestions from './components/ListQuestions.vue';
import CreateQuestions from './components/CreateQuestions.vue';
import EditQuestions from './components/EditQuestions.vue';
import ShowQuestions from './components/ShowQuestions.vue';
import Admin from './components/Admin.vue';
import Auth from './components/Auth.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListQuestions
    },
    {
      path: '/questions/create',
      name: 'questions.create',
      component: CreateQuestions,
      meta: { requiresAdmin: true }
    },
    {
      path: '/questions/:id',
      name: 'questions.show',
      component: ShowQuestions,
      meta: { requiresAuth: true }
    },
    {
      path: '/questions/:id/edit',
      name: 'questions.edit',
      component: EditQuestions,
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/login',
      name: 'login',
      component: Auth
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (!localStorage.getItem('admin')) {
      next({
        path: '/admin',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('auth')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
