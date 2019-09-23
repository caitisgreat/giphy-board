import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [

    // on first visit of the site, the user will be shown trending results from giphy
    // search bar and navigation will omni-present in the header of the application
    {
      path: '/',
      name: 'Trending',
      component: () => import('@/views/Trending')
    }

    // whenever the user performs a search from the header they will be redirected to their results here
    // {
    //   path: '/search',
    //   name: 'Search Results',
    //   component: () => import('./pathToComponent'),
    // },
  ]
})
