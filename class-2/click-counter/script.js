const clickBT = document.querySelector("button");
let clicks = 0;
clickBT.addEventListener("click", function () {
    clickBT.textContent = `${clicks+=1} clicks`
});