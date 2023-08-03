<template>
    <view class="content">
        <ivy-cell-group border>
            <ivy-cell title="Icon 图标" to="/pages/components/icon"></ivy-cell>
            <ivy-cell title="Collapse 折叠面板" to="/pages/components/collapse"></ivy-cell>
            <ivy-cell title="Overlay 遮罩层" to="/pages/components/overlay"></ivy-cell>
            <ivy-cell title="Popup 弹出层" to="/pages/components/popup"></ivy-cell>
        </ivy-cell-group>
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

<style></style>
