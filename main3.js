function createCounter(count) {
    count = 0
    return function(num) {
        count += num;
        console.log(count)
    }
}

const sum = createCounter();
console.log(sum(2))
console.log(sum(3))
console.log(sum(6))


