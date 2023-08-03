<template>
    <view class="page">
        <view class="demo">
            <view class="title">基础用法</view>
            <view class="demo-block">
                <ivy-collapse>
                    <ivy-collapse-item header="标题-1">顶顶顶顶顶</ivy-collapse-item>
                    <ivy-collapse-item header="标题-2">大法师大法师</ivy-collapse-item>
                    <ivy-collapse-item header="标题-3">大法师大法师</ivy-collapse-item>
                </ivy-collapse>
            </view>
        </view>
        <view class="demo">
            <view class="title">更改箭头的位置</view>
            <view class="demo-block">
                <ivy-collapse arrow="right">
                    <ivy-collapse-item header="标题-1">顶顶顶顶顶</ivy-collapse-item>
                    <ivy-collapse-item header="标题-2">大法师大法师</ivy-collapse-item>
                    <ivy-collapse-item header="标题-3">大法师大法师</ivy-collapse-item>
                </ivy-collapse>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss"></style>
