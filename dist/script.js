"use strict";
const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");
button.addEventListener("click", function () {
    const textValue = input.value;
    const reversedValue = reverseString(textValue);
    // console.log(reversedValue);
    // console.log("Button clicked" + textValue.value);
    output.innerHTML = reversedValue;
    function reverseString(str) {
        return str
            .split("")
            .reverse()
            .join("")
            .toLowerCase()
            .replaceAll(",", "")
            .replaceAll("'", "");
    }
});
