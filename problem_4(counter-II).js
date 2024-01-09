const createCounter = (init) => {
    let counter = init;

    return {
        increment: () => ++counter,
        decrement: () => --counter,
        reset: () => {
            counter = init;
            return counter;
        }
    }
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
