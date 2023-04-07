const screen = document.querySelector('.screen');
const removeBtn = document.querySelector('.removeBtn');
const resetBtn = document.querySelector('.resetBtn');
const addBtn = document.querySelector('.addBtn');
let resetNum = 0;

function addNum() { screen.textContent = +screen.textContent + 1 };
function remove() { resetNum = screen.textContent; screen.textContent = 0 };
function reset() { screen.textContent = resetNum };


function handleClick() {
    addBtn.addEventListener('click', addNum);
    removeBtn.addEventListener('click', remove);
    resetBtn.addEventListener('click', reset);
}

function init() {
    handleClick();
}
init();
