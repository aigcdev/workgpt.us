<template>
    <section id="feedback" class="feedback-container">
        <Title title="Feedback" sub-title="" />
        <iframe style="border: none;" src="https://cards.producthunt.com/cards/testimonials/668129,668254,668209,668085,668342,668345" frameborder="0" scrolling="auto" allowfullscreen></iframe>
    </section>
</template>

<script setup lang="ts">
    import Title from './Title.vue'
</script>

<style scoped lang="less">
    .feedback-container {
        max-width: @page-content-max-width;
        margin: 0 auto;
        padding: 0 40px 120px;

        @media screen and (max-width: @viewport-xl) {
            padding-bottom: 64px;
        }

        @media screen and (max-width: @viewport-md) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    iframe {
        width: 100%;
        height: 1000px;
    }
</style>
