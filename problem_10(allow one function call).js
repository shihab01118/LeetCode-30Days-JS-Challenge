const once = function(fn) {
    
    let hasBeenCalled = false;
    let result;
  
    return function() {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn.apply(this, arguments);
            return result;
        } else {
            return undefined;
        }
    };

};

const fn = (a, b, c) => (a + b + c)
const onceFn = once(fn)

for (let i = 0; i <= 3; i++) {
    console.log(onceFn(1, 2, 3));
}