<template>
    <view>
        <button @click="handlerClick">123213</button>
        <ivy-overlay v-model="visible">
            dfasdfasfd fsdafsadf
            <br />
            fsadfsdaf
        </ivy-overlay>
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
