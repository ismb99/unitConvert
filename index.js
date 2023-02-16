/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputNum = document.getElementById("inputNum");
const button = document.getElementById("btn");
const lengthParagraph = document.getElementById("lengthInfo");
const volumeParagraph = document.getElementById("volumeInfo");
const massParagraph = document.getElementById("massInfo");

button.addEventListener("click", function () {
  massParagraph.textContent = ConvertMass();
  lengthParagraph.textContent = ConvertLength();
  volumeParagraph.textContent = ConvertVolume();
});

function ConvertMass() {
  return `${inputNum.value} kilos = ${(inputNum.value * 2.204).toFixed(
    3
  )} pounds | ${inputNum.value} pounds =  ${(inputNum.value / 2.204).toFixed(
    3
  )} kilos`;
}

function ConvertLength() {
  return `${inputNum.value} meters = ${(inputNum.value * 3.281).toFixed(
    3
  )} feet | ${inputNum.value} feet =  ${(inputNum.value / 3.281).toFixed(
    3
  )} meters`;
}

function ConvertVolume() {
  return `${inputNum.value} liters = ${(inputNum.value * 0.264).toFixed(
    3
  )} gallons | ${inputNum.value} gallons = ${(inputNum.value / 0.264).toFixed(
    3
  )} liter`;
}
