const table = document.getElementById('table');
const print = document.getElementById('print');
const passName = document.getElementById('passName');
const button = document.getElementById('print');

let arr = [];

for (let i = 1; i < table.rows.length; i++) {
    arr.push([table.rows[i].cells[0].textContent, table.rows[i].cells[1].textContent]);
}

arr = arr.sort((a, b) => b[1] - a[1]);

function printName() {

    button.onclick = null; 
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i][1]) >= 75) {
            for (let j = 1; j < table.rows.length; j++) {
                if (table.rows[j].cells[0].textContent === arr[i][0]) {
                    table.rows[j].style.backgroundColor = "magenta";
                }
            }
            const Name = document.createElement('span');

            Name.textContent = `${arr[i][0]} `;

            passName.appendChild(Name);
        }
    }
}

button.onclick = printName;
