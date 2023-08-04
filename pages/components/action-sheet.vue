<template>
    <view>
        <demo title="基础用法">
            <button @click="handlerClick">点击打开</button>
            <ivy-action-sheet v-model="visible" :actions="actions" show-cancel header="Action Sheet 标题"></ivy-action-sheet>
        </demo>
        <demo title="显示取消按钮" description="通过设置 showCancel 来显示取消按钮,  cancelText 可以设置取消按钮的文字">
            <button @click="handlerClick1">点击打开</button>
            <ivy-action-sheet v-model="visible1" :actions="actions1" show-cancel cancel-text="自定义取消文字"></ivy-action-sheet>
        </demo>
        <demo title="更改颜色" description="在 actions 数据中增加 color 属性可以修改字体颜色">
            <button @click="handlerClick2">点击打开</button>
            <ivy-action-sheet v-model="visible2" :actions="actions2"></ivy-action-sheet>
        </demo>
        <demo title="添加图标" description="在 actions 数据中增加 icon 属性可以增加图标">
            <button @click="handlerClick3">点击打开</button>
            <ivy-action-sheet v-model="visible3" :actions="actions3"></ivy-action-sheet>
        </demo>
        <demo title="添加图标" description="在 actions 数据中增加 disabled 属性可以禁用此项">
            <button @click="handlerClick4">点击打开</button>
            <ivy-action-sheet v-model="visible4" :actions="actions4"></ivy-action-sheet>
        </demo>
    </view>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const actions = ref([
    { name: 'action 1', action: '1' },
    { name: 'action 2', action: '2' },
    { name: 'action 3', action: '3' }
]);
const handlerClick = () => {
    visible.value = true;
};

const visible1 = ref(false);
const actions1 = ref([
    { name: 'action 1', action: '1' },
    { name: 'action 2', action: '2' },
    { name: 'action 3', action: '3' }
]);
const handlerClick1 = () => {
    visible1.value = true;
};

const visible2 = ref(false);
const actions2 = ref([
    { name: 'action 1', action: '1', color: 'red' },
    { name: 'action 2', action: '2', color: 'blue' },
    { name: 'action 3', action: '3', color: 'orange' }
]);
const handlerClick2 = () => {
    visible2.value = true;
};

const visible3 = ref(false);
const actions3 = ref([
    { name: 'action 1', action: '1', icon: 'add-location' },
    { name: 'action 2', action: '2', icon: 'aim' },
    { name: 'action 3', action: '3', icon: 'apple' }
]);
const handlerClick3 = () => {
    visible3.value = true;
};

const visible4 = ref(false);
const actions4 = ref([
    { name: 'action 1', action: '1', icon: 'add-location', disabled: true },
    { name: 'action 2', action: '2', icon: 'aim' },
    { name: 'action 3', action: '3', icon: 'apple' }
]);
const handlerClick4 = () => {
    visible4.value = true;
};
</script>

<style lang="scss"></style>
