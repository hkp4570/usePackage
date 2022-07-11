export const sleep = (timer: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timer * 1000);
    });
};
