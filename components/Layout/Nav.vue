<template>
    <div class="nav" :style="`color:${fontColor}`">
        <div @click="scrollTo('product')">Product</div>
        <div @click="scrollTo('features')">Features</div>
        <div @click="scrollTo('useCases')">Use Cases</div>
    </div>
</template>

<script setup lang="ts">
    import { gsap } from 'gsap'

    defineProps<{
        fontColor?: string
    }>()

    const scrollTo = (id: string) => {
        const headerElement = document.querySelector('.header-container')
        const targetElement = document.querySelector('#' + id) as HTMLDivElement

        const headerHeight = headerElement!.clientHeight
        const targetScrollTop = targetElement.offsetTop - headerHeight

        gsap.to(document.querySelector('html'), { duration: 0.5, scrollTop: targetScrollTop })
    }
</script>

<style scoped lang="less">
    .nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 88px;

        div {
            cursor: pointer;
            color: inherit;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-transform: capitalize;
            & + div {
                margin-left: 40px;
            }
        }
    }
</style>
