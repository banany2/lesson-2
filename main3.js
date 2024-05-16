let Numbers = prompt("Enter a three-digit number:");
let Symbols = Numbers.split('');
console.log(Symbols);
if (Numbers.length < 3 || Numbers.length > 3) {

    console.log("invalid input.");

}
else if(Numbers[0] === Numbers[1] && Numbers[1] === Numbers[2]){
    console.log("Every number is the same.")
}
else if(Numbers[0] === Numbers[1]){
    console.log("The first and the second number is the same.")
}
else if(Numbers[1] === Numbers[2]){
    console.log("The second and the third number is the same.")
}
else if(Numbers[0] === Numbers[2]){
    console.log("The first and the third number is the same.")
}


