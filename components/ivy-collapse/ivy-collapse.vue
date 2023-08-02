<template>
    <view class="ivy-collapse">
        <slot></slot>
    </view>
</template>

<script setup>
import { ref, provide } from 'vue';
import useIndex from '@/use/useIndex.js';
// defineOptions({
//     name: 'Collapse'
// });

const props = defineProps({
    modelValue: [String, Number, Array],
    accordion: Boolean,
    arrow: {
        type: String,
        validator(value) {
            return ['right', 'none'].includes(value);
        }
    }
});

const emit = defineEmits(['update:modelValue']);

const value = ref(props.modelValue);
if (!props.modelValue) {
    value.value = props.accordion ? null : [];
}

provide('arrow', props.arrow);
provide('accordion', props.accordion);
provide('value', value);
/**对 没有设置 props.index 的collapseItem 生成唯一index */
const { nextIndex } = useIndex();

provide('nextIndex', nextIndex);

provide('update', (index) => {
    console.log('collapse', index, props.accordion);
    if (props.accordion) {
        value.value = value.value === index ? null : index;
        emit('update:modelValue', value.value);
    } else {
        const has = value.value.includes(index);
        if (has) {
            value.value = value.value.filter((c) => c !== index);
        } else {
            value.value = [...value.value, index];
        }
        emit('update:modelValue', value.value);
    }
});
</script>

<style lang="scss">
.ivy-collapse {
    background-color: #f7f7f7;
    border-radius: 4px;
    border: 1px solid #dcdee2;
}
</style>
