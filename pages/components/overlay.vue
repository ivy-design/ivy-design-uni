<template>
    <view>
		<demo title="基础用法">
			<button @click="handlerClick">点击打开</button>
			<ivy-overlay v-model="visible">
			    弹层内容
			    <br />
			    弹层内容
			    <br />
			    弹层内容
			    <br />
			    弹层内容
			</ivy-overlay>
		</demo>
    </view>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    },
    methods: {
        handlerClick() {
            this.visible = true;
        }
    }
};
</script>

<style lang="scss"></style>
