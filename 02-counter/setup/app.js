// set initial count
let count = 0;

// select value and buttons
const btns = document.querySelectorAll(".btn")
const value = document.querySelector("#value");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(event) {
        const styles = event.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('reset')) {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    })
});    