const modalBtn = document.querySelector(".modal-btn")
const modalEl = document.querySelector(".modal-overlay")
const closeBtn =  document.querySelector(".close-btn")

modalBtn.addEventListener("click", function () {
    modalEl.classList.add("open-modal")
})

closeBtn.addEventListener("click", function(){
    modalEl.classList.remove("open-modal")
})

