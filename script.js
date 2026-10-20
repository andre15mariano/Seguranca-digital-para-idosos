let btnModal = document.querySelector(".btnurgente")
let btnFechamodal = document.querySelector(".btnBack")
let modal = document.querySelector(".area-modal")

btnModal.addEventListener("click", abreModal);
btnFechamodal.addEventListener("click", fechaModal);

function abreModal () {
    modal.style.display = "block";
}

function fechaModal() {
    modal.style.display = "none";
}