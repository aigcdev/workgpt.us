<template>
    <div v-loading="!isConfigInitialized" class="chat-icon" @click="handleChatIconClick">
        <img v-if="isConfigInitialized" :src="config.logo" />
    </div>
    <Transition name="chat-dialog">
        <div v-if="isConfigInitialized" v-show="showing" class="chat-dialog">
            <div v-if="isFormShow" class="container form">
                <div>{{ config.collection_msg }}</div>
                <div style="flex: 1; overflow-y: auto">
                    <el-form ref="formRef" :model="formModel" label-position="top">
                        <el-form-item
                            v-for="item in collections"
                            :key="item.name"
                            :prop="item.name"
                            v-bind="item"
                        >
                            <el-input v-model="(formModel as any)[item.name]" />
                        </el-form-item>
                    </el-form>
                </div>
                <el-button
                    type="primary"
                    style="background-color: #0056f5; width: fit-content"
                    @click="handleFormSubmit"
                >
                    Submit
                </el-button>
            </div>
            <div v-else v-loading="!isChatBotInitialized" class="container">
                <div ref="messageListRef" class="message-list">
                    <div
                        v-for="(item, index) in messageList"
                        :key="index"
                        class="message-item"
                        :class="item.type === ChatType.BOT ? 'bot' : 'user'"
                    >
                        <img
                            :src="
                                item.type === ChatType.BOT
                                    ? config.avatars.bot
                                    : config.avatars.user
                            "
                            class="avatar"
                        />
                        <div class="box">
                            <div v-if="!item.loading" class="content" v-html="item.content"></div>
                            <SvgIcon v-else class="loading" name="loading" color="#0056f5" />
                        </div>
                    </div>
                </div>
                <div class="operation">
                    <div class="template-list">
                        <div
                            v-for="item in templateList"
                            :key="item.id"
                            class="template-item"
                            @click="handleTemplateClick(item)"
                        >
                            {{ item.prompt }}
                        </div>
                    </div>
                    <div class="input">
                        <input
                            v-model="inputValue"
                            placeholder="Ask a question"
                            @keyup.enter="chat"
                            @change="handleInputChange"
                        />
                        <button class="button" @click="chat">
                            <SvgIcon name="plane" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    import Fingerprint2 from 'fingerprintjs2'

    const BASE_URL = 'https://api.workgpt.us'
    const APPID = 'WORKGPT'

    enum ChatType {
        BOT = 0,
        USER = 1
    }

    const isFormShow = ref(false)
    const formRef = ref()
    const formModel = reactive({})

    const config = reactive({
        avatars: {
            bot: '',
            user: ''
        },
        logo: '',
        redirect: {
            href: '',
            name: '',
            warn: ''
        },
        welcome: '',
        collection_msg: ''
    })
    const isConfigInitialized = ref(false)

    type Template = {
        id: number
        prompt: string
    }
    const templateList = ref<Template[]>([])
    let promptTemplateId: number | undefined

    type Collection = {
        name: string
        type?: 'string'
        label: string
        required: boolean
    }
    const collections = ref<Collection[]>([])
    const checkCollection = () => {
        return !collections.value.some(item => {
            return item.required && !localStorage.getItem('collection_' + item.name)
        })
    }

    type ChatItem = {
        type: ChatType
        loading?: boolean
        content: string
    }
    const messageList: ChatItem[] = reactive([])
    const inputValue = ref('')
    const messageListRef = ref<HTMLDivElement>()
    const showing = ref(false)
    const isChatBotInitialized = ref(false)
    let chatToken = ''

    const initBot = async () => {
        isChatBotInitialized.value = false
        const isCollectionCompleted = checkCollection()

        let _collections: Record<string, string> = {}
        if (!isCollectionCompleted) {
            _collections = await getCollection()
            Object.keys(_collections).forEach(key => {
                localStorage.setItem('collection_' + key, _collections[key])
            })
        } else {
            collections.value.forEach(item => {
                Reflect.set(
                    _collections,
                    item.name,
                    localStorage.getItem('collection_' + item.name)
                )
            })
        }

        chatToken = await fetchInitChatBotAndGetToken(_collections)

        loadLocalStorageMessageList()

        isChatBotInitialized.value = true
    }

    let resolveCollection: (value: Record<string, string>) => void
    const getCollection = () => {
        return new Promise<Record<string, string>>(resolve => {
            isFormShow.value = true

            resolveCollection = value => {
                resolve(value)
                isFormShow.value = false
            }
        })
    }

    const createFingerprint = async () => {
        const components = await Fingerprint2.getPromise()
        const values = components.map(component => component.value)
        return Fingerprint2.x64hash128(values.join(''), 31)
    }

    const chat = async () => {
        if (!inputValue.value) {
            return
        }

        const content = inputValue.value
        inputValue.value = ''

        messageList.push({
            type: ChatType.USER,
            content
        })

        const newBotMessageIndex =
            messageList.push({
                type: ChatType.BOT,
                loading: true,
                content: ''
            }) - 1

        scrollToBottom()

        const result = await fetchChat(content)

        messageList[newBotMessageIndex].loading = false
        messageList[newBotMessageIndex].content = result

        saveMessageListToLocalStorage()
        scrollToBottom()
    }

    const loadLocalStorageMessageList = () => {
        messageList.splice(0, messageList.length)
        const listString = localStorage.getItem('messageList')

        if (listString) {
            try {
                const list = JSON.parse(listString)
                messageList.push(...list)
            } catch (_) {}
        }

        if (!messageList.length) {
            messageList.push({
                type: ChatType.BOT,
                content: config.welcome
            })
        }

        scrollToBottom()
    }

    const saveMessageListToLocalStorage = () => {
        localStorage.setItem('messageList', JSON.stringify(messageList))
    }

    const scrollToBottom = () => {
        nextTick(() => {
            if (!messageListRef.value) {
                return
            }

            messageListRef.value.scrollTop = messageListRef.value.scrollHeight
        })
    }

    const handleChatIconClick = () => {
        isConfigInitialized && (showing.value = !showing.value)
        showing.value && scrollToBottom()
    }

    const handleInputChange = () => {
        promptTemplateId = undefined
    }

    const handleTemplateClick = (template: Template) => {
        promptTemplateId = template.id
        inputValue.value = template.prompt
    }

    const handleFormSubmit = async () => {
        if (await formRef.value.validate()) {
            resolveCollection(formModel)
        }
    }

    const fetchChat = async (content: string) => {
        if (!chatToken) {
            await initBot()
        }
        const result = await $fetch<any>('/api/chatLLM', {
            method: 'POST',
            baseURL: BASE_URL,
            headers: {
                Authorization: chatToken
            },
            body: {
                promptTemplateId,
                prompt: content,
                conversationId: await createFingerprint()
            },
            ignoreResponseError: true
        })

        if (result.error) {
            if (result.error.message === 'Not Enough Quotas') {
                return `${config.redirect.warn} Click here: <a href="${config.redirect.href}">${config.redirect.name}</a>`
            }
            return result.error.message || ''
        } else {
            return result.choices[0]?.message?.content || ''
        }
    }

    const fetchGetConfig = async () => {
        const result = await $fetch<any>('/api/chatbot/config', {
            method: 'GET',
            baseURL: BASE_URL,
            params: {
                appId: APPID
            }
        })
        const data = result.data

        templateList.value = data.promptTemplates
        collections.value = data.collections

        Object.assign(config, {
            avatars: {
                bot: data.avatars.bot.src,
                user: data.avatars.user.src
            },
            logo: data.logo.src,
            redirect: data.redirect,
            welcome: data.welcome,
            collection_msg: data.collection_msg
        })

        isConfigInitialized.value = true
    }

    const fetchInitChatBotAndGetToken = async (data: Record<string, string>) => {
        const result = await $fetch<any>('/api/chatbot', {
            method: 'POST',
            baseURL: BASE_URL,
            body: {
                appId: APPID,
                ...data
            }
        })

        return result?.data?.token || ''
    }

    onMounted(async () => {
        await fetchGetConfig()
        initBot()
    })
