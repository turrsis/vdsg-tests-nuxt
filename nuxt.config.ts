import { env } from 'process'
import { configureSlaveConfig } from 'vdsg-server-common'
import { defineNuxtConfig } from 'nuxt/config'
/* import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url) */

export default async () => defineNuxtConfig(await configureSlaveConfig({
  ssr: !!env.IS_SSR,
  //builder: 'webpack', // see - https://github.com/nuxt/framework/pull/2812
  /*vite: {
    server: {
      watch: { usePolling: true }
    }
  }*/
}))
