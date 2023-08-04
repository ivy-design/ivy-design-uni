<script>
export default {
    props: {
        border: Boolean
    },
    provide() {
        return {
            border: this.border
        };
    }
};
</script>

<template>
    <view class="ivy-cell-group" :class="{ 'is-border': border }">
        <slot></slot>
    </view>
</template>

<style lang="scss">
.ivy-cell-group {
    border-radius: 4rpx;
    width: 100%;
    max-width: 100%;
}

.ivy-cell-group.is-border > .ivy-cell {
    border-top: 1px solid $uni-border-color;
}
</style>
