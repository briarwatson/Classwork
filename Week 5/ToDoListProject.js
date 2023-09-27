const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

leftButton.addEventListener("click" , addLeft);
rightButton.addEventListener("click" , addRight);

function addLeft() {
    const leftList = document.querySelector("ul.leftList");
    const inputField = document.getElementById("leftInput");

    const newLi = document.createElement("li");
    const newInput = document.createElement("input");
    newInput.type = "checkbox";

    newLi.appendChild(newInput);
    newLi.appendChild(document.createTextNode(inputField.value));
    leftList.appendChild(newLi);

}

function addRight() {
    const rightList = document.querySelector("ul.rightList");
    const inputField = document.getElementById("rightInput");

    const newLi = document.createElement("li");
    const newInput = document.createElement("input");
    newInput.type = "checkbox";

    newLi.appendChild(newInput);
    newLi.appendChild(document.createTextNode(inputField.value));
    rightList.appendChild(newLi);
}

function addCheckBoxListner(checkbox) {
    checkbox.addEventListener("click", () => {
        this.parentElement.remove()
    })
}