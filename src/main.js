import Vue from 'vue';
import router from './router';
import App from './App.vue';

import './sass/main.scss';

new Vue({
  el: 'app',
  router,
  created: function() {
    console.log('root instance was created');
  },
  components: { App }
});
