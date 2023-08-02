<template>
    <view class="content">
        <view class="text-area" v-for="item in list">
            <navigator :url="item.link">{{ item.text }}</navigator>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello',
            list: [{ text: 'Collapse 折叠面板', link: '/pages/components/collapse' }]
        };
    },
    onLoad() {},
    methods: {}
};
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
