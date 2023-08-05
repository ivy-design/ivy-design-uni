import { ref } from 'vue';

export default () => {
    const index = ref(0);
    const nextIndex = () => {
        return index.value++;
    };
    return {
        index,
        nextIndex
    };
};
