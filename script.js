let open = document.getElementsByClassName("open")[0];
let modal = document.getElementsByClassName("modal")[0];
let close = document.getElementsByClassName("close")[0];

let isActive = () => {
    modal.classList.remove("active")
}

open.addEventListener("click", () => {
    modal.classList.add("active");
});

close.addEventListener("click", isActive)

window.onclick = function(event) {
    if (event.target.tagName == "HTML" || event.target.tagName == "MAIN") {
        isActive();
    }
  }