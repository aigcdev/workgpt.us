import VueLazyLoad from 'vue-lazyload'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueLazyLoad, {
        preLoad: 1.33, // 预加载高度比例
        attempt: 2 // 尝试计数次数
    })
})
