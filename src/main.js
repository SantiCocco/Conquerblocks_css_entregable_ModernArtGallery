import "./styles/main.scss";

const menuLinks = document.querySelectorAll(".header__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove("header__link--active");
    });

    link.classList.add("header__link--active");
  });
});
