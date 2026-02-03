function once(func) {
    let called = false;
    return () => {
        if (!called) {
            called = true;
            return func();
        }
    };
}

function greet() {
    console.log("Hello");
}

const greetOnce = once(greet);

greetOnce();
greetOnce();
greetOnce();