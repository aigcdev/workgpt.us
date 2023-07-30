// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineNuxtConfig({
    app: {
        head: {
            title: 'WorkGPT: Customized ChatGPT | Your All-in-One Problem Solving Chatbot & AI Agents',
            viewport: 'width=device-width, initial-scale=1.0',
            meta: [
                {
                    name: 'description',
                    content:
                        'WorkGPT is a customized ChatGPT for your work, allowing you to chat with your private APIs, tools, and data. Seamlessly integrate with your internal data, execute tasks, and optimize your workflow. No coding expertise required. Try it now for free!'
                },
                {
                    name: 'keywords',
                    content:
                        'WorkGPT, ChatGPT, AI Chatbot, Task Automation, Workflow Optimization, No Coding, Free Trial, Email Scraper, Twitter Manager, News Agent, Meeting Reminder, Database Agent, Blog Manager, English Translator'
                }
            ],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-JX30K56GX6',
                    async: true,
                    body: true
                },
                {
                    textContent: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    
                        gtag('config', 'G-JX30K56GX6');
                    `,
                    body: true
                }
            ]
        },
        buildAssetsDir: '/static/',
        baseURL: '/'
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