</script>

<style scoped lang="less">
    .chat-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        box-shadow: 0 0 8px 2px rgba(22, 58, 71, 0.3);
        box-sizing: border-box;
        background-color: #fff;
        overflow: hidden;

        cursor: pointer;
        position: fixed;
        bottom: 32px;
        right: 32px;
        padding: 10px;
        z-index: 999999;
        opacity: 1;
        transform: scale(1);
        scale: 1;
        animation: pulse-black 2.5s infinite;
        animation-timing-function: ease-in-out;
        transition: scale 0.2s;

        @media screen and (max-width: @viewport-lg) {
            width: 60px;
            height: 60px;
            right: 22px;
            bottom: 22px;
        }

        @keyframes pulse-black {
            0% {
                transform: scale(1);
                box-shadow: 0 0 8px 4px rgba(22, 58, 71, 0.3);
            }

            70% {
                transform: scale(0.95);
                box-shadow: 0 0 8px 8px rgba(22, 58, 71, 0.1);
            }

            100% {
                transform: scale(1);
                box-shadow: 0 0 8px 4px rgba(22, 58, 71, 0.3);
            }
        }

        &:hover {
            scale: 1.1;
        }

        img {
            height: 100%;
            width: 100%;
        }
    }
    .chat-dialog {
        position: fixed;
        width: 450px;
        height: 75vh;
        bottom: 130px;
        right: 32px;
        transform: translateX(0);
        opacity: 1;
        z-index: 99999;
        background-color: #fff;
        transition: 0.6s ease opacity, 0.6s ease transform;
        border-radius: 22px;
        box-shadow: inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1),
            0px 10px 100px -20px rgba(50, 50, 93, 0.25), 0px 20px 60px -30px rgba(0, 0, 0, 0.3);

        @media screen and (max-width: @viewport-lg) {
            width: calc(100vw - 44px);
            height: calc(100vh - 120px);
            right: 22px;
            bottom: 100px;
        }

        &-enter-active,
        &-leave-active {
            transition: opacity 0.5s ease, transform 0.5s ease;
        }

        &-enter-from,
        &-leave-to {
            opacity: 0;
            transform: translateX(100px);
        }

        > .container {
            border-radius: 24px;
            padding: 52px 20px;
            gap: 20px;
            display: flex;
            flex-direction: column;
            height: 100%;
            box-sizing: border-box;
        }
    }

    .form {
        pointer-events: auto;
    }

    .message-list {
        flex: 1;
        gap: 25px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        .message-item {
            display: inline-flex;
            gap: 10px;
            > .box {
                width: fit-content;
                padding: 15px;
                background-color: @color-white;
                border: 1px solid #e0e0e0;
                border-radius: 25px;
                white-space: pre-wrap;
                word-break: break-word;
                color: @default-font-color;
                font-feature-settings: 'clig' off, 'liga' off;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                display: flex;
                align-items: center;

                @media screen and (max-width: @viewport-lg) {
                    font-size: 14px;
                    padding: 10px;
                }

                .content {
                    display: inline-block;
                }

                .loading {
                    width: 25px;
                    height: 25px;
                    animation: loading-rotate 1.5s infinite;
                    animation-timing-function: linear;
                    display: inline-block;

                    @keyframes loading-rotate {
                        0% {
                            transform: rotate(0deg);
                        }

                        100% {
                            transform: rotate(360deg);
                        }
                    }
                }
            }
            > .avatar {
                height: 40px;
                width: 40px;
                border-radius: 50%;
            }
            &.bot {
                flex-direction: row;
                > .box {
                    border-top-left-radius: 0;
                }
            }
            &.user {
                flex-direction: row-reverse;
                align-self: flex-end;
                > .box {
                    border-top-right-radius: 0;
                    background-color: @main-color;
                    color: @color-white;
                }
            }
        }
    }

    .operation {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .template-list {
            gap: 10px;
            display: flex;
            overflow: auto;
            padding-bottom: 6px;

            &::-webkit-scrollbar {
                width: 2.5px;
                height: 2.5px;
            }
            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px #e0e0e0;
                -webkit-border-radius: 10px;
                border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb {
                -webkit-border-radius: 10px;
                border-radius: 10px;
                background: rgba(48, 48, 48, 0.3);
                -webkit-box-shadow: inset 0 0 6px #8b8b8b;
            }
            &::-webkit-scrollbar-thumb:window-inactive {
                background: rgba(255, 255, 255, 0.3);
            }

            .template-item {
                white-space: nowrap;
                padding: 8px 18px;
                transition: all 0.3s ease 0s;
                border: 1px solid #e0e0e0;
                border-radius: 999px;
                cursor: pointer;
                @media screen and (max-width: @viewport-lg) {
                    font-size: 14px;
                    padding: 6px 15px;
                }
            }
        }
        .input {
            position: relative;
            input {
                width: 100%;
                padding: 5px 65px 5px 20px;
                box-sizing: border-box;
                height: 60px;
                border-radius: 5px;
                border: 1px solid #e0e0e0;

                @media screen and (max-width: @viewport-lg) {
                    height: 50px;
                }
            }
            button {
                background-color: @main-color;
                cursor: pointer;
                padding: 10px;
                border-radius: 5px;
                position: absolute;
                box-sizing: content-box;
                right: 10px;
                top: 10px;
                width: 20px;
                height: 20px;
                border: none;
                @media screen and (max-width: @viewport-lg) {
                    right: 4px;
                    top: 6px;
                    width: 20px;
                    height: 20px;
                }
                svg {
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
</style>
