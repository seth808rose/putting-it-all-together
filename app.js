// sidebar buttons

const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.add("sidebar-appear");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-appear");
});

// ====================================
// Color Generator
// =========================================

const colorShow = document.querySelector(".color-show");
const color = document.querySelector(".color");
const btn = document.querySelector(".color-btn");

const colors = [
  "red",
  "purple",
  "orange",
  "green",
  "yellow",
  "turquoise",
  "teal",
  "pink",
];

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();

  colorShow.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

// ====================================
// Hex Generator
// =========================================

const hex = ["A", "B", "C", "a", "b", "d", 4, 7, 2, 8, 5];

const hexShow = document.querySelector(".hex-show");
const hexBtn = document.querySelector(".hex-btn");
const hexValue = document.querySelector(".hex");

hexBtn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += [getRandomHex()];
  }

  hexShow.style.backgroundColor = hexColor;
  hexValue.textContent = hexColor;
});

function getRandomHex() {
  return Math.floor(Math.random() * hex.length);
}

//  ==============================================================
// number counter
// ===============================================================

let count = 0;

const value = document.querySelector(".count-value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "gray";
    }
    value.textContent = count;
  });
});
