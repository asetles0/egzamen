let num1 = +prompt('San engiz');
let num2 = +prompt('San engiz');
let tanba = prompt('Tanba engiz');

function calculator(a, b, tanba) {
    if (tanba == "+"){
        return a + b;
    } else if (tanba == "-"){
        return a - b;
    } else if (tanba == "*"){
        return a * b;
    } else if (tanba == "/"){
        return a / b;
    }

   return result;
}

alert('Result is ' + calculator(num1, num2, tanba));