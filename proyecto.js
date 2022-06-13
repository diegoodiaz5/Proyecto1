const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const atras = document.querySelector(".atrass");
const bodyStyle = document.querySelector("body").style

function toggleModal() {
    modal.classList.toggle("show-modal");
    if (modal.classList.contains("show-modal")){
        bodyStyle.overflow = "hidden"
    } else { bodyStyle.overflow = "scroll"}
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

atras.addEventListener("click", toggleModal);
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);