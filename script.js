const inputBox = document.getElementById("inputBox");
let expression = '';

function press(num) {
    expression += num;
    inputBox.value = expression;
}

function equal() {
    inputBox.value = eval(expression);
    expression = '';
}

function erase() {
    expression = '';
    inputBox.value = expression;
}