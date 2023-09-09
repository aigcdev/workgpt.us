<template>
    <NuxtLayout>
        <div>
            <Intro />
            <Evaluation />
            <UseCases />
            <AITemplate />
            <Feedback />
            <CreateAccount />
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
    import Intro from '~/components/Home/Intro.vue'
    import Evaluation from '~/components/Home/Evaluation.vue'
    import UseCases from '~/components/Home/UseCases.vue'
    import AITemplate from '~/components/Home/AITemplate.vue'
    import Feedback from '~/components/Home/Feedback.vue'
    import CreateAccount from '~/components/Home/CreateAccount.vue'
</script>

<style scoped lang="less"></style>
