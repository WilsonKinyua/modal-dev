"use strict"

// select modal class
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const openBtnModal = document.querySelectorAll(".show-modal");

// function to display the function
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// function to close the modal and overlay
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// clicking the button displays the modal
for (let i = 0; i < openBtnModal.length; i++) {
    openBtnModal[i].addEventListener("click", openModal);
}

// close the modal window
btnCloseModal.addEventListener("click", closeModal);

// clicking outside the modal close it
overlay.addEventListener("click", closeModal);

// listening to keypress
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains("hidden")) {
        closeModal();
    }
    // console.log(e.key);
});


