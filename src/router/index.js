import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import Info from '@/pages/info/Info'
import Emoji from '@/pages/detail/components/Emoji'
import Login from '@/pages/login/Login'
import Regist from '@/pages/regist/Regist'
import Add from '@/pages/add/Add'
import Search from '@/pages/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:index',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/info/:id',
      name: 'Info',
      component: Info
    },
    {
      path: '/emoji',
      name: 'Emoji',
      component: Emoji
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
