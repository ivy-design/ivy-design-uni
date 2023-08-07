<script>
import { h, ref } from 'vue';
export default {
    props: {
        wrap: Boolean
    },
    setup(props, { attrs, slots }) {
        console.log(attrs.style);
        const styles = ref({ attrs.style ? ...attrs.style : ...{} });
        if (props.wrap) {
            styles['flexWrap'] = 'wrap';
        }
        return () => h('view', { ...props, ...attrs, style: styles }, slots.default ? slots.default().map((vNode) => h('view', { class: 'ivy-space-item' }, vNode)) : null);
    }
};
</script>

<style scoped lang="scss">
.ivy-space {
    display: flex;
    gap: 12px;
}
</style>
