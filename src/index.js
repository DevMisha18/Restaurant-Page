import "./styles/main.css";
import { homePage } from "./pages/home.js"
import { menuPage } from "./pages/menu.js"
import { contactPage } from "./pages/contact.js"


const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.addEventListener("click", () => {
  content.textContent = "";
  homePage();
  import("./styles/home.css");
})

menuBtn.addEventListener("click", () => {
  content.textContent = "";
  menuPage();
  import("./styles/menu.css");
})

contactBtn.addEventListener("click", () => {
  content.textContent = "";
  contactPage();
  import("./styles/contact.css");
})

homeBtn.click();