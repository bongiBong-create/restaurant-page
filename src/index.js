import "./style.css";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";
import { about } from "./modules/about.js";
import { clear } from "./modules/clear.js";

const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        clear()
        if (btn.id === "btn__home") {
            home()
        } else if (btn.id === "btn__about") {
            about()
        } else {
            menu()
        }
    })
})
