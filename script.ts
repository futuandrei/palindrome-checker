const button = document.getElementById("button") as HTMLButtonElement;
const input = document.getElementById("input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLElement;

button.addEventListener("click", function () {
  const textValue = input.value;
  const reversedValue = reverseString(textValue);
  // console.log(reversedValue);
  // console.log("Button clicked" + textValue.value);
  output.innerHTML = reversedValue;

  function reverseString(str: string) {
    return str
      .split("")
      .reverse()
      .join("")
      .toLowerCase()
      .replaceAll(",", "")
      .replaceAll("'", "");
  }
});
