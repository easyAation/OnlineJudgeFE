import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProblemList from '@/components/problem/ProblemList'
import Problem from '@/components/problem/Problem'
import ContestList from '@/components/contest/ContestList'
import Contest from '@/components/contest/Contest'
import Status from '@/components/Status'
import ACRank from '@/components/rank/ACRank'
import AchievementRank from '@/components/rank/AchievementRank'
import ContestProblemList from '@/components/contest/children/ContestProblemList'
import ContestStatus from '@/components/contest/children/ContestStatus'
import ContestProblem from '@/components/contest/children/Contestproblem'
import ContestRank from '@/components/contest/children/ContestRank'

Vue.use(Router);

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
    },
    {
      path: '/contest-list',
      name: 'ContestList',
      component: ContestList
    },
    {
      path: '/contest/:id',
      name: 'Contest',
      component: Contest,
      children: [
        {
          path: '',
          name: 'ContestProblemList',
          component: ContestProblemList
        },
        {
          path: 'problem-list',
          name: 'ContestProblemList',
          component: ContestProblemList
        },
        {
          path: 'problem/:id',
          name: 'ContestProblem',
          component: ContestProblem
        },
        {
          path: 'status',
          name: 'ContestStatus',
          component: ContestStatus
        },
        {
          path: 'rank',
          name: 'ContestRank',
          component: ContestRank
        }
      ]
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/ac-rank',
      name: 'ACRank',
      component: ACRank
    },
    {
      path: '/achievement-rank',
      name: 'Achievement',
      component: AchievementRank
    }
  ]
})
