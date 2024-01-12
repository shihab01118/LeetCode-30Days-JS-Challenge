const compose = (functions) => {
    if (functions.length === 0) {
        return (x) => {
            return x;
        }
    }

    return (x) => {
        let result = x;
        for (let i = functions.length - 1; i >=0; i--) {
            result = functions[i](result);
        }
        return result;
    }

}

const functions = [x => x + 1, x => x * x, x => 2 * x];

const fn = compose(functions);
console.log(fn(4));