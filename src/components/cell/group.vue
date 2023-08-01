<script setup>
import { provide, toRef } from 'vue';

defineOptions({
    name: 'CellGroup'
});

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
.is-border {
    border: 1px solid #ddd;
}
</style>
