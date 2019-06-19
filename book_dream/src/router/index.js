import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import details from '@/components/details/details'
import ranking from '@/components/ranking/ranking'
import discover from '@/components/discover/discover'
import show from '@/components/show/show'
import mypage from '@/components/mypage/mypage'
import bookcase from '@/components/bookcase/bookcase'
import bookgoods from '@/components/bookgoods/bookgoods'
import shoppingCart from '@/components/shoppingCart/shoppingCart'
import bookDetails from '@/components/bookDetails/bookDetails'
import bookDetailsMore from '@/components/bookDetailsMore/bookDetailsMore'

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
      redirect: '/index/show',
      children: [
        {
          path: 'show',
          name: 'show',
          component: show,
          redirect: 'show/details',
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
        {
          path: 'mypage',
          name: 'mypage',
          component: mypage
        },
        {
          path: 'shoppingCart',
          name: 'shoppingCart',
          component: shoppingCart
        },
        {
          path: 'bookcase',
          name: 'bookcase',
          component: bookcase,
          redirect: 'bookcase/bookgoods',
          children:[
            {
              path: 'bookgoods',
              name: 'bookgoods',
              component: bookgoods
            }
          ]
        }
      ]
    },
    {
      path: '/bookDetails',
      name: 'bookDetails',
      component: bookDetails,
      redirect: 'bookDetails/bookDetailsMore',
          children:[
            {
              path: 'bookDetailsMore',
              name: 'bookDetailsMore',
              component: bookDetailsMore
            }
          ]
    }
  ]
})
