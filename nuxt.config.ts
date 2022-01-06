import { env } from 'process'
import { configureSlaveConfig } from 'vdsg-server-common'
/* import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url) */


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default async () => await configureSlaveConfig({
    ssr: !!env.IS_SSR,
})
