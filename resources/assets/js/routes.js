import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import TopNews from './components/news/top.vue';

let routes = [
	{
    path: '/top',
    name: 'newstop.index',
    component: TopNews,
    props: true
  },
];

export default new VueRouter({
  mode: 'history',
  routes: routes
});
