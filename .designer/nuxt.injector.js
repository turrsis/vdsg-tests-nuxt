export default defineNuxtPlugin(async (nuxtApp) => {
    if (nuxtApp.ssrContext) {
        nuxtApp.vueApp.directive('__designer', (el, dir, vnode) => { console.log('ssr.__designer.created', dir) })
    } else {
        nuxtApp.vueApp.use(
            (await import('vdsg-slave')).default,
            {
                config: await import('./config.mjs'),
                metadata: await import('./metadata.mjs'),
                hmrHot: import.meta.hot || import.meta.webpackHot,
            }
        )
    }
})