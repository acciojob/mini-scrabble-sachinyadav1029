let input = document.getElementById("evaluatedText");

let h3 =  document.getElementById("letterCount");
let val = 0;

input.addEventListener("input", () => {
      h3.textContent = input.value.length;
});

