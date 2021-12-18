const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let rgb = 'rgb(';
  for (let i = 0; i < 3; i++) {
    rgb += getRandomNumber();
    if (i < 2) {
        rgb +=',';
    } else {
        rgb +=')';
    }
  };

  color.textContent = rgb;
  document.body.style.backgroundColor = rgb;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}