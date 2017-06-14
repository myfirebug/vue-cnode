import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Topic from '../views/Topic.vue'
import Details from '../views/Details.vue'
import Login from '../views/Login.vue'
import Messages from '../views/Messages.vue'
import Creat from '../views/Creat.vue'
import Error from '../views/Error.vue'
import My from '../views/My.vue'

export default new VueRouter({
     mode:'history',
	routes:[
		{
          path: '/topics/:tab',
          name:'topics',
          component: Topic
		},
		{
          path: '/topics/:topicId',
          name:'details',
          component: Details
		},
		{
          path: '/login',
          name:'login',
          component: Login
		},
		{
          path: '/messages/:accesstoken',
          name:'messages',
          component: Messages
		},
		{
          path: '/my',
          name:'my',
          component: My
		},
		{
          path: '/creat',
          name:'creat',
          component: Creat
		},
		{
          path: '/error',
          name:'error',
          component: Error
		},
		{
          path: '*',
          component: Error
		},


	]
});

