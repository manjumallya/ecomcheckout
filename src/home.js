import {html, render} from "lit-html";
import {stepper} from "./stepper";
import {loadContent} from "./navigation";
import '@lion/button/lion-button.js'

export const formBasketButton = () => {
    render(renderBasketButton(), document.querySelector('#homepage'))
    const button = document.querySelector('#goToBasket');
    button.addEventListener('click', event => {
        document.getElementById('homepage').innerHTML = '';
        render(stepper(), document.querySelector('#stepper'))
        loadContent()
    });
}

const renderBasketButton = () =>
    html
        `<lion-button id="goToBasket">Basket</lion-button>`;

