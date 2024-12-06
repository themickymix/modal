const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const isOpen = false;

function openModal() {
  if (!isOpen) {
    modal.style.display = "block";
    modal.style.animation = "fadeIn 0.5s forwards";
  }
}

function closeModal() {
  modal.style.animation = "fadeOut 0.5s forwards";
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

//function click outside close
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.animation = "fadeOut 0.5s forwards";
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }
};
