import Collapse from './collapse/collapse.vue'
import CollapseItem from './collapse/collapse-item.vue'
import Cell from './cell/index.vue'
import CellGroup from './cell/group.vue'

const namespace = 'Ivy';

const components = [Collapse, CollapseItem, Cell, CellGroup]

const install = (app, config = {}) => {
    const tmp = Object.entries(config)
    for (let [key, value] of tmp) {
        app.config.globalPrototies[key] = value
    }
    components.forEach(comp => {
        console.log(comp)
        app.component(namespace + comp.name, comp)
    })
}
export default install