let inp1 = document.querySelector("#num1");
let inp2 = document.querySelector("#num2");
let button = document.querySelector("#but");
let arj = document.querySelector("#arj");
let sel = document.querySelector("#sel");
let refresh = [inp1, inp2, sel];
button.addEventListener("click", function () {
  let tiv1 = parseFloat(inp1.value);
  let tiv2 = parseFloat(inp2.value);
  let sum;
  switch (sel.value) {
    case "+":
      sum = tiv1 + tiv2;
      break;
    case "-":
      sum = tiv1 - tiv2;
      break;
    case "*":
      sum = tiv1 * tiv2;
      break;
    case "/":
      sum = tiv1 / tiv2;
      if (tiv2 === 0) {
        sum = "tiv@ chi kareli bajanel 0-i";
      }
      break
  }
  arj.innerHTML = sum;
  this.disabled = true;
});
for (let i = 0; i < refresh.length; i++) {
  refresh[i].addEventListener("click", function () {
    button.disabled = false;
  });
}
