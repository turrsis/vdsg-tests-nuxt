/*import type { RouterConfig } from '@nuxt/schema'
export default <RouterConfig> {
  routes: (_routes) => {
    _routes.push({
        name: 'duplicate',
        path: '/duplicate',
        component: () => import('~/pages/about.vue')
    })
    return _routes
  },
}*/
// https://nuxt.com/docs/guide/directory-structure/pages#custom-routes
export default {
  routes: (_routes) => {
    console.log('_routes', _routes)
    _routes.push({
        name: 'duplicate',
        path: '/duplicate',
        component: () => import('~/pages11/about.vue')
    })
    return _routes
  },
}