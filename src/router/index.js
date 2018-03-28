import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProblemList from '@/components/problem/ProblemList'
import Problem from '@/components/problem/Problem'
import ContentList from '@/components/content/ContentList'
import Content from '@/components/content/Content'
import Status from '@/components/Status'
import ACRank from '@/components/rank/ACRank'
import AchievementRank from '@/components/rank/AchievementRank'
import ContentProblemList from '@/components/content/children/ContentProblemList'
import ContentStatus from '@/components/content/children/ContentStatus'
import ContentProblem from '@/components/content/children/Contentproblem'
import ContentRank from '@/components/content/children/ContentRank'

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
      path: '/content-list',
      name: 'ContentList',
      component: ContentList
    },
    {
      path: '/content/:id',
      name: 'Content',
      component: Content,
      children: [
        {
          path: '',
          name: 'ContentProblemList',
          component: ContentProblemList
        },
        {
          path: 'problem-list',
          name: 'ContentProblemList',
          component: ContentProblemList
        },
        {
          path: 'problem/:id',
          name: 'ContentProblem',
          component: ContentProblem
        },
        {
          path: 'status',
          name: 'ContentStatus',
          component: ContentStatus
        },
        {
          path: 'rank',
          name: 'ContentRank',
          component: ContentRank
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
