"use strict"

// select modal class
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const openBtnModal = document.querySelectorAll(".show-modal");

for(let i = 0; i < openBtnModal.length; i++){
    openBtnModal[i].addEventListener("click", function() {
        modal.classList.remove("hidden");
    });
}
// console.log(openBtnModal);