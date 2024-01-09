const createHelloWord = function() {

    return function() {
        return "Hello World";
    }
}

const f = createHelloWord();
f();