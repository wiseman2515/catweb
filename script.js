const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Kurwa! I Knew it ";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnR4Zm83NDQ2NXV5ajRocmUxYXZ5bHN5dG5meDNzbGhpdGFoZGpsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/7JA8CIHsr0IfYPZpOE/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});