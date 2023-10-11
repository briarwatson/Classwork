const empty = document.getElementsByClassName("empty")[0];
const box = document.getElementsByClassName("box");

[...box].forEach(i => {
    i.addEventListener("click", buttonClick);
});

function buttonClick(event) {
    const value = event.target.innerText;

    empty.innerText = value;
}

function buttonClick(clear) {
    const clear = value.target.innerText;

    empty.innerText = clear;
}

