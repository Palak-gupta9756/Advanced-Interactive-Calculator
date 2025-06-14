let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');
let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            calculate();
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;

        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

function calculate() {
    try {
        if (/\/0(?!\d)/.test(string)) {
            //. /\/0(?!\d)/ is a regular expression that matches a slash followed by a zero that is not followed by another digit.
            input.value = "Error: Division by 0";
        } else {
            string = eval(string);
            input.value = string;
        }
    } catch (err) {
        input.value = "Error";
    }
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((key >= '0' && key <= '9') || "+-*/".includes(key)) {
        string += key;
        input.value = string;
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (key === 'Escape') {
        string = "";
        input.value = string;
    }

});
