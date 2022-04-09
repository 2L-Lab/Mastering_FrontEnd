const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
console.log(result);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.innerText;
  });
});

egal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});
