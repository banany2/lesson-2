let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}
function calcTotalSalary(sum) {
    let totalSalary = 0
    if (Array.isArray(sum)) {
        for(let i = 0; i < sum.length; i++) {
            totalSalary += sum[i].salary;
        }
    }
    else {
        for (let s in sum) {
            totalSalary += calcTotalSalary(sum[s])
        }
    }

    return totalSalary
}

const totalSalary = calcTotalSalary(company)
console.log(totalSalary)