<template>
    <NuxtLayout>
        <div>
            <div class="container">
                <div class="main-title">
                    <h1>Your Telegram reply bot powered by ChatGPT & GPTs</h1>
                    <div>
                        Delegate your Telegram account to GPT, reply message automatically on your
                        behalf.
                    </div>
                </div>
                <div class="try">
                    <div class="sub-title">
                        <h2>Try it now</h2>
                        <div>
                            Test it with this ready-to-use GPT Assistant and see how it works.
                        </div>
                    </div>
                    <div class="step">
                        <div class="title">Step 1</div>
                        <div class="desc">Change your reply bot instruction.</div>
                        <textarea
                            id="prompt"
                            rows="6"
                            cols="80"
                            style="margin-bottom: 12px"
                        ></textarea>
                        <div class="desc">Or select one from the GPTs.</div>
                        <select id="demoPromptSelect" @change="handlePromptSelectChange"></select>
                        <div style="text-align: center">
                            <button @click="handlePromptValueUpdate"> Update </button>
                        </div>
                    </div>
                    <div class="step">
                        <div class="title">Step 2</div>
                        <div class="desc">
                            Send a message to the Telegram id
                            <a href="https://t.me/telegpt001">telegpt001 </a>. It will automatically
                            answer your messages following the above instruction.
                        </div>
                    </div>
                </div>
                <div class="create">
                    <div class="sub-title">
                        <h2>Create your own GPT Assistant</h2>
                        <div> Submit your telegram number and instruction to GPT. </div>
                    </div>
                    <div class="form">
                        <div class="field">
                            <div class="title">Telegram Number*</div>
                            <input id="telegramNumberInput" type="text" />
                        </div>
                        <div class="field">
                            <div class="title"> Instruction to your GPT Assistant* </div>
                            <textarea id="customPromptTextarea" rows="6"></textarea>
                        </div>
                        <div class="field custom-operation submit" style="text-align: center">
                            <button
                                id="customSubmitButton"
                                @click="handleSubscribeButtonClick(false)"
                            >
                                Submit
                            </button>
                            <button
                                id="customUpdateButton"
                                @click="handleSubscribeButtonClick(true)"
                            >
                                Update
                            </button>
                        </div>
                        <div class="field tips">
                            <div class="success"> We will contact you as soon as possible. </div>
                            <div class="pending">Processing payment</div>
                            <div class="fail" style="color: red"> Payment failed </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    import Fingerprint2 from 'fingerprintjs2'

    const BASE_URL = 'https://api.workgpt.us'
    const TEL_NUMBER = 'example'

    const init = () => {
        initDemoData()
        initDemoOptions()
        initUserData()
        initRecord()
    }

    const initUserData = async () => {
        const orderNumber = getUrlParam('orderNo')

        if (!orderNumber) {
            return
        }

        const result = await getSubscribeStatus(orderNumber)

        if (result.telNumber) {
            const telegramNumberInput = document.querySelector('#telegramNumberInput')
            telegramNumberInput.value = result.telNumber

            if (result.payStatus !== -1) {
                telegramNumberInput.disabled = true

                document.querySelector('.custom-operation').className =
                    'field custom-operation update'
            }

            const agentsResult = await getTelAgents(result.telNumber)

            document.querySelector('#customPromptTextarea').value = agentsResult.prompt
        }

        document.querySelector('.field.tips').className =
            'field tips ' +
            (result.payStatus === 0 ? 'pending' : result.payStatus === -1 ? 'fail' : 'success')
    }

    const initDemoData = async () => {
        const result = await getTelAgents(TEL_NUMBER)

        document.querySelector('#prompt').value = result.prompt
    }

    const initDemoOptions = async () => {
        const result = await getOptions()

        document.querySelector('#demoPromptSelect').innerHTML = result.reduce((pre, item) => {
            pre += `
                        <option value="${item.prompt}">${item.name}</option>
                    `
            return pre
        }, '<option value="">Select A GPT</option>')
    }

    const initRecord = async () => {
        await fetch(BASE_URL + '/api/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'telegpts',
                code: 'open',
                ext1: await createFingerprint()
            })
        })
    }

    const createFingerprint = async () => {
        const components = await Fingerprint2.getPromise()
        const values = components.map(component => component.value)
        return Fingerprint2.x64hash128(values.join(''), 31)
    }

    const getUrlParam = name => {
        const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象\
        const r = window.location.search.substr(1).match(reg) // 匹配目标参数
        if (r != null) {
            return unescape(r[2])
        }
        return null // 返回参数值
    }

    const getOptions = async () => {
        const fetchResult = await fetch(BASE_URL + '/api/tel_agents', {
            method: 'GET'
        })
        const result = await fetchResult.json()

        if (result.code !== 200) {
            alert('Network error, please try again.')
            return Promise.reject(new Error('Network error, please try again.'))
        }

        return result.data
    }

    const saveTelAgents = async (telNumber, prompt) => {
        const fetchResult = await fetch(BASE_URL + '/api/tel_agents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                telNumber,
                prompt
            })
        })
        const result = await fetchResult.json()

        if (result.code !== 200) {
            alert('Network error, please try again.')
            return Promise.reject(new Error('Network error, please try again.'))
        }
    }

    const updateTelAgents = async (telNumber, prompt) => {
        const fetchResult = await fetch(BASE_URL + '/api/tel_agents/' + telNumber, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt
            })
        })
        const result = await fetchResult.json()

        if (result.code === 200) {
            alert('Update Successfully!')
        } else {
            alert('Network error, please try again.')
        }
    }

    const getTelAgents = async telNumber => {
        const fetchResult = await fetch(BASE_URL + '/api/tel_agents/' + telNumber, {
            method: 'GET'
        })
        const result = await fetchResult.json()

        if (result.code !== 200) {
            alert('Network error, please try again.')
            return Promise.reject(new Error('Network error, please try again.'))
        }

        return result.data
    }

    const subscribe = async telNumber => {
        const fetchResult = await fetch(BASE_URL + '/api/tel_subs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                telNumber,
                backUrl: window.location.origin + window.location.pathname
            })
        })
        const result = await fetchResult.json()

        if (result.code !== 200) {
            alert('Network error, please try again.')
            return Promise.reject(new Error('Network error, please try again.'))
        }

        window.open(result.data.url)
    }

    const getSubscribeStatus = async orderNumber => {
        const fetchResult = await fetch(BASE_URL + '/api/tel_subs/' + orderNumber, {
            method: 'GET'
        })
        const result = await fetchResult.json()

        if (result.code !== 200) {
            alert('Network error, please try again.')
            return Promise.reject(new Error('Network error, please try again.'))
        }

        return result.data
    }

    const handlePromptValueUpdate = async () => {
        const prompt = document.querySelector('#prompt').value
        await updateTelAgents(TEL_NUMBER, prompt)
    }

    const handleSubscribeButtonClick = async (isUpdate = false) => {
        const telegramNumber = document.querySelector('#telegramNumberInput').value
        const customPrompt = document.querySelector('#customPromptTextarea').value

        if (!telegramNumber) {
            alert('Please enter telegram number.')
            return
        }

        if (!customPrompt) {
            alert('Please enter instruction.')
            return
        }

        if (isUpdate) {
            await updateTelAgents(telegramNumber, customPrompt)
        } else {
            await saveTelAgents(telegramNumber, customPrompt)
            await subscribe(telegramNumber)
        }
    }

    const handlePromptSelectChange = event => {
        event.target.value && (document.querySelector('#prompt').value = event.target.value)
    }

    onMounted(() => {
        init()
    })
