<template>
    <section id="ai-template" class="ai-template-container">
        <Title title="Template" sub-title="" />
        <div class="content">
            <NuxtLink
                v-for="(item, index) in templateList"
                :key="index"
                :to="item.to"
                class="item-card"
            >
                <div class="icon-list">
                    <template v-if="item.iconPathList.length">
                        <div v-for="iconPath in item.iconPathList" :key="iconPath" class="icon">
                            <img v-lazy="iconPath" />
                        </div>
                    </template>
                    <div v-else class="icon">{{ item.icon || item.title.substring(0, 1).toLocaleUpperCase() }}</div>
                </div>
                <div class="title">{{ item.title }}</div>
                <div class="intro">{{ item.intro }}</div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
    import Title from './Title.vue'

    type Result = {
        services: {
            icon: string
        }[]
        name: string,
        description: string
        icon: string
    }

    const { data: templateList } = await useAsyncData(
        'templates',
        () => $fetch<{data: Result[]}>('https://api.workgpt.us/api/templates'),
        {
            transform: (result: { data: Result[] }) => result.data.filter((_, index) => index < 12).map(item => ({
                iconPathList: item.services.map((service: any) => service.icon),
                title: item.name,
                intro: item.description,
                icon: item.icon,
                to: 'https://chat.workgpt.us'
            }))
        }
    )
</script>

<style scoped lang="less">
    .ai-template-container {
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

    .content {
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        justify-content: space-evenly;
        row-gap: 40px;
        column-gap: 16px;
        padding: 64px 0;
        .item-card {
            color: inherit;
            padding: 20px 16px 20px;
            border-radius: 24px;
            border: 1px solid rgba(145, 163, 187, 0.2);
            background: #fff;
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.06), 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
        }
    }

    .icon-list {
        display: flex;
        .icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(145, 163, 187, 0.2);
            background: #fff;
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.06), 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: 600;
            letter-spacing: 0px;
            color: rgb(79, 142, 245);
            & + .icon {
                margin-left: 8px;
            }
            img {
                width: 28.6px;
                height: 28.6px;
            }
        }
    }

    .title {
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 24px;
    }

    .intro {
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 16px;
    }
</style>
