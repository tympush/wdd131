const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const title = document.querySelector(".headerTitle")
const header = document.querySelector("header")

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
    title.classList.toggle("hidden");
    header.classList.toggle("active")
});