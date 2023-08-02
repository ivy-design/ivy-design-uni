<script setup>
import { computed, useSlots } from 'vue';

defineOptions({
    name: 'Cell'
});

const props = defineProps({
    title: String,
    name: [String, Number],
    to: [String, Object],
    replace: Boolean,
    icon: String,
    label: String,
    extra: String,
    isLink: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    selected: {
        type: Boolean,
        default: false
    },
    target: {
        type: String,
        default: '_self'
    }
});

const handleClick = () => {
    emit('click', props.name);
};

const extraStyle = computed(() => {
    const flag = !!props.to || props.isLink || !!slots.arrow;
    return {
        right: flag ? '32px' : '0px'
    };
});

const slots = useSlots();
</script>

<template>
    <view :class="['ivy-cell', { 'is-disabled': props.disabled }, { 'is-selected': props.selected }]">
        <view class="ivy-cell__main" @click="handleClick">
            <navigator v-if="props.to" :url="props.to" class="ivy-cell-item">
                <view class="ivy-cell-text">
                    <view class="ivy-cell-title">
                        <slot name="title">{{ props.title }}</slot>
                    </view>
                    <view v-if="slots.label || props.label" class="ivy-cell-label">
                        <slot name="label">{{ props.label }}</slot>
                    </view>
                </view>
                <view class="ivy-cell-extra" :style="extraStyle">
                    <slot name="extra">{{ props.extra }}</slot>
                </view>
            </navigator>
            <view v-else class="ivy-cell-item">
                <view class="ivy-cell-text">
                    <view class="ivy-cell-title">
                        <slot name="title">{{ props.title }}</slot>
                    </view>
                    <view v-if="slots.label || props.label" class="ivy-cell-label">
                        <slot name="label">{{ props.label }}</slot>
                    </view>
                </view>
                <view class="ivy-cell-extra" :style="extraStyle">
                    <slot name="extra">{{ props.extra }}</slot>
                </view>
            </view>
        </view>
        <view v-if="slots.arrow || props.to || props.isLink" class="ivy-cell__arrow">&gt;</view>
    </view>
</template>
