<template>
    <view class="ivy-collapse">
        <slot></slot>
    </view>
</template>

<script>
import { ref, provide, toRef } from 'vue';
import useIndex from '../../use/useIndex.js';

export default {
	props: {
		modelValue: [String, Number, Array],
		accordion: Boolean,
		arrow: {
		    type: String,
		    default: 'left',
		    validator(val) {
		        return ['left', 'right', 'none'].includes(val);
		    }
		}
	},
	setup(props, { emit }){
		const value = ref(props.modelValue)
		if(!value.value){
			value.value = props.accordion ? null : []
		}
		const { nextIndex } = useIndex()
		
		provide('accordion', toRef(props, 'accordion'))
		provide('arrow', toRef(props, 'arrow'))
		provide('value', value)
		provide('nextIndex', nextIndex)
		provide('update', index => {
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
			})
	},
	emits: ['update:modelValue']
}
</script>

<style lang="scss">
.ivy-collapse {
    background-color: #f7f7f7;
    border-radius: 4px;
    border: 1px solid #dcdee2;
}
</style>
