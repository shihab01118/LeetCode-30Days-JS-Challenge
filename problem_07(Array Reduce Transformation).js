const reduce = (nums, fn, init) => {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
}

const sum = (accum, curr) => {
    return accum + curr;
}


const nums = [1, 2, 3, 4];

console.log(reduce(nums, sum, 0));