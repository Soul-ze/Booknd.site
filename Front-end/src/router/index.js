import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CatList from '@/components/CatList'
import CommentList from '@/components/CommentList'
import SessionList from '@/components/SessionList'
import OrderList from '@/components/OrderList'
import SellList from '@/components/SellList'
import Puton from '@/components/Puton'
import HistoryList from '@/components/HistoryList'
import WantList from '@/components/WantList'
import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search/:name',
      name: 'CatList',
      component: CatList
    },
    {
      path: '/cat/:catID',
      name: 'Cat',
      component: CatList
    },
    {
      path: '/comment',
      name: 'CommentList',
      component: CommentList
    },
    {
      path: '/session',
      name: 'SessionList',
      component: SessionList
    },
    {
      path: '/order',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/sell',
      name: 'SellList',
      component: SellList
    },
    {
      path: '/puton',
      name: 'Puton',
      component: Puton
    },
    {
      path: '/history',
      name: 'HistoryList',
      component: HistoryList
    },
    {
      path: '/want',
      name: 'WantList',
      component: WantList
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
