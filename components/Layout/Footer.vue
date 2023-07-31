<template>
    <footer class="footer-container">
        <div class="box">
            <div>
                <SvgIcon name="logo-white" class="logo" />
                <Nav theme="dark" show-home :show-products="false" />
                <div class="contact-list">
                    <NuxtLink to="https://twitter.com/workgpt_us">
                        <SvgIcon name="twitter" />
                    </NuxtLink>
                    <NuxtLink to="https://www.facebook.com/groups/shopflex">
                        <SvgIcon name="facebook" />
                    </NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/company/workgpt">
                        <SvgIcon name="linkedin" />
                    </NuxtLink>
                    <NuxtLink to="https://www.youtube.com/channel/UCbRav4l3M30l3p8hhBPz5VQ">
                        <SvgIcon name="youtube" />
                    </NuxtLink>
                </div>
            </div>
            <div class="subscribe">
                <div class="title">Subscribe to get latest updates</div>
                <NuxtLink class="submit-button" @click="dialogShow = true"> Subscribe </NuxtLink>
            </div>
            <div class="copyright">
                <div>© Copyright 2023, All Rights Reserved</div>
                <NuxtLink style="color: #fff" to="mailto:support@workgpt.us" class="mobile">
                    Contact Us: support@workgpt.us
                </NuxtLink>
                <NuxtLink style="color: #fff" to="/privacy_policy">Privacy Policy</NuxtLink>
                <NuxtLink style="color: #fff" to="mailto:support@workgpt.us" class="pc">
                    Contact Us: support@workgpt.us
                </NuxtLink>
            </div>
        </div>
    </footer>
    <el-dialog v-model="dialogShow" destroy-on-close>
        <iframe
            style="border: none"
            width="100%"
            height="520px"
            src="https://cdn.forms-content.sg-form.com/c753648a-2e0a-11ee-8bb3-da3b37abf17b"
        />
    </el-dialog>
</template>

<script setup lang="ts">
    import Nav from './Nav.vue'

    const dialogShow = ref(false)
</script>

<style scoped lang="less">
    .footer-container {
        background-color: @default-font-color;
        padding: 80px 40px;
        @media screen and (max-width: @viewport-md) {
            padding-left: 20px;
            padding-right: 20px;
        }
        > .box {
            max-width: @page-content-max-width;
            margin: 0 auto;
            > div:nth-child(1) {
                display: flex;

                @media screen and (max-width: @viewport-lg) {
                    flex-direction: column;
                    align-items: center;
                }

                .nav {
                    flex: 1;
                    @media screen and (max-width: @viewport-lg) {
                        flex: auto;
                        margin-left: 0;
                        padding: 24px 0;
                    }
                }
            }
        }
    }

    .logo {
        height: 40px;
        width: 163px;
    }

    .contact-list {
        display: flex;
        align-items: center;
        > a {
            width: 20px;
            height: 20px;
            > svg {
                width: 100%;
                height: 100%;
            }
            + a {
                margin-left: 34px;
            }
        }
    }

    .subscribe {
        display: flex;
        align-items: center;
        padding: 64px 0;
        @media screen and (max-width: @viewport-lg) {
            align-items: center;
            flex-direction: column;
        }
        .title {
            color: @color-white;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            @media screen and (max-width: @viewport-lg) {
                font-size: 18px;
            }
        }
        .submit-button {
            width: 112px;
            height: 44px;
            line-height: 44px;
            color: @color-white;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-align: center;
            background: @main-color;
            cursor: pointer;
            border-radius: 12px;
            margin-left: 24px;
            @media screen and (max-width: @viewport-lg) {
                height: 40px;
                line-height: 40px;
                font-size: 12px;
                margin-left: 0;
                margin-top: 17px;
            }
        }
    }

    .copyright {
        width: 100%;
        border-top: 1px solid rgba(212, 212, 216, 0.2);
        padding-top: 33px;

        display: flex;
        justify-content: space-between;

        color: @color-white;
        font-family: DM Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;

        .pc {
            display: block;
        }

        .mobile {
            display: none;
        }

        @media screen and (max-width: @viewport-lg) {
            flex-direction: column;
            align-items: center;

            font-size: 14px;

            .pc {
                display: none;
            }
            .mobile {
                display: block;
            }
        }

        @media screen and (max-width: @viewport-md) {
            margin: 0 -20px;
            width: calc(100% + 40px);
        }
    }
</style>
