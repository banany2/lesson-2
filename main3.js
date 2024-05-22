let userNum = prompt("Enter number:");
let a, b;
go:
    for (a = 2; a <= userNum; a++) {
        for (b = 2; b < a; b++) {
            if (a%b === 0) continue go;
        }
        console.log(a)
    }