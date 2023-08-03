<template>
    <transition name="collapse-transition" v-on="on">
        <slot />
    </transition>
</template>
<script setup>
/* 来自 ElementPlus 开源项目 */
const reset = (el) => {
    el.style.maxHeight = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
};

const on = {
    beforeEnter(el) {
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
    },

    enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
        } else {
            el.style.maxHeight = 0;
        }
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.overflow = 'hidden';
    },

    afterEnter(el) {
        el.style.maxHeight = '';
        el.style.overflow = el.dataset.oldOverflow;
    },

    enterCancelled(el) {
        reset(el);
    },

    beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = 'hidden';
    },

    leave(el) {
        if (el.scrollHeight !== 0) {
            el.style.maxHeight = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
    },

    afterLeave(el) {
        reset(el);
    },

    leaveCancelled(el) {
        reset(el);
    }
};
</script>

<style lang="scss">
.collapse-transition {
    transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}

.collapse-transition-leave-active,
.collapse-transition-enter-active {
    transition: 0.3s max-height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}

.horizontal-collapse-transition {
    transition: 0.3s width ease-in-out, 0.3s padding-left ease-in-out, 0.3s padding-right ease-in-out;
}
</style>
