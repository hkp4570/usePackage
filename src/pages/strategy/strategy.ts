const strategies = {
    isNonEmpty: function (value: string, errMsg: string) {
        if (!value) {
            return errMsg;
        }
    },
    minLength: function (value: string, length: number, errMsg: string) {
        if (!value) return errMsg;
        if (value.length < length) {
            return errMsg;
        }
    },
    isMobile: function (value: string, errMsg: string) {
        if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
            return errMsg;
        }
    },
};

type RulesType = {
    strategy: string;
    errMsg: string;
};

const Validator = function (this: any) {
    this.cache = new Map<string, () => void>();
    this.error = {};
};

Validator.prototype.add = function (name: string, value: string, rules: RulesType[]) {
    this.cache.set(name, () => {
        rules.forEach((rule) => {
            const strategyAry = rule.strategy.split(':');
            const strategy = strategyAry.shift() as string;
            strategyAry.unshift(value);
            strategyAry.push(rule.errMsg);
            // @ts-ignore
            const err = strategies[strategy].apply(this, strategyAry);
            if (err) {
                if (!this.error[name]) {
                    this.error[name] = [err];
                } else {
                    this.error[name] = this.error[name].concat(err);
                }
            }
        });
    });
};

Validator.prototype.start = function () {
    this.cache.forEach((ele: () => void) => {
        ele();
    });
    return Object.keys(this.error).length ? this.error : false;
};

export { Validator };
