const tableContainer = document.getElementById('container');
const table = document.createElement('table');
const tbody = document.createElement('tbody');

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');

    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);
    }

    tbody.appendChild(row);
}
table.appendChild(tbody);
tableContainer.appendChild(table);

