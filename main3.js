let n = prompt("Enter an integer number");
for (let x = 1; n <= 100; x++) {
    let square = x * x;
    if (square <= n) {
        console.log(x);
    }
    else {
        break;
    }
}
