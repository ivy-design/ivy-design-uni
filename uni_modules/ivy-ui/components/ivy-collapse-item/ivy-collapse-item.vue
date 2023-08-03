<template>
    <view :class="['ivy-collapse-item', { 'ivy-collapse-item-active': isActive }]">
        <view class="ivy-collapse-item__header" @click="handleChange">
            <ivy-icon name="arrow-right" :class="['ivy-icon-right', `ivy-collapse-arrow-${arrowPosition}`]"></ivy-icon>
            <text>
                <slot name="header">{{ props.header }}</slot>
            </text>
        </view>
        <ivy-collapse-transition>
            <view v-show="isActive" class="ivy-collapse-item__wrap">
                <view class="ivy-collapse-item__wrap-box">
                    <slot></slot>
                </view>
            </view>
        </ivy-collapse-transition>
    </view>
</template>

<script setup>
import { inject, computed, ref } from 'vue';

const props = defineProps({
    header: String,
    index: [String, Number]
});

const arrowPosition = inject('arrow');
const collapseValue = inject('value');
const accordion = inject('accordion');
const update = inject('update');

const nextIndex = inject('nextIndex');

const index = props.index ? ref(props.index) : nextIndex();

const isActive = computed(() => {
    if (accordion) {
        return index.value === collapseValue.value;
    } else {
        return collapseValue.value?.includes(index);
    }
});

const handleChange = () => {
    update(index);
};
</script>

<style lang="scss">
.ivy-collapse-item {
    position: relative;
    & + & {
        border-top: 1px solid #dcdee2;
    }
    &__header {
        height: 64rpx;
        line-height: 64rpx;
        padding-left: 24rpx;
        color: #666;
        cursor: pointer;
        position: relative;
        border-bottom: 1px solid transparent;
        font-size: 28rpx;
        display: flex;
        align-items: center;
        transition: all 0.3s;
        & > .ivy-icon-right {
            will-change: transform;
            transform-origin: center center;
            transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
        }
        & > .ivy-collapse-arrow-left {
            margin-right: 16rpx;
        }
        & > .ivy-collapse-arrow-right {
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -14rpx;
            margin-right: 32rpx;
        }
        & > .ivy-collapse-arrow-none {
            display: none;
        }
    }
    &__wrap {
        color: #515a6e;
        padding: 0 24rpx;
        background-color: #ffffff;
        box-sizing: border-box;
        font-size: 13px;
        will-change: height;
        overflow: hidden;
        transition: all 0.3s;
        &-box {
            padding: 24rpx 0;
        }
    }
}
.ivy-collapse-item-active {
    .ivy-collapse-item__header {
        border-bottom-color: #dcdee2;
        & > .ivy-icon-right {
            transform: rotateZ(90deg);
        }
    }
}
</style>
