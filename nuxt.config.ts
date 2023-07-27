// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineNuxtConfig({
    app: {
        head: {
            title: 'workGPT'
        },
        buildAssetsDir: '/static/',
        baseURL: '/workgpt.us/'
    },
    ssr: false,
    vite: {
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: '@import "~/assets/styles/var.less";'
                }
            }
        },
        plugins: [
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
            })
        ]
    },
    devtools: {
        enabled: true
    },
    css: ['normalize.css/normalize.css', '~/assets/styles/index.less', '~/assets/styles/font.less']
})
