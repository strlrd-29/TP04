const submit = document.getElementById("submit");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const text_area = document.getElementById("adresse");
const language = document.getElementById("language");

const inputs_without_radio_checkbox = [...inputs].filter((input) => {
  return input.type !== "radio" && input.type !== "checkbox";
});
inputs_without_radio_checkbox.push(text_area);
const inputs_with_checkbox = [...inputs].filter((input) => {
  return input.type === "checkbox";
});

let valid = true;
submit.addEventListener("click", () => {
  for (let i = 0; i < inputs_without_radio_checkbox.length; i++) {
    if (inputs_without_radio_checkbox[i].value === "") {
      inputs_without_radio_checkbox[i].focus();
      break;
    }
  }
  inputs_without_radio_checkbox.forEach((input) => {
    if (input.value == "") {
      valid = false;
      input.style.border = "1px solid red";
      for (let i = 0; i < labels.length; i++) {
        if (input.id == labels[i].htmlFor) {
          labels[i].style.color = "red";
        }
      }
    } else {
      valid = true;
      input.style.border = "1px solid green";
      for (let i = 0; i < labels.length; i++) {
        if (input.id == labels[i].htmlFor) {
          labels[i].style.color = "green";
        }
      }
    }
  });
  let count = 0;
  inputs_with_checkbox.forEach((input) => {
    if (input.checked) {
      count++;
    }
  });
  if (count == 0) {
    language.style.border = "1px solid red";
    language.style.backgroundColor = "#ffcccb";
    language.style.color = "red";
    valid = false;
  } else {
    language.style.border = "1px solid green";
    language.style.backgroundColor = "#c0c0ff";
    language.style.color = "red";
    valid = true;
  }
  if (valid) {
    window.location.href = "destination.html";
  }
});

console.log("label", labels);
console.log("input", inputs_with_checkbox);
