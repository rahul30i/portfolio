const greetings = [
  { text: "नमस्ते! आपका स्वागत है।", colorClass: "green-glow" },
  { text: "Welcome!", colorClass: "blue-glow" },
  { text: "ようこそ！", colorClass: "green-glow" },
  { text: "¡Bienvenido!", colorClass: "blue-glow" },
  { text: "خوش آمدید!", colorClass: "green-glow" }
];

let index = 0;
const greetingElement = document.getElementById("greeting");

function showGreeting() {
  const { text, colorClass } = greetings[index];
  
  // Remove all color classes before adding new
  greetingElement.classList.remove("blue-glow", "green-glow");
  greetingElement.textContent = text;
  greetingElement.classList.add("fade-in", colorClass);

  // After 1.5s fade out
  setTimeout(() => {
    greetingElement.classList.remove("fade-in");
  }, 1200);

  index++;
  
  if (index < greetings.length) {
    setTimeout(showGreeting, 1500);
  } else {
    setTimeout(() => {
      window.location.href = "/my-portfolio/main.html"; // redirect
    }, 1500);
  }
}

showGreeting();
