function decorator(func) {
    return function() {
        console.log('Before calling the function');
        func();
        console.log('After calling the function');
    }
}

@decorator
function greet() {
    console.log('Hello, World!');
}

greet();