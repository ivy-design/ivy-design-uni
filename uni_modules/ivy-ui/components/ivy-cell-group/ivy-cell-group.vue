<script setup>
import { provide, toRef } from 'vue';

const props = defineProps({
    border: Boolean
});

provide('border', toRef(props, 'border'));
</script>

<template>
    <view class="ivy-cell-group" :class="{ 'is-border': props.border }">
        <slot></slot>
    </view>
</template>

<style lang="scss">
.ivy-cell-group {
    border-radius: 4rpx;
}

.ivy-cell-group.is-border > .ivy-cell {
    border-top: 1px solid $uni-border-color;
}
</style>
