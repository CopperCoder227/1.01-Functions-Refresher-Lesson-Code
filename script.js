// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html;
}

/* 
  Function 1 — greet()
*/
function greet() {
  const name = prompt("What is your name?");
  if (!name || name.trim() === "") {
    render("<p>No name given. Please insert your name.</p>");
    return;
  }
  render(`<p>Hello, ${name.trim()}.</p>`);
}

/* 
  Function 2 — averageNumbers()
*/
function averageNumbers() {
  const nums = prompt("Please enter numbers separated by commas.");
  if (!nums) {
    render("<p>No numbers inserted. Please enter numbers.</p>");
    return;
  }

  const givenNums = nums.split(',').map(n => parseFloat(n.trim()));
  if (givenNums.some(isNaN)) {
    render("<p>Please enter valid numbers only.</p>");
    return;
  }

  const sum = givenNums.reduce((a, b) => a + b, 0);
  const avg = sum / givenNums.length;

  const list = givenNums
    .map(n => `<li class="list-group-item">${n}</li>`)
    .join("");

  render(`<p>Average: <strong>${avg.toFixed(2)}</strong></p>
  <ul class="list-group">${list}</ul>`);
}

/* 
  Function 3 — timeOfDay()
*/
function timeOfDay() {
  const h = new Date().getHours();
  let msg = '';
  if (h < 12) {
    msg = "Good morning!";
  } else if (h < 18) {
    msg = "Good afternoon!";
  } else {
    msg = "Good evening!";
  }
  render(`<p>${msg}</p>`);
}

/* 
  Function 4 — randomBetween()
*/
function randomBetween() {
  const minInput = prompt('Enter a MIN number (the smaller one)');
  const maxInput = prompt('Enter a MAX number (the bigger one)');

  const min = parseInt(minInput);
  const max = parseInt(maxInput);

  if (isNaN(min) || isNaN(max)) {
    render("<p>Please enter valid numbers!</p>");
    return;
  }
  if (min >= max) {
    render("<p>MAX must be greater than MIN.</p>");
    return;
  }
  const rndNum = Math.floor(Math.random() * (max - min + 1) + min);
  render(
    `<p>Random number between ${min} and ${max}: <strong>${rndNum}</strong></p>`
  );
}

/* 
  Function 5 — clearOutput()
*/
function clearOutput() {
  render("<p>Output cleared.</p>");
}

// ----- Student Challenge Functions ----- //

// 1) Change the page title text to something new.
function changeTitle() {
  document.title = "🌟 Title Changed! 🌟";
  const headerH1 = document.querySelector('header h1') || document.querySelector('header .container h1');
  if (headerH1) {
    headerH1.textContent = "🌟 JS Functions Demo - Title Changed!";
  }
}

// 2) Cycle the output box text color each time clicked.
const textColors = ["#b45309", "#15803d", "#d97706", "#78350f", "#dc2626"];
let currentTextColorIndex = 0;
function cycleTextColor() {
  const outDiv = document.getElementById("out");
  currentTextColorIndex = (currentTextColorIndex + 1) % textColors.length;
  outDiv.style.color = textColors[currentTextColorIndex];
}

// 3) Change BOTH the text and background color of #out.
const bgColors = ["#fef3c7", "#dc2626", "#15803d", "#d97706", "#78350f"];
let currentBgColorIndex = 0;
function changeTextAndBg() {
  const outDiv = document.getElementById("out");
  currentTextColorIndex = (currentTextColorIndex + 1) % textColors.length;
  currentBgColorIndex = (currentBgColorIndex + 1) % bgColors.length;
  outDiv.style.color = textColors[currentTextColorIndex];
  outDiv.style.backgroundColor = bgColors[currentBgColorIndex];
}

// 4) Reset #out styles to default and clear output.
function resetStyles() {
  const outDiv = document.getElementById("out");
  outDiv.style.color = "";
  outDiv.style.backgroundColor = "";
  render("Output cleared and styles reset.");
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet);
document.getElementById('btnAvg').addEventListener('click', averageNumbers);
document.getElementById('btnTime').addEventListener('click', timeOfDay);
document.getElementById('btnRandom').addEventListener('click', randomBetween);
document.getElementById('btnClear').addEventListener('click', clearOutput);

// ---- Event listeners for the student challenge buttons ----
document.getElementById('btnChangeTitle').addEventListener('click', changeTitle);
document.getElementById('btnCycleTextColor').addEventListener('click', cycleTextColor

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Cycle the output box text color (switch to a different color each time clicked).
  3) Change BOTH the text and background color of #out.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/
