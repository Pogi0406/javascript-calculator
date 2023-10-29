function appendToResult(value) {
  document.getElementById("result").value += value;
}

function resetResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = eval(result);
}
