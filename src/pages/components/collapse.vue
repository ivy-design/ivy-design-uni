<template>
    <view class="page">
        <view>Collapse 折叠面板</view>

        <view class="demo-block">
            <ivy-collapse>
                <ivy-collapse-item header="标题">顶顶顶顶顶</ivy-collapse-item>
                <ivy-collapse-item header="标题">大法师大法师</ivy-collapse-item>
            </ivy-collapse>
        </view>
    </view>
</template>

<script>
import Collapse from '@/components/collapse/collapse.vue';
import CollapseItem from '@/components/collapse/collapse-item.vue';
export default {
    components: {
        'ivy-collapse': Collapse,
        'ivy-collapse-item': CollapseItem
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss"></style>
