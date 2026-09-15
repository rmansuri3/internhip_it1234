
     const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "☀️";
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your message has been sent.`);

  contactForm.reset();
});