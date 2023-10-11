const empty = document.getElementsByClassName("empty")[0];
const box = document.getElementsByClassName("box");

[...box].forEach(i => {
    i.addEventListener("click", buttonClick);
});

function buttonClick(event) {
    const value = event.target.innerText;

    empty.innerText = value;

    if (value === "AC") {
        empty.innerText = 0;
    } else

    if (value === "+/-") {
        let number = empty.innerText;
        number *= -1;
    } else

    if (value === "%") {
        let number = empty.innerText;
        number *= 0.01;
    }
    if (value === "="){
        let number = empty.innerText;
        const output = eval(number);
    } else

}