</script>

<style lang="less">
    .container {
        max-width: 940px;
        margin: 0 auto;
        padding: 120px 0;
    }

    .container > .main-title {
        margin-bottom: 64px;
    }

    .container > .main-title > h1 {
        color: #1a1a1a;
        text-align: center;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 48px;
        font-weight: 700;
        line-height: 62.4px;
        letter-spacing: -1.156px;
        max-width: 742px;
        margin: 0 auto;
    }

    .container > .main-title > div {
        color: #000;
        text-align: center;
        font-size: 20px;
        font-weight: 450;
        line-height: 30px;
        max-width: 418px;
        margin: 24px auto 0;
    }

    .sub-title > h2 {
        color: var(--base-gray, #000);
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        margin: 0;
    }

    .sub-title > div {
        color: var(--base-gray, #000);
        text-align: center;
        font-size: 14px;
        font-weight: 450;
        line-height: 20px;
        margin-top: 16px;
    }

    .try > .step {
        margin-top: 24px;
    }

    .try > .step > .title {
        margin-bottom: 12px;
        color: var(--gray-700, #272d37);
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        /* 142.857% */
        letter-spacing: -0.28px;
    }

    .try > .step > .desc {
        margin-bottom: 12px;
        color: var(--gray-50, #5f6d7e);
        font-size: 14px;
        font-weight: 450;
        line-height: 24px;
        /* 171.429% */
        letter-spacing: -0.1px;
    }

    input {
        height: 38px;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid var(--base-gray-2, #ccc);
        background: var(--base-white, #fff);
    }

    button {
        padding: 16px 24px;
        border-radius: 70px;
        background: #0056f5;
        color: #ffffff;
        border: unset;
        cursor: pointer;
    }

    .create {
        margin-top: 64px;
    }

    .create > .form > .field {
        margin-top: 24px;
    }

    .create > .form > .field > .title {
        color: #000;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        /* 142.857% */
        margin-bottom: 8px;
    }

    textarea {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid var(--base-gray-2, #ccc);
        background: var(--base-white, #fff);
    }

    .custom-operation.submit > #customSubmitButton {
        display: inline-block;
    }
    .custom-operation.submit > #customUpdateButton {
        display: none;
    }

    .custom-operation.update > #customSubmitButton {
        display: none;
    }
    .custom-operation.update > #customUpdateButton {
        display: inline-block;
    }

    .field.tips {
        text-align: center;
    }
    .field.tips > div {
        display: none;
    }
    .field.tips.pending > .pending {
        display: block;
    }
    .field.tips.success > .success {
        display: block;
    }
    .field.tips.fail > .fail {
        display: block;
    }

    select {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 12px;
    }
</style>
