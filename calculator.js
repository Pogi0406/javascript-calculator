function appendToResult(value) {
  let currentValue = document.getElementById("result").value;

  if (value === "+" || value === "-" || value === "*" || value === "/") {
    const lastChar = currentValue[currentValue.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      currentValue = currentValue.slice(0, -1);
    }
  }

  result.value = currentValue + value;
}

function resetResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  let result = document.getElementById("result").value;
  const lastChar = result[result.length - 1];

  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    result = result.slice(0, -1);
  }
  if (result !== "") {
    document.getElementById("result").value = eval(result);
  }
}
