<template>
    <section id="useCases" class="use-cases-container">
        <Title title="Use Cases" sub-title="Get you started with ready use templates." />
        <div class="content">
            <NuxtLink
                v-for="(item, index) in caseList"
                :key="index"
                :to="item.to"
                class="item-card"
            >
                <div class="icon-list">
                    <div v-for="iconPath in item.iconPathList" :key="iconPath" class="icon">
                        <img v-lazy="iconPath" />
                    </div>
                </div>
                <div class="title">{{ item.title }}</div>
                <div class="intro">{{ item.intro }}</div>
                <div class="time">Save {{ item.time }}</div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
    import Title from './Title.vue'
    import icon1 from '~/assets/images/icon_1.png?url'
    import icon2 from '~/assets/images/icon_2.png?url'
    import icon3 from '~/assets/images/icon_3.png?url'
    import icon4 from '~/assets/images/icon_4.png?url'
    import icon5 from '~/assets/images/icon_5.png?url'
    import icon6 from '~/assets/images/icon_6.png?url'
    import icon7 from '~/assets/images/icon_7.png?url'
    import icon8 from '~/assets/images/icon_8.png?url'
    import icon9 from '~/assets/images/icon_9.png?url'
    import icon10 from '~/assets/images/icon_10.png?url'

    const caseList = [
        {
            iconPathList: [icon1, icon2, icon3],
            title: 'Email Scraper',
            intro: 'Scrape all the emails on the website and sync to Google Sheet.',
            time: '15 min',
            to: 'https://blog.workgpt.us/scraping-email-address-to-google-sheet'
        },
        {
            iconPathList: [icon4, icon5, icon3],
            title: 'Twitter Manager',
            intro: 'Post the news with tags to Twitter everyday 10am.',
            time: '30 min',
            to: 'https://blog.workgpt.us/automating-twitter-posts-with-daily-hot-news-using-workgpt'
        },
        {
            iconPathList: [icon6, icon2, icon3],
            title: 'News Agent',
            intro: 'Get hacker news and put result in a Google Sheet table.',
            time: '10 min',
            to: 'https://blog.workgpt.us/extract-news-source-link-and-send-to-email'
        },
        {
            iconPathList: [icon7, icon8, icon3],
            title: 'Meeting Reminder',
            intro: 'Send email with the today’s meeting link.',
            time: '3 min',
            to: 'https://blog.workgpt.us/schedule-meeting-to-google-calendar'
        },
        {
            iconPathList: [icon9, icon3],
            title: 'Database Agent',
            intro: 'Check the number of user registered in 2023.',
            time: '1 hour',
            to: 'https://blog.workgpt.us/automate-customer-inquiry-responses-via-internal-service-api'
        },
        {
            iconPathList: [icon1, icon3],
            title: 'Blog Manager',
            intro: 'Generate blog and post it to my blog.',
            time: '40 min',
            to: 'https://blog.workgpt.us/create-the-draft-of-blog-post-on-given-topictheme-with-workgpt'
        },
        {
            iconPathList: [icon10, icon2, icon3],
            title: 'Reviewer',
            intro: 'Get the product review from Google Search to Google Sheet.',
            time: '5 min',
            to: 'https://blog.workgpt.us/colloect-review-from-google-search-to-google-sheet'
        },
        {
            iconPathList: [icon3],
            title: 'English Translator',
            intro: 'Translate any content into English.',
            time: '40 min',
            to: 'https://blog.workgpt.us/translate-any-content-into-english'
        }
    ]
</script>

<style scoped lang="less">
    .use-cases-container {
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
            padding: 65px 16px 20px;
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

    .time {
        display: inline-block;
        text-align: center;
        font-family: Poppins;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 4px 8px;
        border-radius: 50px;
        background: rgba(16, 25, 49, 0.05);
        margin-top: 18px;
    }
</style>
