<template>
    <div class="header-container" :class="[shadowing ? 'shadowing' : '']">
        <div>
            <SvgIcon name="logo" class="logo" />
            <Nav />
            <div class="operation">
                <NuxtLink class="login" to="https://chat.workgpt.us/login">Login</NuxtLink>
                <NuxtLink class="try" to="https://chat.workgpt.us/register">Try It Now</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Nav from './Nav.vue'

    const shadowing = ref(document.querySelector('html')!.scrollTop > 0)

    document.onscroll = () => {
        shadowing.value = document.querySelector('html')!.scrollTop > 0
    }
</script>

<style scoped lang="less">
    .header-container {
        position: sticky;
        top: 0;
        background-color: @color-white;
        z-index: 1000;

        height: 110px;

        padding: 0 40px;
        box-shadow: none;
        transition: box-shadow 0.2s;

        @media screen and (max-width: @viewport-md) {
            padding: 0 20px;
            justify-content: center;
            height: 80px;
        }

        &.shadowing {
            box-shadow: 0px 4px 4px 0px rgba(216, 216, 216, 0.25);
        }

        > div {
            height: 100%;
            max-width: @page-content-max-width;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media screen and (max-width: @viewport-md) {
                justify-content: center;
            }
        }
    }

    .logo {
        height: 40px;
        width: 163px;
    }

    .nav {
        flex: 1;
        @media screen and (max-width: @viewport-lg) {
            display: none;
        }
    }

    .operation {
        display: flex;
        align-items: center;

        @media screen and (max-width: @viewport-md) {
            display: none;
        }
        .login {
            width: 75px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            color: @main-color;
            font-family: Source Sans Pro;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
        }
        .try {
            margin-left: 8px;
            padding: 16px 24px;
            background-color: @main-color;
            border-radius: 70px;
            color: @color-white;
        }
    }
</style>
