import "../styles/main.css"

export function homePage(){
    const content = document.querySelector("#content");

    content.innerHTML = 
    `<div class="title-content">Pizzaria</div>
        <button class="contact">
            Contact Us
        </button>`
}