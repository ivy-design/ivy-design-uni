<template>
    <view>
        <view class="demo">
            <view class="title">基础用法</view>
            <view>
                <button @click="handlerClick">点击打开</button>
                <ivy-popup v-model="visible">
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                </ivy-popup>
            </view>
        </view>
        <view class="demo">
            <view class="title">更改位置</view>
            <view class="description">通过 placement 属性设置 popup 组件的弹出位置；可选值：left/right/top/bottom</view>
            <view>
                <button @click="handlerClick1">点击打开</button>
                <button @click="handlerClick1('top')">点击打开-Top</button>
                <button @click="handlerClick1('left')">点击打开-Left</button>
                <button @click="handlerClick1('right')">点击打开-Right</button>
                <ivy-popup v-model="visible1" placement="bottom">
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                </ivy-popup>
                <ivy-popup v-model="visible2" placement="top">
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                </ivy-popup>
                <ivy-popup v-model="visible3" placement="left">
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                </ivy-popup>
                <ivy-popup v-model="visible4" placement="right">
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                </ivy-popup>
            </view>
        </view>
        <view class="demo">
            <view class="title">关闭遮罩层</view>
            <view>
                <button @click="handlerClick2">点击打开</button>
                <ivy-popup v-model="visible5" :show-mask="false">
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                    <br />
                    弹层内容
                </ivy-popup>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false
        };
    },
    methods: {
        handlerClick() {
            this.visible = true;
        },
        handlerClick1(placement) {
            switch (placement) {
                case 'top':
                    this.visible2 = true;
                    break;
                case 'left':
                    this.visible3 = true;
                    break;
                case 'right':
                    this.visible4 = true;
                    break;
                default:
                    this.visible1 = true;
                    break;
            }
        },
        handlerClick2() {
            this.visible5 = true;
        }
    }
};
</script>

<style lang="scss"></style>
