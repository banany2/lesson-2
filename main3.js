function calculateAverage(arr) {
    const numbers = arr.filter(element => typeof element === 'number');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

const newArr = [1, 'hi', 3, true, 5, null, '7', undefined, 6];
const average = calculateAverage(newArr);
console.log(average);