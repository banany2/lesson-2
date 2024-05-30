function add(x, y) {
    return x + y;
}

function curryAdd(x) {
    return function(y) {
        return x * y;
    }
}
const addFive = curryAdd;
console.log(addFive(5)(2));