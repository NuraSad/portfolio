particlesJS.load(
  "particles-js",
  "/assets/particlesjs-config.json",
  function () {}
);

const navBar = document.getElementById("navbar");

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 750) {
    navBar.style.backgroundColor = "#154294";
  } else {
    navBar.style.backgroundColor = "transparent";
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const windowHeight = document.documentElement.clientHeight;

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (
      top >= offset - windowHeight / 2 &&
      top < offset + height - windowHeight / 2
    ) {
      // console.log(id, top, offset, offset + height);
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
