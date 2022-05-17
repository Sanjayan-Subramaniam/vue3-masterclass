import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'
import PageNotFound from '@/components/PageNotFound.vue'

import sourceData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: PageThreadShow,
      props: true,
      beforeEnter (to, from, next) {
        // check if thread exists
        const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
        //if exists continue navigation, using next function
        if (threadExists){
          return next()
        }
        //if thread doesn't exist redirect to not found page
        else{
          next({
            name: 'NotFound',
            //this pathMatch allows the URL to be maintained in the browswer address bar, even if there's an error state
            //the substring allows the removal of the additional '/' at the start of the URL
            params: { pathMatch: to.path.substring(1).split('/') },
            //next two lines preserve the query and hash in the URL also
            query: to.query,
            hash: to.hash
          })
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: PageNotFound
    }
  ]
})

export default router
