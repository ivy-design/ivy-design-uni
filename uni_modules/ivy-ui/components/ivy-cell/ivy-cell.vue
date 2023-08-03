<script setup>
import { computed, useSlots, inject } from 'vue';

const props = defineProps({
    title: String,
    name: [String, Number],
    to: [String, Object],
    replace: Boolean,
    icon: String,
    label: String,
    extra: String,
    isLink: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    selected: {
        type: Boolean,
        default: false
    },
    target: {
        type: String,
        default: '_self'
    }
});

const border = inject('border');

const handleClick = () => {
    emit('click', props.name);
};

const extraStyle = computed(() => {
    const flag = !!props.to || props.isLink || !!slots.arrow;
    return {
        right: flag ? '32px' : '0px'
    };
});

const slots = useSlots();
</script>

<template>
    <view :class="['ivy-cell', { 'is-disabled': props.disabled, 'is-border': border, 'is-selected': props.selected }]">
        <view class="ivy-cell__main" @click="handleClick">
            <navigator v-if="props.to" :url="props.to" class="ivy-cell-item">
                <view class="ivy-cell-text">
                    <view class="ivy-cell-title">
                        <slot name="title">{{ props.title }}</slot>
                    </view>
                    <view v-if="slots.label || props.label" class="ivy-cell-label">
                        <slot name="label">{{ props.label }}</slot>
                    </view>
                </view>
                <view class="ivy-cell-extra" :style="extraStyle">
                    <slot name="extra">{{ props.extra }}</slot>
                </view>
            </navigator>
            <view v-else class="ivy-cell-item">
                <view class="ivy-cell-text">
                    <view class="ivy-cell-title">
                        <slot name="title">{{ props.title }}</slot>
                    </view>
                    <view v-if="slots.label || props.label" class="ivy-cell-label">
                        <slot name="label">{{ props.label }}</slot>
                    </view>
                </view>
                <view class="ivy-cell-extra" :style="extraStyle">
                    <slot name="extra">{{ props.extra }}</slot>
                </view>
            </view>
        </view>
        <view v-if="slots.arrow || props.to || props.isLink" class="ivy-cell__arrow">
            <ivy-icon name="arrow-right"></ivy-icon>
        </view>
    </view>
</template>

<style lang="scss">
.ivy-cell {
    position: relative;
    box-sizing: border-box;
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: #515a6e;
    font-size: 12px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &.is-border {
        & + & {
            border-top: 1px solid #f3f3f3;
        }
    }
    &:focus {
        background: #f3f3f3;
        outline: 0;
    }
    &:hover {
        background: #f3f3f3;
    }
    &__main {
        color: inherit;
        box-sizing: inherit;
        &:active,
        &:hover {
            color: inherit;
        }
    }
    &-item {
        color: inherit;
        &:active,
        &:hover {
            color: inherit;
        }
    }
    &-text {
        line-height: 24px;
        font-size: 14px;
    }
    &-label {
        line-height: 1.2;
        font-size: 12px;
        color: #808695;
    }
    &-icon {
        display: inline-block;
        margin-right: 4px;
        font-size: 14px;
        vertical-align: middle;
    }
    &-title {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
    }
    &-extra {
        display: inline-block;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 16px;
        color: #515a6e;
    }
    &__arrow {
        display: inline-flex;
        position: absolute;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        top: 50%;
        right: 16px;
        font-size: 14px;
        align-items: center;
    }
    &.is-disabled {
        color: #c5c8ce;
        cursor: not-allowed;
        &:hover {
            color: #c5c8ce;
            cursor: not-allowed;
        }
    }
    &.is-selected {
        color: $uni-color-primary;
        background-color: #f0faff;
        :hover {
            background-color: #f0faff;
        }
    }
}
</style>
