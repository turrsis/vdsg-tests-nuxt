import { env } from 'process'
import { configureSlaveConfig } from 'vdsg-server-common'
import { defineNuxtConfig } from 'nuxt/config'
/* import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url) */

export default async () => defineNuxtConfig(await configureSlaveConfig({
  ssr: !!env.IS_SSR,
  /*vite: {
    server: {
      watch: { usePolling: true }
    }
  }*/
}))
