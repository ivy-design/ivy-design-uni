import {
    onMounted,
    onUnmounted,
    type Ref,
    ref
} from "vue";
import {
    isBrowser
} from "../utils/env";

const defaultWindow = isBrowser ? window : null;



export const useBrowserLocation = (
    customWindow = defaultWindow
) => {
    const getWindowLocation = (): IWindowLocation => {
        const {
            hash,
            host,
            hostname,
            href,
            origin,
            pathname,
            port,
            protocol,
            search,
        } = customWindow?.location || {};

        return {
            hash,
            host,
            hostname,
            href,
            origin,
            pathname,
            port,
            protocol,
            search,
        };
    };

    const locationState = ref(getWindowLocation());
    const updateLocation = () => {
        locationState.value = getWindowLocation();
    };

    onMounted(() => {
        if (customWindow) {
            customWindow.addEventListener("popstate", updateLocation);
            customWindow.addEventListener("hashchange", updateLocation);
        }
    });

    onUnmounted(() => {
        if (customWindow) {
            customWindow.removeEventListener("popstate", updateLocation);
            customWindow.removeEventListener("hashchange", updateLocation);
        }
    });

    return locationState;
};