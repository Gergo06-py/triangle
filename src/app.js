var baseInput = document.querySelector("#base");
var heightInput = document.querySelector("#height");
var areaInput = document.querySelector("#area");
var calcButton = document.querySelector("#calcButton");

if (calcButton) {
  calcButton.addEventListener("click", () => {
    workInput();
  });
}

function workInput() {
  let baseOK = checkInput(baseInput.value);
  let heightOK = checkInput(heightInput.value);
  if (baseOK && heightOK) {
    let base = Number(baseInput.value);
    let height = Number(heightInput.value);
    let area = calcTriangleArea(base, height);
    areaInput.value = area + " cm²";
  } else {
    alert("HIBA")
  }
}

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function checkInput(input) {
  let res = input.match(/^\d+([.]\d+)?$/);
  return res;
}