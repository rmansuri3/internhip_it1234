const text = document.getElementById("text");


document.getElementById("redBtn").addEventListener("click", () => {
  text.style.color = "red";
});

document.getElementById("greenBtn").addEventListener("click", () => {
  text.style.color = "green";
});

document.getElementById("blueBtn").addEventListener("click", () => {
  text.style.color = "blue";
});

// Change font family
document.getElementById("fontSelect").addEventListener("change", function () {
  text.style.fontFamily = this.value;
});

// Change font size
let fontSize = 24;

document.getElementById("increaseBtn").addEventListener("click", () => {
  fontSize += 2;
  text.style.fontSize = `${fontSize}px`;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  if (fontSize > 10) {
    fontSize -= 2;
    text.style.fontSize = `${fontSize}px`;
  }
});


document.getElementById("boldBtn").addEventListener("mouseover", () => {
  text.style.fontWeight = "bold";
});

document.getElementById("italicBtn").addEventListener("mouseover", () => {
  text.style.fontStyle = "italic";
});

document.getElementById("underlineBtn").addEventListener("mouseover", () => {
  text.style.textDecoration = "underline";
});

// Form validation
document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (name === "" || email === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "#00ff88";
  }
});


document.querySelectorAll("[data-operation]").forEach((button) => {
  button.addEventListener("click", () => {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const message = document.getElementById("calculatorMessage");
    const result = document.getElementById("result");

    if (number1 === "" || number2 === "") {
      message.textContent = "Please enter both numbers.";
      message.style.color = "red";
      return;
    }

    const first = Number(number1);
    const second = Number(number2);
    const operation = button.dataset.operation;
    let answer;

    if (operation === "add") answer = first + second;
    if (operation === "subtract") answer = first - second;
    if (operation === "multiply") answer = first * second;

    if (operation === "divide") {
      if (second === 0) {
        message.textContent = "Cannot divide by zero.";
        message.style.color = "red";
        return;
      }
      answer = first / second;
    }

    message.textContent = "";
    result.textContent = `Result: ${answer}`;
  });
});


document.getElementById("lightBtn").addEventListener("click", () => {
  document.body.classList.add("light-theme");
});

document.getElementById("darkBtn").addEventListener("click", () => {
  document.body.classList.remove("light-theme");
});