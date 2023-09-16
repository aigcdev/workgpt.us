<template>
    <div class="chat-icon" @click="showing = !showing">
        <img src="/logo.png" />
    </div>
    <Transition name="chat-dialog">
        <div v-show="showing" class="chat-dialog">
            <div class="container">
                <div ref="messageListRef" class="message-list">
                    <div
                        v-for="(item, index) in messageList"
                        :key="index"
                        class="message-item"
                        :class="item.type === ChatType.BOT ? 'bot' : 'user'"
                    >
                        <div v-if="!item.loading" class="content">{{ item.content }}</div>
                        <img v-else src="/logo.png" class="loading" />
                    </div>
                </div>
                <div class="operation">
                    <div class="template-list">
                        <div
                            v-for="(item, index) in templateList"
                            :key="index"
                            class="template-item"
                            @click="inputValue = item"
                        >
                            {{ item }}
                        </div>
                    </div>
                    <div class="input">
                        <input
                            v-model="inputValue"
                            placeholder="Ask a question"
                            @keyup.enter="chat"
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

    const showing = ref(false)

    enum ChatType {
        BOT = 0,
        USER = 1
    }

    const { data: templateList } = await useAsyncData(
        'chatTemplates',
        () => $fetch<{ promptTemplates: string[] }>('https://api.workgpt.us/api/chatTemplates'),
        {
            transform: (result: { promptTemplates: string[] }) => result.promptTemplates
        }
    )

    type ChatItem = {
        type: ChatType
        loading?: boolean
        content: string
    }
    const messageList: ChatItem[] = reactive([])
    const inputValue = ref('')
    const messageListRef = ref<HTMLDivElement>()

    const createFingerprint = async () => {
        const components = await Fingerprint2.getPromise()
        const values = components.map(component => component.value)
        return Fingerprint2.x64hash128(values.join(''), 31)
    }

    const fetchChat = async (content: string) => {
        const result = await $fetch<any>('https://api.workgpt.us/api/chatLLM', {
            method: 'POST',
            headers: {
                Authorization: '8780ebdd0ee734413def6fd563c5cbfd'
            },
            body: {
                prompt: content,
                conversationId: await createFingerprint()
            },
            ignoreResponseError: true
        })

        if (result.error) {
            return result.error.message || ''
        } else {
            return result.choices[0]?.message?.content || ''
        }
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
                content: 'Hi there, ask me anything!'
            })
        }

        scrollToBottom()
    }

    const saveMessageListToLocalStorage = () => {
        localStorage.setItem('messageList', JSON.stringify(messageList))
    }

    const scrollToBottom = () => {
        nextTick(() => {
            messageListRef.value!.scrollTop = messageListRef.value!.scrollHeight
        })
    }

    onMounted(loadLocalStorageMessageList)
</script>

<style scoped lang="less">
    .chat-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        box-shadow: 0 0 8px 2px rgba(22, 58, 71, 0.3);
        box-sizing: border-box;
        background-color: #fff;

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
            padding: 20px;
            gap: 20px;
            display: flex;
            flex-direction: column;
            height: 100%;
            box-sizing: border-box;
        }
    }

    .message-list {
        flex: 1;
        gap: 25px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        .message-item {
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

            &.bot {
                border-top-left-radius: 0;
            }
            &.user {
                border-top-right-radius: 0;
                background-color: @main-color;
                align-self: flex-end;
                color: @color-white;
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
                right: 4px;
                top: 4px;
                width: 20px;
                height: 20px;
                svg {
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
</style>
