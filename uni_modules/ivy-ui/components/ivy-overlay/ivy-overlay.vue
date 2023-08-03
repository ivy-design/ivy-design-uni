<template>
    <teleport to="body">
        <transition name="ivy-overlay">
            <view :class="['ivy-overlay', { 'is-mask': props.showMask }]" v-show="visible" @click.stop="handlerMaskClick">
                <view class="ivy-overlay__inner">
                    <slot></slot>
                </view>
            </view>
        </transition>
    </teleport>
</template>

<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['on-mask-click', 'update:modelValue']);

const props = defineProps({
    modelValue: Boolean,
    showMask: {
        type: Boolean,
        default: true
    },
    width: {
        type: String,
        default: '90%'
    },
    maskClosable: {
        type: Boolean,
        default: true
    }
});

const visible = computed(() => {
    return props.modelValue;
});
const handlerMaskClick = () => {
    if (props.showMask && props.maskClosable) emit('update:modelValue', false);
};
</script>

<style lang="scss">
.ivy-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    &__inner {
        background-color: #ffffff;
    }

    &-enter-active,
    &-leave-active {
        transition: opacity 0.3s ease;
        .ivy-overlay__inner {
            transition: transform 0.3s ease-in;
        }
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        .ivy-overlay__inner {
            transform: scale(0);
        }
    }

    &-leave-from,
    &-enter-to {
        opacity: 1;
        .ivy-overlay__inner {
            transform: scale(1);
        }
    }
}
</style>
