<template>
    <teleport to="body">
        <transition name="ivy-popup">
            <view :class="['ivy-popup', { 'is-mask': props.showMask }, ...(attrs?.class ?? [])]" v-show="visible" @click.stop="handlerMaskClick">
                <view :class="['ivy-popup__inner', 'ivy-as']">
                    <view class="ivy-as-header" v-if="slots.header || props.header">
                        <slot name="header">{{ props.header }}</slot>
                    </view>
                    <view class="ivy-as-action">
                        <view
                            v-for="(item, index) in actions"
                            :key="item.name"
                            @click.stop="handleClickItem(item)"
                            :class="['ivy-as-action-item', { 'is-disabled': item.disabled }]"
                        >
                            <slot :item="item">
                                <ivy-icon v-if="item.icon" :name="item.icon" class="ivy-as-btn-icon"></ivy-icon>
                                <view class="ivy-as-btn-text" :style="item.color ? 'color: ' + item.color : ''">{{ item.name }}</view>
                            </slot>
                        </view>
                    </view>
                    <view class="ivy-as-cancel" v-if="props.showCancel === true">
                        <view class="ivy-as-divider"></view>
                        <view @click.stop="handleClickCancel" class="ivy-as-cancel-btn">{{ props.cancelText }}</view>
                    </view>
                </view>
            </view>
        </transition>
    </teleport>
</template>

<script setup>
import { ref, computed, useAttrs, watch, useSlots } from 'vue';
const emit = defineEmits(['on-mask-click', 'update:modelValue', 'action', 'closed', 'opened']);
const attrs = useAttrs();
const slots = useSlots();

const props = defineProps({
    modelValue: Boolean,
    showMask: {
        type: Boolean,
        default: true
    },
    maskClosable: {
        type: Boolean,
        default: true
    },
    showCancel: {
        type: Boolean,
        default: false
    },
    cancelText: {
        type: String,
        default: '取消'
    },
    actions: {
        type: Array,
        /**
         * @typedef Action
         * @property { String } name ActionItem 显示的名字
         * @property { String } action 点击 ActionItem 回调的参数
         * @property { String } icon ActionItem 文字前的图标
         * @property { String } color ActionItem 的字体颜色
         * @property { Boolean } disabled 当前 ActionItem 是否可点击
         */
        /**
         * @return { Action[] }
         */
        default() {
            return [];
        }
    },
    header: String
});

const visible = computed(() => {
    return props.modelValue;
});

const handlerMaskClick = () => {
    if (props.showMask && props.maskClosable) {
        emit('update:modelValue', false);
        emit('closed', 'close');
    }
};

const handleClickItem = (item) => {
    if (item.disabled) {
        return false;
    }
    emit('action', item.action ?? null);
    emit('update:modelValue', false);
    emit('closed', 'close');
};
const handleClickCancel = () => {
    emit('closed', 'cancel');
};

watch(
    () => props.modelValue,
    (val) => {
        if (val) {
            emit('opened');
        }
    }
);
</script>

<style scoped lang="scss">
.ivy-popup {
    position: fixed;
    width: 750rpx;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;

    &.is-mask {
        background-color: rgba(0, 0, 0, 0.6);
    }

    &__inner {
        background-color: #ffffff;
        position: absolute;
        bottom: 0;
        left: 0;
        max-height: 100%;
        width: 750rpx;
        height: fit-content;
        border-top: 1px solid $uni-border-color;
        box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.2);
    }

    &-enter-active,
    &-leave-active {
        transition: opacity 0.3s ease;
        & .ivy-popup__inner {
            transition: transform 0.3s ease-in-out;
        }
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        .ivy-popup__inner {
            transform: translateY(100%);
        }
    }

    &-leave-from,
    &-enter-to {
        opacity: 1;
        .ivy-popup__inner {
            transform: translateY(0);
        }
    }
}

.ivy-as {
    font-size: 24rpx;
    &-header {
        background: #fff;
        text-align: center;
        position: relative;
        color: #80848f;
        font-size: 28rpx;
        line-height: 28px;
        padding: 12rpx 0;
    }
    &-action {
        background-color: #ffffff;
        &-item {
            position: relative;
            line-height: 88rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background-color: $uni-bg-color-hover;
            }
            &.is-disabled {
                color: $uni-text-color-disable;
                &:hover {
                    background-color: #fff;
                }
            }
            // & + &::before {
            //     content: '';
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     width: 200%;
            //     height: 200%;
            //     transform: scale(0.5);
            //     transform-origin: 0 0;
            //     pointer-events: none;
            //     box-sizing: border-box;
            //     border: 0 solid $uni-border-color;
            //     border-top-width: 1px;
            // }
        }
    }
    &-divider {
        background-color: $uni-bg-color-grey;
        height: 12rpx;
    }
    &-cancel {
        position: relative;
        &-btn {
            line-height: 88rpx;
            text-align: center;
            background-color: #ffffff;
            &:hover {
                background-color: $uni-bg-color-hover;
            }
        }
    }
}

.ivy-as-header::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    border: 0 solid $uni-border-color;
    border-bottom-width: 1px;
}

.ivy-as-btn-loading {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    background: 0 0;
    border-radius: 50%;
    border: 2px solid #e5e5e5;
    border-color: #666 #e5e5e5 #e5e5e5 #e5e5e5;
    animation: btn-spin 0.6s linear;
    animation-iteration-count: infinite;
}

.ivy-as-btn-text {
    display: inline-block;
    vertical-align: middle;
}

.ivy-as-btn-icon {
    font-size: 14px !important;
    margin-right: 4px;
}

@keyframes btn-spin {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
