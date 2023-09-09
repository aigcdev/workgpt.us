<template>
    <section id="ai-template" class="ai-template-container">
        <Title title="Template" sub-title="" />
        <div class="tag-list">
            <div
                v-for="item in tagList"
                :key="item"
                :class="activeTag === item ? 'active': ''"
                class="tag"
                @click="activeTag = item"
            >
                {{ item }}
            </div>
        </div>
        <div class="content">
            <NuxtLink
                v-for="(item, index) in limitTemplateList"
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
                    <template v-else>
                        <div v-for="letterIcon in item.letterIconList" :key="letterIcon" class="icon">{{ letterIcon }}</div>
                    </template>
                </div>
                <div class="title">{{ item.title }}</div>
                <div class="intro">{{ item.intro }}</div>
            </NuxtLink>
        </div>
        <div v-if="showPcMoreButton" class="button pc" @click="isDialogShow = true">Show More</div>
        <NuxtLink to="https://chat.workgpt.us" class="button mobile">More</NuxtLink>
    </section>
    <el-dialog v-model="isDialogShow" destroy-on-close max-width="1800px" width="80%">
        <div class="dialog-content content">
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
                    <template v-else>
                        <div v-for="letterIcon in item.letterIconList" :key="letterIcon" class="icon">{{ letterIcon }}</div>
                    </template>
                </div>
                <div class="title">{{ item.title }}</div>
                <div class="intro">{{ item.intro }}</div>
            </NuxtLink>
        </div>
    </el-dialog>
</template>

<script setup lang="ts">
    import Graphemer from 'graphemer'
    import Title from './Title.vue'

    type Result = {
        services: {
            icon: string
        }[]
        name: string,
        description: string
        icon: string
        tags: string
    }

    const splitter = new Graphemer()
    const templateMaxNumber = 12

    const activeTag = ref('All')
    const isDialogShow = ref(false)

    const { data } = await useAsyncData(
        'templates',
        () => $fetch<{data: Result[]}>('https://api.workgpt.us/api/templates'),
        {
            transform: (result: { data: Result[] }) => result.data.map(item => ({
                iconPathList: item.services.map((service: any) => service.icon),
                title: item.name,
                intro: item.description,
                letterIconList: item.icon ? splitter.splitGraphemes(item.icon) : [item.name.substring(0, 1).toLocaleUpperCase()],
                tag: item.tags,
                to: 'https://chat.workgpt.us'
            }))
        }
    )

    const tagList = computed(() => {
        return ['All', ...new Set(data.value?.filter(item => item.tag).map(item => item.tag) || [])]
    })
    const templateList = computed(() => {
        return data.value?.filter(item =>
            activeTag.value === 'All' || activeTag.value === item.tag
        )
    })
    const limitTemplateList = computed(() => templateList.value?.filter((_, index) => index < templateMaxNumber) || [])
    const showPcMoreButton = computed(() => (data.value?.length || 0) > templateMaxNumber)
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

    .tag-list {
        padding: 64px 0;
        display: flex;
        flex-flow: wrap;
        gap: 16px;
        .tag {
            padding: 5px 18px;
            transition: all 0.3s ease 0s;
            border: 1px solid rgb(224, 224, 224);
            border-radius: 999px;
            cursor: pointer;
            &.active {
                border: 1px solid rgb(35, 85, 236);
            }
        }
    }

    .content {
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        justify-content: space-evenly;
        row-gap: 40px;
        column-gap: 16px;
        .item-card {
            color: inherit;
            padding: 20px 16px 20px;
            border-radius: 24px;
            border: 1px solid rgba(145, 163, 187, 0.2);
            background: #fff;
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.06), 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
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
        }
    }
    .dialog-content {
        padding: 40px 20px;
        max-height: 500px;
        overflow-y: auto;
    }
    .button {
        display: block;
        width: fit-content;
        margin: 0 auto;
        padding: 16px 48px;
        color: @color-white;
        font-size: 22px;
        font-feature-settings: 'clig' off, 'liga' off;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-radius: 64px;
        background: #0056f5;
        box-shadow: 0px 10px 30px 0px rgba(0, 90, 255, 0.2);
        margin-top: 24px;
        cursor: pointer;
        @media screen and (max-width: @viewport-xl) {
            font-size: 16px;
            margin-top: 40px;
        }

        &.pc {
            display: block;
        }
        &.mobile {
            display: none;
        }

        @media screen and (max-width: @viewport-lg) {
            margin-top: 40px;
            &.pc {
                display: none;
            }
            &.mobile {
                display: block;
            }
        }
    }
</style>
