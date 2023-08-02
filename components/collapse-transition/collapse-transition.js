import {
    addClass,
    removeClass
} from "@/utils/dom";
import {
    defineComponent,
    Transition,
    h
} from "vue";

function transition() {
    return {
        onBeforeEnter(el) {
            addClass(el, "collapse-transition");
            if (!el.dataset) el.dataset = {};

            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.style.height = "0";
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        },

        onEnter(el) {
            el.dataset.oldOverflow = el.style.overflow;
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + "px";
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            } else {
                el.style.height = "";
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }

            el.style.overflow = "hidden";
        },

        onAfterEnter(el) {
            // for safari: remove class then reset height is necessary
            removeClass(el, "collapse-transition");
            el.style.height = "";
            el.style.overflow = el.dataset.oldOverflow;
        },

        onBeforeLeave(el) {
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;

            el.style.height = el.scrollHeight + "px";
            el.style.overflow = "hidden";
        },

        onLeave(el) {
            if (el.scrollHeight !== 0) {
                // for safari: add class after set height, or it will jump to zero height suddenly, weired
                addClass(el, "collapse-transition");
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
        },

        onAfterLeave(el) {
            removeClass(el, "collapse-transition");
            el.style.height = "";
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        },
    };
}

export default defineComponent({
    name: `Collapse-transition`,
    setup(props, {
        slots
    }) {
        const eventList = transition();
        return () => h(Transition, {
            ...eventList
        }, () => slots.default?.());
    },
});