<template>
    <div class="schedule-dialog">
        <el-dialog v-model="dialogShow" destroy-on-close width="615px">
            <div class="title">Schedule for a Demo</div>
            <div class="sub-title">Schedule to get notified of the latest demo we release.</div>
            <div class="input">
                <SvgIcon name="EnvelopeSimple" />
                <input v-model="email" type="text" placeholder="Email" style="flex: 1" />
            </div>
            <div class="input">
                <SvgIcon name="Frame" />
                <el-date-picker
                    v-model="time"
                    type="datetime"
                    placeholder="Please enter preferred demo time"
                    style="flex: 1"
                />
            </div>
            <div v-loading="loading" class="button" @click="handleScheduleBtnClick">
                Schedule for a Demo
            </div><br />
            <NuxtLink class="link" to="https://chat.workgpt.us/register">
                or <span>start a free trial</span>
            </NuxtLink>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
    import { ElMessage } from 'element-plus'

    const dialogShow = ref(false)
    const email = ref('')
    const time = ref('')
    const loading = ref(false)

    defineExpose({
        show: () => {
            dialogShow.value = true
        }
    })

    const handleScheduleBtnClick = async () => {
        if (!email.value || !time.value) {
            return ElMessage.error('Please complete the form.')
        }

        const reg = /^[A-Za-z0-9\u4E00-\u9FA5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/
        if (!reg.test(email.value)) {
            return ElMessage.error('Please enter the correct email address.')
        }

        try {
            loading.value = true

            await fetch('https://api.workgpt.us/api/subscribe', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email.value,
                    time: time.value,
                    type: 'Schedule'
                })
            })

            ElMessage.success('Succeed.')
            dialogShow.value = false
        } catch (error: any) {
            ElMessage.error(error.message)
        } finally {
            loading.value = false
        }
    }
</script>

<style scoped lang="less">
    .schedule-dialog {
        :deep(.el-dialog__headerbtn) {
            top: 11px;
            right: 11px;
        }
        :deep(.el-icon.el-dialog__close) {
            font-size: 24px;
        }
        :deep(.el-dialog) {
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }
        :deep(.el-dialog__header) {
            padding: 0;
        }
        :deep(.el-dialog__body) {
            padding: 48px 40px 40px;
        }
        .title {
            color: @default-font-color;
            font-family: Poppins;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: 36.8px;
            letter-spacing: -1px;
        }
        .sub-title {
            color: @default-font-color;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 22.5px;
            margin-top: 8px;
            margin-bottom: 28px;
        }
        .input {
            display: flex;
            padding: 18px 20px;
            border-radius: 12px;
            border: 1px solid var(--deviders-grey, #d8d8d8);
            background: #fff;
            & + .input {
                margin-top: 10px;
            }
            svg {
                height: 20px;
                width: 20px;
                padding-right: 8px;
                border-right: 1px solid #dbe3ff;
            }
            :deep(input) {
                border: none;
                box-shadow: none;
                outline: none;
                margin-left: 12px;
                &::placeholder {
                    font-family: Mulish;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                    color: @default-font-color;
                }
            }
            :deep(.el-input__wrapper) {
                box-shadow: none;
                padding: 0;
            }
            :deep(.el-date-editor) {
                height: 20px;
            }
            :deep(.el-input__prefix) {
                display: none;
            }
        }

        .button {
            cursor: pointer;
            display: inline-block;
            border-radius: 12px;
            background: @main-color;
            color: @color-white;
            text-align: center;
            font-feature-settings: 'liga' off;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            padding: 12px 40px;
            margin-top: 32px;
        }

        .link {
            display: inline-block;
            color: rgba(45, 45, 45, 0.5);
            font-feature-settings: 'liga' off;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            margin-top: 12px;
            span {
                text-decoration-line: underline;
            }
        }
    }
</style>
