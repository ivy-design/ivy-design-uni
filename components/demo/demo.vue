<template>
    <view class="demo">
        <view class="demo-title">
            <slot name="title">{{ props.title }}</slot>
        </view>
        <view class="demo-description">
            <slot name="description">{{ props.description }}</slot>
        </view>
        <view class="demo-content">
            <slot></slot>
        </view>
    </view>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String
});
</script>

<style scoped lang="scss">
.demo {
    padding: 24rpx;
    font-size: 24rpx;
    &-title {
        font-size: 28rpx;
    }
    &-description {
        color: $uni-text-color-grey;
        & text {
            background-color: $uni-bg-color-grey;
            color: $uni-color-primary;
        }
    }
}
</style>
