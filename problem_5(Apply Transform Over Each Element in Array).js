const plusone = (n) => {
    return n + 1;
}

const arr = [1, 2, 3];

const map = (arr, fn) => {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    
    return newArray;
}

const newArray = map(arr, plusone);