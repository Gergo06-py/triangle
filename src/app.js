var baseInput = document.querySelector("#base");
var heightInput = document.querySelector("#height");
var areaInput = document.querySelector("#area");
var calcButton = document.querySelector("#calcButton");

calcButton.addEventListener("click", () => {
  workInput();
});

function workInput() {
  let base = Number(baseInput.value);
  let height = Number(heightInput.value);
  let area = calcTriangleArea(base, height);
  areaInput.value = area + " cm²";
}

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}
