<script>
	import {
		h,
		ref
	} from 'vue';
	export default {
		props: {
			wrap: Boolean,
			alignment: {
				type: String,
				default: "center",
				validator(val) {
					return ['center', 'normal', 'stretch', 'start', 'end', 'flex-start', 'flex-end', "baseline",
						"first baseline", "last baseline", "safe center", "unsafe center"
					].includes(val)
				}
			}
		},
		setup(props, {
			attrs,
			slots
		}) {
			const { style={}, class: attrsClass } = attrs;
			console.log(style, attrsClass)
			
			const styles = ref({
				alignItems: props.alignment,
				...style,
			});
			if (props.wrap) {
				styles['flexWrap'] = 'wrap';
			}
			
			
			

			return () => h('view', {
				...props,
				...attrs,
				class: attrsClass ? `ivy-space ${attrsClass}` : 'ivy-space',
				style: styles.value,
			}, slots.default ? slots.default().map((vNode) => h('view', {
				class: 'ivy-space-item'
			}, vNode)) : null);
		}
	};
</script>

<style scoped lang="scss">
	.ivy-space {
		display: flex;
		gap: 12px;
	}
</style>