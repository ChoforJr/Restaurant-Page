import "./style.css";
import { para } from "./home.js";
import { havenMenu } from "./menu.js";
import { havenContact } from "./contact.js";

const content = document.querySelector("#content");
content.appendChild(para);

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.addEventListener('click', ()=>{
    content.textContent = "";
    content.appendChild(para);
})

menu.addEventListener('click', ()=>{
    content.textContent = "";
    content.appendChild(havenMenu);
})

contact.addEventListener('click', ()=>{
    content.textContent = "";
    content.appendChild(havenContact);
})