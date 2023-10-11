const empty = document.getElementsByClassName("empty")[0];
const box = document.getElementsByClassName("box");

[...box].forEach(i => {
    i.addEventListener("click", buttonClick);
});

function buttonClick(event) {
    const value = event.target.innerText;

    if (value === "AC") {
        empty.innerText = 0;
    } else if (value === "+/-") {
        let number = empty.innerText;
        number *= -1;
        empty.innerText = number;
    } else if (value === "%") {
        let number = empty.innerText;
        number *= 0.01;
        empty.innerText = number;
    } else if (value === "=") {
        let number = empty.innerText;
        const output = eval(number);
        empty.innerText = output;
    } else {
        if (empty.innerText === "0") {
            empty.innerText = value;
        } else {
            empty.innerText += value; 
        }
    }
}


