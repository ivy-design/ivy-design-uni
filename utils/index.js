export const prefix = "ivy-";

export const isSupportCssAttribute = (attributeName) => {
    const el = document.createElement("div");
    const styles = getComputedStyle(el);
    return attributeName in styles ? true : false;
};

export const requestAnimation = (() => {
    return (
        window.requestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
})();

export const cancelAnimation = (() => {
    return (
        window.cancelAnimationFrame ||
        function(timer) {
            window.clearTimeout(timer);
        }
    );
})();


export class Type {
    public static is(val) {
        return Object.prototype.toString
            .call(val)
            .slice(8, -1)
            .replace(/^[A-Z]/, (str) => str.toLowerCase());
    }

    public static isObject(val): boolean {
        return Type.is(val) === "object";
    }
}