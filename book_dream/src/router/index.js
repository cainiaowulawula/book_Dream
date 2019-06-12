import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import details from '@/components/details/details'
import ranking from '@/components/ranking/ranking'
import discover from '@/components/discover/discover'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect: 'index/details',
      children: [
        {
          path: 'details',
          name: 'details',
          components: {
            details: details,
            ranking: ranking,
            discover: discover
          }
        }
      ]
    },
  ]
})
