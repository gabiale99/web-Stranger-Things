const btnMenu = document.querySelector(".contenedor-manu svg");
const menu = document.querySelector(".contenedor-nav-boton");

btnMenu.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
});
