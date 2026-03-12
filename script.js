// Массив для хранения всех чисел
let numbers = [];

// Получаем контейнер для таблицы
const container = document.getElementById('table-container');

// Функция для создания таблицы через DOM
function createTable() {
    const table = document.createElement('table');
    table.id = 'number-table';
    
    const cols = 6;
    const rows = 5;

    for (let r = 0; r < rows; r++) {
        const tr = document.createElement('tr');
        
        for (let c = 0; c < cols; c++) {
            const td = document.createElement('td');
            const index = r * cols + c;
            
            if (index < numbers.length) {
                const value = numbers[index];
                td.textContent = value;
                
                if (value >= 50) {
                    td.classList.add('orange');
                }
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
    container.innerHTML = '';
    container.appendChild(table);
}

// Генерируем 30 случайных чисел
for (let i = 0; i < 30; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

// Создаём начальную таблицу
createTable();

// Функция для добавления числа
function addNumber() {
    const newNumber = Math.floor(Math.random() * 100);
    numbers.push(newNumber);
    
    const table = document.getElementById('number-table');
    const rows = table.getElementsByTagName('tr');
    const lastRow = rows[rows.length - 1];
    const cellsInLastRow = lastRow.getElementsByTagName('td').length;
    
    const newCell = document.createElement('td');
    newCell.textContent = newNumber;
    
    if (newNumber >= 50) {
        newCell.classList.add('orange');
    }
    
    if (cellsInLastRow < 6) {
        lastRow.appendChild(newCell);
    } else {
        const newRow = document.createElement('tr');
        newRow.appendChild(newCell);
        table.appendChild(newRow);
    }
}
