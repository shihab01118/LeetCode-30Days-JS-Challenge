const filter = (arr, fn) => {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

const arr1 = [0, 10, 20, 30];
const arr2 = [1, 2, 3];
const arr3 = [-2, -1, 0, 1, 2];

const greaterThan10 = (n) => {
    return n > 10;
}

const firstIndex = (n, i) => {
    return i === 0;
}

const plusOne = (n) => {
    return n + 1;
}

console.log(filter(arr1, greaterThan10));
console.log(filter(arr2, firstIndex));
console.log(filter(arr3, plusOne));