<template>
    <section id="features" class="evaluation-container">
        <Title title="How It Works" sub-title="Your all-in-one problem solving chatbot." />
        <div v-for="(item, index) in contentList" :key="index" class="content">
            <img v-lazy="item.imagePath" />
            <div :style="`max-width: ${item.textContentMaxWidth}px`">
                <div class="title">{{ item.title }}</div>
                <div class="sub-title">{{ item.subTitle }}</div>
                <div class="intro">{{ item.intro }}</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import Title from './Title.vue'
    import image1 from '~/assets/images/evaluation_1.png?url'
    import image2 from '~/assets/images/evaluation_2.png?url'
    import image3 from '~/assets/images/evaluation_3.png?url'

    const contentList = [
        {
            title: 'Chat with \nyour API / APPs',
            subTitle: 'API integration made easy.',
            intro: 'Seamlessly integrate with your own internal data and query any data anytime, without the need for programmer support. Execute requested tasks and return the results.',
            imagePath: image1,
            textContentMaxWidth: 480
        },
        {
            title: 'Customize any role \nwith your own data',
            subTitle: 'Effortless AI role customization.',
            intro: 'No coding expertise required, just by Chatting! \nCreate and distribute your own AI Role understanding your internal data effortlessly.',
            imagePath: image2,
            textContentMaxWidth: 500
        },
        {
            title: 'Autonomous \nAI Agent',
            subTitle: 'Multi-agent AI system.',
            intro: 'Run multiple AI Agents at once, operating concurrently to bolster your business processes and optimize your workflow.',
            imagePath: image3,
            textContentMaxWidth: 500
        }
    ]
</script>

<style scoped lang="less">
    .evaluation-container {
        max-width: @page-content-max-width;
        margin: 0 auto;
        padding: 0 40px 80px;

        @media screen and (max-width: @viewport-xl) {
            border-bottom: 1px solid #d8d8d8;
            margin-bottom: 80px;
        }

        @media screen and (max-width: @viewport-md) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
        &:nth-child(2) {
            margin-top: 64px;
            @media screen and (max-width: @viewport-xl) {
                margin-top: 80px;
            }
        }
        &:nth-child(2n) {
            flex-direction: row;
        }
        @media screen and (max-width: @viewport-xl) {
            flex-direction: column-reverse !important;
        }
        & + .content {
            margin-top: 120px;
            @media screen and (max-width: @viewport-xl) {
                margin-top: 56px;
            }
        }
        img {
            width: 55%;
            @media screen and (max-width: @viewport-xl) {
                width: 100%;
                max-width: @viewport-md;
                margin-top: 56px;
            }
        }

        > div {
            @media screen and (max-width: @viewport-xl) {
                width: 100%;
                text-align: center;
            }
        }

        .title {
            font-feature-settings: 'clig' off, 'liga' off;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 48px;
            letter-spacing: -1px;
            white-space: pre-wrap;
            @media screen and (max-width: @viewport-xl) {
                align-self: stretch;
                font-size: 32px;
                line-height: 35.2px;
            }
        }
        .sub-title {
            color: rgba(16, 25, 49, 0.6);
            font-feature-settings: 'clig' off, 'liga' off;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 40px; /* 125% */
            margin-top: 12px;
            @media screen and (max-width: @viewport-xl) {
                display: none;
            }
        }
        .intro {
            color: rgba(16, 25, 49, 0.6);
            font-feature-settings: 'clig' off, 'liga' off;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 32px;
            margin-top: 16px;
            white-space: pre-wrap;
            @media screen and (max-width: @viewport-xl) {
                font-family: Mulish;
                line-height: 24px;
                margin-top: 20px;
            }
        }
    }
</style>
