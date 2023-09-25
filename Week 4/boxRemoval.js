const redDivs = document.querySelectorAll(".leftDiv");
redDivs.forEach((div) => {
    div.addEventListener("click", removeBox);
});
function removeBox(e) {
    const clickedDiv = e.target;
    const id = "r" + clickedDiv.innerText;
    const rightDiv = document.getElementById(id);
    if (rightDiv.style.display !== "none") {
        rightDiv.style.display = "none";
    }else {
        rightDiv.style.display = "block";
    }
}

