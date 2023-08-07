<template>
    <view class="demo">
        <view class="demo-title">
            <slot name="title">{{ title }}</slot>
        </view>
        <view class="demo-description" v-if="$attrs.description || description">
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
        font-size: 36rpx;
    }
    &-description {
        color: $uni-text-color-grey;
		margin-top: 24rpx;
        & text {
            background-color: $uni-bg-color-grey;
            color: $uni-color-primary;
        }
    }
	&-content {
		margin-top: 24rpx;
	}
}
</style>
