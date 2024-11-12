let getNum = document.getElementById("number");
let printResult = document.getElementById("result");

document.getElementById("plus").addEventListener("click", () => {
  let getValue = Number(getNum.value);
  let plusResult = Number(printResult.textContent) + getValue;
  printResult.textContent = plusResult;
});

document.getElementById("mines").addEventListener("click", () => {
  let getValue = Number(getNum.value);
  let plusResult = Number(printResult.textContent) - getValue;
  printResult.textContent = plusResult;
});

document.getElementById("reset").addEventListener("click", () => {
  printResult.textContent = 0;
});
