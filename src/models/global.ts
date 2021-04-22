import globalAPI from '@/services/global';

export default {
    namespace: 'global',
    state: {
        test: [],
    },
    effects: {
        *test({ payload }, { call, put }) {
            const resp = yield call(globalAPI.test);
            yield put({
                type: 'setState',
                payload: {
                    test: resp,
                },
            });
        },
    },
    reducers: {
        setState(state, { payload }) {
            return { ...state, ...payload };
        },
    },
};
