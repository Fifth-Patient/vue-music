import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = resolve => {
  import('components/recommend/recommend').then(recommend => {
    resolve(recommend)
  })
}

const Rank = reslove => {
  import('components/rank/rank').then(module => {
    reslove(module)
  })
}
const Search = reslove => {
  import('components/search/search').then(module => {
    reslove(module)
  })
}

const Singer = reslove => {
  import('components/singer/singer').then(module => {
    reslove(module)
  })
}

const SingerDetail = reslove => {
  import('components/singer-detail/singer-detail').then(module => {
    reslove(module)
  })
}

const Disc = reslove => {
  import('components/disc/disc').then(module => {
    reslove(module)
  })
}

const TopList = reslove => {
  import('components/top-list/top-list').then(module => {
    reslove(module)
  })
}

const UserCenter = reslove => {
  import('components/user-center/user-center').then(module => {
    reslove(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
