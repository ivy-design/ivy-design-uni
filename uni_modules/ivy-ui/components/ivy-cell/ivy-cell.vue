<script>
export default {
    inject: ['border'],
    props: {
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
    },
    emits: ['click'],
    methods: {
        handleClick() {
            this.$emit('click', this.name);
        }
    },
    computed: {
        extraStyle() {
            const flag = !!this.to || this.isLink || !!this.$slots.arrow;
            return {
                right: flag ? '32px' : '0px'
            };
        }
    }
};
</script>

<template>
    <view :class="['ivy-cell', { 'is-disabled': disabled, 'is-border': border, 'is-selected': selected }]">
        <view class="ivy-cell__main" @click="handleClick">
            <navigator v-if="to" :url="to" class="ivy-cell-item">
                <ivy-icon v-if="$slots.icon || icon" :name="icon" class="ivy-cell-icon"></ivy-icon>
                <view class="ivy-cell-text">
                    <view class="ivy-cell-title">
                        <slot name="title">{{ title }}</slot>
                    </view>
                    <view v-if="$slots.label || label" class="ivy-cell-label">
                        <slot name="label">{{ label }}</slot>
                    </view>
                </view>
                <view class="ivy-cell-extra" :style="extraStyle">
                    <slot name="extra">{{ extra }}</slot>
                </view>
            </navigator>
            <view v-else class="ivy-cell-item">
                <ivy-icon v-if="$slots.icon || icon" :name="icon" class="ivy-cell-icon"></ivy-icon>
                <view class="ivy-cell-text">
                    <view class="ivy-cell-title">
                        <slot name="title">{{ title }}</slot>
                    </view>
                    <view v-if="$slots.label || label" class="ivy-cell-label">
                        <slot name="label">{{ label }}</slot>
                    </view>
                </view>
                <view class="ivy-cell-extra" :style="extraStyle">
                    <slot name="extra">{{ extra }}</slot>
                </view>
            </view>
        </view>
        <view v-if="$slots.arrow || to || isLink" class="ivy-cell__arrow">
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
    padding: 16rpx 24rpx;
    clear: both;
    color: #515a6e;
    font-size: 12px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    max-width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.is-border {
        & + & {
            border-top: 1px solid #f3f3f3;
        }
    }
    &:focus {
        background-color: #f3f3f3;
        outline: 0;
    }
    &:hover {
        background-color: #f3f3f3;
    }
    &__main {
        color: inherit;
        box-sizing: inherit;
        width: 100%;
        &:active,
        &:hover {
            color: inherit;
            background-color: #f3f3f3;
        }
    }
    &-item {
        color: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:active,
        &:hover {
            color: inherit;
            background-color: #f3f3f3;
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
    }
    &-title {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
    }
    &-extra {
        color: #515a6e;
    }
    &__arrow {
        display: inline-flex;
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
        &:hover {
            background-color: #f0faff;
        }
    }
}
</style>
