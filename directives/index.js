import resize from "./resize";

export const map = {
    resize
};

export default (app) => {
    for (const item of Object.values(map)) {
        app.directive(item.name, item);
    }
};