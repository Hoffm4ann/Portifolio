const wheel = document.querySelector(".wheel");
const inner = document.querySelector(".inner");
const spinButton = document.querySelector(".spinButton");

const value1 = Math.ceil(Math.random()* -3600);
const value2 = Math.ceil(Math.random() * 3600);

spinButton.onclick = function() {
    wheel.style.transform = "rotate("+ value1 +"deg)";
    inner.style.transform = "rotate("+ value2 +"deg)";
    value1 += Math.ceil(Math.random() * -3600);
    value2 += Math.ceil(Math.random() * 3600);
}