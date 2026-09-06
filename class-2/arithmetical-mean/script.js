// const body = document.querySelector("body");
const calcBT = document.querySelector(".calc");
const result = document.querySelector(".result");
const bold = document.querySelector("span");

calcBT.addEventListener("click", function () {
    const scores = [];
    document.querySelectorAll("input[type='number']").forEach(x => scores.push(Number(x.value)));
    let sum = 0, total = scores.forEach(y => sum += y);
    let middle = sum / scores.length;
    let situation = "";
    bold.textContent = `${middle}`;
    result.textContent = `Mean: ${bold.textContent}`;
    result.style.visibility = "visible";
    if (middle >= 70) situation = "Approved";
    else if (middle < 70 && middle >= 40) situation = "Retake";
    else situation = "Repproved";
    window.alert(`Situation: ${situation}`)
    // result.style.border = "border: solid 2px rgba(0, 0, 255, 0.5);";
    // result.style.backgroundColor = "background-color: rgba(0, 0, 255, 0.25);"
})