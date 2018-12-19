import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path:'/home',
      component:resolve => require(['../components/navi/Home.vue'], resolve),
      children:[
        {
          path: '/',
          component: resolve => require(['../components/navi/Readme.vue'], resolve)
        },
        {
          path: '/navi_file',
          component: resolve => require(['../components/navi/navi_file.vue'], resolve)
        },
        {
          path: '/navi_label',
          component: resolve => require(['../components/navi/navi_label.vue'], resolve)
        },
        {
          path: '/navi_about',
          component: resolve => require(['../components/navi/navi_about.vue'], resolve)
        },


        {
          path: '/details/:id',
          component: resolve => require(['../components/details/list.vue'], resolve)
        },
      ]
    }
  ]
})
