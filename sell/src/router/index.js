import Vue from 'vue'
import Router from 'vue-router'
import goods from '.././components/goods/goods'
import ratings from '.././components/ratings/ratings'
import seller from '.././components/seller/seller'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',

  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/',
      redirect: '/goods'
    }

  ]
})