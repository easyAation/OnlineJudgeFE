import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProblemList from '@/components/problem/ProblemList'
import Problem from '@/components/problem/Problem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/problem-list',
      name: 'ProblemList',
      component: ProblemList
    },
    {
      path: '/problem/:id',
      name: 'Problem',
      component: Problem
    }
  ]
})
