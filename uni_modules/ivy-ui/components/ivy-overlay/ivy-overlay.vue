<template>
    <uni-transition mode-class="fade" :custom-class="showMask ? 'ivy-overlay is-mask' : 'ivy-overlay'" :show="visible" @click="handlerMaskClick">
        <slot></slot>
    </uni-transition>
</template>

<script>
export default {
    props: {
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
    },
    emits: ['close', 'update:modelValue'],
    methods: {
        handlerMaskClick() {
            if (this.showMask && this.maskClosable) {
                this.$emit('update:modelValue', false);
                this.$emit('close');
            }
        }
    },
    computed: {
        visible() {
            return this.modelValue;
        }
    }
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
    opacity: 0;
    transition: opacity 3s ease-out;
    &.is-show {
        opacity: 1;
    }
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
