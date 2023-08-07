<template>
    <view>
        <demo title="基础用法" description="最基础的用法，通过这个组件来给组件之间提供统一的间距。">
            <ivy-space>
                <text>21321</text>
                <text>dasd</text>
            </ivy-space>
        </demo>
		<demo title="对齐方式" description="设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与 align-items 一致。">
		    <ivy-space>
				默认值-center
		        <text> 一行 </text>
		        <view>
					<view>第一行</view>
					<view>第二行</view>
				</view>
		    </ivy-space>
			<ivy-space alignment="start" class="margin-top">
				start
			    <text> 一行 </text>
			    <view>
			    	<view>第一行</view>
			    	<view>第二行</view>
			    </view>
			</ivy-space>
			<ivy-space alignment="end" class="margin-top">
				end
			    <text> 一行 </text>
			    <view>
			    	<view>第一行</view>
			    	<view>第二行</view>
			    </view>
			</ivy-space>
		</demo>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss"></style>
