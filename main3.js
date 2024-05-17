const grn = 26;

for (let dollar = 10; dollar <= 100; dollar += 10) {
let result = grn * dollar;
switch (true) {
    case result === 260:
        console.log(`10 dollars in grn: ${result}`);
        break
    case result === 520:
        console.log(`20 dollars in grn: ${result}`);
        break
    case result === 780:
        console.log(`30 dollars in grn: ${result}`);
        break
    case result === 1040:
        console.log(`40 dollars in grn: ${result}`);
        break
    case result === 1300:
        console.log(`50 dollars in grn: ${result}`);
        break
    case result === 1560:
        console.log(`60 dollars in grn: ${result}`);
        break
    case result === 1820:
        console.log(`70 dollars in grn: ${result}`);
        break
    case result === 2080:
        console.log(`80 dollars in grn: ${result}`);
        break
    case result === 2340:
        console.log(`90 dollars in grn: ${result}`);
        break
    case result === 2600:
        console.log(`100 dollars in grn: ${result}`);
        break
}
}