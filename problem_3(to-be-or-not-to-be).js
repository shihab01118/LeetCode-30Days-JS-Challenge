const expect = function(val) {
    return {
        toBe: (v) => {
            if (v === val) return true;
            else throw new Error("Not Equal");
        },
        notToBe: (v) => {
            if (v !== val) return true;
            else throw new Error("Equal");
        }
    }
};

expect(5).toBe(5);
expect(5).notToBe(5);