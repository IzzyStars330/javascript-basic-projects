// select modal-btn,modal-overlay,close-btn
const ModalBtn = document.querySelector(".modal-btn")
const ModalOverlay = document.querySelector(".modal-overlay")
const CloseBtn = document.querySelector(".close-btn")
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
ModalBtn.addEventListener('click', function() {
    ModalOverlay.classList.add('open-modal')
})
// when user clicks close-btn remove .open-modal from modal-overlay
CloseBtn.addEventListener('click', function() {
    ModalOverlay.classList.remove('open-modal')
})
// things to improve: make this project have a 'close without saving' button or at least a 'close page'