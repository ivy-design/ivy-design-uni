<template>
    <view :class="['ivy-collapse-item', { 'ivy-collapse-item-active': isActive }]">
        <view class="ivy-collapse-item__header" @click="handleChange">
            <!-- <Icon name="arrow-right" :class="['ivy-icon-right', `ivy-collapse-arrow-${arrowPosition}`]"></Icon> -->
            <text>
                <slot name="header">{{ props.header }}</slot>
            </text>
        </view>
        <CollapseTransition>
            <view v-show="isActive" class="ivy-collapse-item__wrap">
                <view class="ivy-collapse-item__wrap-box">
                    <slot></slot>
                </view>
            </view>
        </CollapseTransition>
    </view>
</template>

<script setup>
import { inject, computed, ref } from 'vue';
import CollapseTransition from '../collapse-transition/index.js';
// defineOptions({
//     name: 'CollapseItem'
// });

const props = defineProps({
    header: String,
    index: [String, Number]
});

const arrowPosition = inject('arrow');
const collapseValue = inject('value');
const accordion = inject('accordion');
const update = inject('update');

const nextIndex = inject('nextIndex');

const index = props.index ? ref(props.index) : nextIndex();

const isActive = computed(() => {
    if (accordion) {
        return index.value === collapseValue.value;
    } else {
        return collapseValue.value?.includes(index);
    }
});

const handleChange = () => {
    update(index);
};
</script>

<style lang="scss">
.ivy-collapse-item {
    position: relative;
    & + & {
        border-top: 1px solid #dcdee2;
    }
    &__header {
        height: 38px;
        line-height: 38px;
        padding-left: 16px;
        color: #666;
        cursor: pointer;
        position: relative;
        border-bottom: 1px solid transparent;
        font-size: 14px;
        display: flex;
        align-items: center;
        & > .ivy-icon-right {
            transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
            margin-right: 10px;
        }
        & > .ivy-icon-right.ivy-collapse-arrow-right {
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -7px;
            margin-right: 16px;
        }
        & > .ivy-icon-right.ivy-collapse-arrow-none {
            display: none;
        }
    }
    &__wrap {
        color: #515a6e;
        padding: 0 16px;
        background-color: #ffffff;
        box-sizing: border-box;
        font-size: 13px;
        will-change: height;
        /* overflow: hidden; */
        /* transition: all .3s; */
        &-box {
            padding: 16px 0;
        }
    }
}
.ivy-collapse-item-active {
    .ivy-collapse-item__header {
        border-bottom: 1px solid #dcdee2;
        & > .ivy-icon-right {
            transform: rotateZ(90deg);
        }
    }
}
</style>
