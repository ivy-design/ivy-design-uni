<template>
    <teleport to="body">
        <transition name="ivy-popup">
            <view :class="['ivy-popup', { 'is-mask': props.showMask }, ...(attrs?.class ?? [])]" v-show="visible" @click.stop="handlerMaskClick">
                <view :class="['ivy-popup__inner', `is-${props.placement}`]" :style="size">
                    <slot></slot>
                </view>
            </view>
        </transition>
    </teleport>
</template>

<script setup>
import { ref, computed, useAttrs } from 'vue';
const emit = defineEmits(['on-mask-click', 'update:modelValue']);
const attrs = useAttrs();

const props = defineProps({
    modelValue: Boolean,
    showMask: {
        type: Boolean,
        default: true
    },
    size: {
        type: String,
        default: '50%'
    },
    maskClosable: {
        type: Boolean,
        default: true
    },
    placement: {
        type: String,
        default: 'bottom'
    }
});

const visible = computed(() => {
    return props.modelValue;
});

const handlerMaskClick = () => {
    if (props.showMask && props.maskClosable) emit('update:modelValue', false);
};

const size = computed(() => {
    const isX = ['left', 'right'].includes(props.placement);
    if (isX) {
        return {
            width: props.size
        };
    } else {
        return {
            height: props.size
        };
    }
});
</script>

<style lang="scss">
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
        &.is-top {
            top: 0;
            left: 0;
            max-height: 100%;
            width: 750rpx;
            height: 400rpx;
            border-bottom: 1px solid $uni-border-color;
            box-shadow: 0 -2px 6px 2px rgba(0, 0, 0, 0.2);
        }
        &.is-bottom {
            bottom: 0;
            left: 0;
            max-height: 100%;
            width: 750rpx;
            height: 400rpx;
            border-top: 1px solid $uni-border-color;
            box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.2);
        }
        &.is-left {
            left: 0;
            top: 0;
            max-width: 100%;
            height: 100%;
            width: 50%;
            border-right: 1px solid $uni-border-color;
            box-shadow: -2px 0 6px 2px rgba(0, 0, 0, 0.2);
        }
        &.is-right {
            right: 0;
            top: 0;
            max-width: 100%;
            height: 100%;
            width: 50%;
            border-left: 1px solid $uni-border-color;
            box-shadow: 2px 0 6px 2px rgba(0, 0, 0, 0.2);
        }
    }

    &-enter-active,
    &-leave-active {
        transition: opacity 0.3s ease;
        & .ivy-popup__inner {
            transition: transform 0.3s;
        }
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        .ivy-popup__inner.is-left {
            transform: translateX(-100%);
        }
        .ivy-popup__inner.is-right {
            transform: translateX(100%);
        }
        .ivy-popup__inner.is-top {
            transform: translateY(-100%);
        }
        .ivy-popup__inner.is-bottom {
            transform: translateY(100%);
        }
    }

    &-leave-from,
    &-enter-to {
        opacity: 1;
        .ivy-popup__inner.is-left {
            transform: translateX(0);
        }
        .ivy-popup__inner.is-right {
            transform: translateX(0);
        }
        .ivy-popup__inner.is-top {
            transform: translateY(0);
        }
        .ivy-popup__inner.is-bottom {
            transform: translateY(0);
        }
    }
}
</style>
