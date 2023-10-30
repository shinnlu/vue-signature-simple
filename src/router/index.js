import { createRouter, createWebHashHistory, onBeforeRouteLeave } from 'vue-router'
import layout from "@/pages/layout.vue"
import index from "@/pages/index.vue"
import api from "@/pages/document.vue"
import donate from '@/pages/donate.vue'
const title = 'Vue-Signature-Simple'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
	/*{
		path: '/',
		name: 'index',
		component: layout
	},*/
	{
		path: '/',
		name: 'index',
		component: index
	},
	{
		path: '/api',
		name: 'api',
		component: api
	},
	{
		path: '/donate',
		name: 'donate',
		component: donate
	}
  ],
  onBeforeRouteLeave(to, from, next) {
	const answer = window.confirm('quit?')
	if(!answer) return false;
	// if (this.count > 0) {
	//   next(false);
	// } else {
	  next();
	// }
  }
});

export default router