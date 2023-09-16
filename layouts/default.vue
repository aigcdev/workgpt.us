<template>
    <div class="layout">
        <Header />
        <main>
            <slot />
        </main>
        <Chat />
        <Footer />
    </div>
</template>

<script setup lang="ts">
    import Header from '~/components/Layout/Header.vue'
    import Footer from '~/components/Layout/Footer.vue'
    import Chat from '~/components/Chat/index.vue'
</script>

<style lang="less">
    .layout {
        min-height: 100vh;
    }
</style>
