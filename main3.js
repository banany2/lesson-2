class Calculator {
    add(num1, num2) {
        if (!isNaN(num1) && !isNaN(num2)) {
            return num1 + num2
        }
    }
    subtract(num1, num2) {
        if (!isNaN(num1) && !isNaN(num2)) return num1 - num2
    }
    multiply(num1, num2) {
        if (!isNaN(num1) && !isNaN(num2)) return num1 * num2
    }
    divide(num1, num2) {
        if (!isNaN(num1) && !isNaN(num2)) {
            if (num2 === 0) {
                return 'cannot divide by 0'
            } else {
                return num1 / num2
            }
        }
        return 'invalid input'
    }
}

const calc = new Calculator()

console.log(calc.add(3, 6)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4