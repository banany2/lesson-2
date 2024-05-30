function mainFunction() {
    for (let i = 0; i <= 10; i++) {
        let userInput = prompt("Enter a num bigger 100")

        if (userInput === null || isNaN(userInput)) {
            console.log("Please, enter a number");
            break;
        }
        else if (userInput > 100) {
            console.log(userInput)
            break;
            }
        else {
            console.log("You entered a number less than 100. Try again.")
        }
        }
}
mainFunction();