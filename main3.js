let Year = prompt("In what year were you born?");
let Place = prompt("Where do you live?");
let favouriteSport = prompt("What is your favourite sport?");
switch (true) {
    case Year === null:
        alert("It's a pity that you didn't enter your year of birth(");
break;
    case Place === null:
        alert("It's a pity that you didn't enter the place, where you live(");
break;
    case favouriteSport === null:
        alert("It's a pity that you didn't enter your favourite sport(");
break;
}
if (Place==="Washington") {
    alert (`You were born in ${Year}. You live in the capital of USA. Your favourite sport is ${favouriteSport}.`)
}
else if (Place==="Kyiv") {
    alert (`You were born in ${Year}. You live in the capital of Ukraine. Your favourite sport is ${favouriteSport}.`)
}
else if (Place==="London") {
    alert(`You were born in ${Year}. You live in the capital of England. Your favourite sport is ${favouriteSport}.`)
}
else {
    alert(`You were born in ${Year}. You live in ${Place}. Your favourite sport is ${favouriteSport}.`)
}
