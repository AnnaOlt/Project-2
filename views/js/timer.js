// var timeEl = document.querySelector(".time");
// // var mainEl = document.getElementById("main");

// var secondsLeft = 20;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft;

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = "TIME OVER";
// }

// setTime();

const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".timerfinal");
const repl = document.getElementById("replay");

runAnimation();

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const penultimate = nums.length - 1;
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== penultimate) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

repl.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
