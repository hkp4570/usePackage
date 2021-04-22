export default {
    async test() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4, 5]);
            }, 1000);
        });
    },
};
