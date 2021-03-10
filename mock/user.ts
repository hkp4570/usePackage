export default {
    'GET /api/user': { name: 'hkp', age: 18, sex: '男', role: 'admin' },
    'POST /api/login': (req: any, res: any) => {
        const { name, password } = req.body;
        if (name === 'hkp' && password === 'hkp') {
            res.send({
                errCode: 0,
                errMsg: 'ok',
                data: {
                    name: 'hkp',
                    age: 18,
                },
            });
        }
    },
};
