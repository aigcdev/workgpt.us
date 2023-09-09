<template>
    <div class="nav" :class="theme">
        <div v-if="showHome" class="item" @click="scrollTo('home')">Home</div>
        <el-dropdown v-if="showProducts" :teleported="false" class="item" trigger="click">
            <div style="display: flex; align-items: center">
                Products<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <NuxtLink class="dropdown-item" to="https://chat.workgpt.us">
                            Chat with WorkGPT
                        </NuxtLink>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <NuxtLink class="dropdown-item" to="https://writer.workgpt.us">
                            AI Content Creation
                        </NuxtLink>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <NuxtLink class="dropdown-item" to="https://email.workgpt.us">
                            AI Email Generator
                        </NuxtLink>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <NuxtLink class="dropdown-item" to="https://seo.workgpt.us">
                            AI SEO Optimizer
                        </NuxtLink>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <div class="item" @click="scrollTo('features')">Features</div>
        <div class="item" @click="scrollTo('useCases')">Use Cases</div>
        <NuxtLink class="item" to="https://blog.workgpt.us/blog">blog</NuxtLink>
    </div>
</template>

<script setup lang="ts">
    import { gsap } from 'gsap'
    import { ArrowDown } from '@element-plus/icons-vue'

    withDefaults(
        defineProps<{
            theme?: 'light' | 'dark'
            showHome?: boolean
            showProducts?: boolean
        }>(),
        {
            theme: 'light',
            showHome: false,
            showProducts: true
        }
    )

    const scrollTo = (id: string) => {
        const headerElement = document.querySelector('.header-container')
        const targetElement = document.querySelector('#' + id) as HTMLDivElement

        const headerHeight = headerElement!.clientHeight
        const targetScrollTop = targetElement.offsetTop - headerHeight

        gsap.to(document.querySelector('html'), { duration: 0.5, scrollTop: targetScrollTop })
    }
</script>

<style scoped lang="less">
    .light {
        color: @default-font-color;
    }
    .dark {
        color: @color-white;
    }
    .nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 88px;

        .item {
            cursor: pointer;
            color: inherit;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-transform: capitalize;
            & + .item {
                margin-left: 40px;
            }
        }
    }

    .el-icon--right {
        color: @default-font-color;
    }

    :deep(.el-dropdown:has(.el-dropdown__popper[aria-hidden='false'])) {
        .el-tooltip__trigger {
            color: #0056f5;
        }
        .el-icon--right {
            transform: scaleY(-1);
        }
    }

    :deep(.el-dropdown__popper.el-popper) {
        border-radius: 12px;
        overflow: hidden;
    }

    :deep(.el-dropdown-menu) {
        padding: 16px 0;
    }

    :deep(.el-dropdown-menu__item) {
        color: inherit;
        padding: 12px 24px;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: capitalize;
        min-width: 232px;
        box-sizing: border-box;
        & + .el-dropdown-menu__item {
            margin-top: 12px;
        }
        .dropdown-item {
            color: inherit;
        }
    }

    :deep(.el-dropdown-menu__item:not(.is-disabled):focus) {
        background-color: #eff0f2;
        color: inherit;
    }

    :deep(.el-popper__arrow) {
        display: none;
    }

    .dark {
        :deep(.el-dropdown__popper.el-popper) {
            border: 1px solid #2a354c;
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.06), 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
            background-color: transparent;
        }
        :deep(.el-dropdown-menu) {
            background: #101931;
        }
        :deep(.el-dropdown-menu__item:not(.is-disabled):focus) {
            background-color: #2c2f45;
        }
    }
</style>
