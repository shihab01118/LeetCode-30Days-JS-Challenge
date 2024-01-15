const addTwoPromises = async function(promise1, promise2) {
    return (await promise1) + (await promise2);
}

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log);