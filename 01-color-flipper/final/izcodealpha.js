const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let rgba = 'rgba(';
  for (let i = 0; i < 3; i++) {
    rgba += getRandomNumber();
    rgba +=',';
  };
  rgba += Math.random().toFixed(3);
  rgba += ')';

  color.textContent = rgba;
  document.body.style.backgroundColor = rgba;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}