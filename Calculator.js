let plus, minus, divide, multiply;

function initialize() {
    plus = document.calc.operator.options[0];
    minus = document.calc.oparator.options[1];
    divide = document.calc.operator.options[2];
    multiply = document.calc.operator.options[3];
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function divider(a, b) {
    return a / b;
}

function multiplier(a, b) {
    return a * b;
}

function parseValue(val1, val2) {
    xVal = +document.getElementById("val1").value;
    yVal = +document.getElementById("val2").value;
    return(xVal, yVal);
}

function calculate(val1, val2) {
    xVal = parseValue(val1, val2)[0];
    yVal = parseValue(val1, val2)[1];

    if (plus.selected) {
        return document.calc.answer.value = add(xVal, yVal);
    }
    else if (minus.selected) {
        return document.calc.answer.value = substract(xVal, yVal);
    }

    else if (divide.selected) {
        return document.calc.answer.value = divider(xVal, yVal);
    }

    else if (multiply.selected) {
        return document.calc.answer.value = multiplier(xVal, yVal);
    }
}

module.exports = {
    add: add,
    substract: substract,
    divider: divider,
    multiplier: multiplier,
}