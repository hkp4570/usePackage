import { request } from 'umi';
export default {
    async test() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4, 5]);
            }, 1000);
        });
    },
};

export async function getMachineCode({ time }: { time: number }) {
    return request(`/mc/code/machineCode?time=${time}`, {
        method: 'get',
    });
}
