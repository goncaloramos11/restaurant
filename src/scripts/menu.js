import "../styles/menu.css";
import Pepperoni from "../images/pepperoni.png";
import Aloha from "../images/aloha.png";
import Barbacue from "../images/barbacue.png";
import Carbonara from "../images/carbonara.png";
import Carnivora from "../images/carnivora.png";
import Queijos from "../images/queijos.png";

export function menuPizza(){
    const content = document.querySelector("#content");
    content.innerHTML = ``;
    const title = document.createElement("div");
    const cards = document.createElement("div");

    title.classList.add("pizzas");
    title.textContent = "PIZZAS";

    cards.classList.add("cards-pizzas");

    const pizza1 = createCard("PEPPERONI", "Pizza Tradicional Pepperoni", 10.99,Pepperoni);
    const pizza2 = createCard("ALOHA", "Nova pizza Aloha", 10.99,Aloha);
    const pizza3 = createCard("BARBACUE", "Pizza especial barbacue", 11.99,Barbacue);
    const pizza4 = createCard("CARNIVORA", "Pizza carnivora em desconto", 6.50,Carnivora);
    const pizza5 = createCard("QUEIJOS", "Pizza normal com queijos e fiambre", 15.99,Queijos);
    const pizza6 = createCard("SUPER PEPPERONI", "Super pepperoni picante", 20.99,Pepperoni);
    const pizza7 = createCard("5 QUEIJOS", "Especial 5 queijos!", 12.99,Queijos);
    const pizza8 = createCard("4 QUEIJOS", "Pizza incrivel de 4 queijos", 13.99,Queijos);
    const pizza9 = createCard("CARBONARA", "Pizza Carbonara ", 12.99,Carbonara);

    cards.appendChild(pizza1);
    cards.appendChild(pizza2);
    cards.appendChild(pizza3);    
    cards.appendChild(pizza4);
    cards.appendChild(pizza5);
    cards.appendChild(pizza6);
    cards.appendChild(pizza7);
    cards.appendChild(pizza8);
    cards.appendChild(pizza9);

    content.appendChild(title);
    content.appendChild(cards);
   
}

function createCard(name, description, price, imageSrc){
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = imageSrc;

    card.appendChild(image);

    const info = document.createElement("div");
    info.classList.add("info");

    info.innerHTML = `  <div class="title">${name}</div>
                            <p>${description}
                            </p>
                        <div class="price">MÉDIA: ${price}$</div>`;

    card.appendChild(info);

    return card;

}
