import {
    ref,
    shallowRef
} from "vue";
import {
    createPopper,
    type Instance
} from "@popperjs/core";

export default (conf = {}) => {
    const visible = ref(false);
    const triggerRef = ref(null);
    const targetRef = ref(null);
    const arrowRef = ref(null);

    const Instance = shallowRef(null);

    const initPopper = () => {
        Instance.value = createPopper(
            triggerRef.value,
            targetRef.value,

            {
                placement: "bottom",
                modifiers: [{
                        name: "offset",
                        options: {
                            offset: [0, 8],
                        },
                    },
                    {
                        name: "arrow",
                        options: {
                            element: arrowRef.value,
                        },
                    },
                    {
                        name: "computeStyles",
                        options: {
                            gpuAcceleration: true,
                        },
                    },
                ],
                ...conf,
            }
        );
    };

    const updatePopper = () => {
        Instance.value?.update();
    };

    return {
        visible,
        triggerRef,
        targetRef,
        arrowRef,
        initPopper,
        updatePopper,
    };
};