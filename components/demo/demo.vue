<template>
    <view class="demo">
        <view class="demo-title">
            <slot name="title">{{ title }}</slot>
        </view>
        <view class="demo-description">
            <slot name="description">{{ description }}</slot>
        </view>
        <view class="demo-content">
            <slot></slot>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        title: String,
        description: String
    }
};
</script>

<style scoped lang="scss">
.demo {
    box-sizing: border-box;
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
