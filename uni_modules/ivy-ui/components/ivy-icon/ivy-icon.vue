<template>
    <svg class="icon" :style="styles">
        <slot>
            <use :href="`${svg}#icon-${props.name}`"></use>
        </slot>
    </svg>
</template>

<script setup>
import { computed } from 'vue';
import svg from './iconfont.svg';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    size: String,
    color: String
});

const styles = computed(() => {
    const sheet = {};
    if (props.color) {
        sheet['color'] = props.color;
    }
    if (props.size) {
        sheet['fontSize'] = props.size;
    }
    console.log(sheet);
    return sheet;
});
</script>

<style lang="scss">
.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
}
</style>
