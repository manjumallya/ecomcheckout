import '@lion/steps/lion-steps.js';
import '@lion/steps/lion-step.js';
import {stepper} from './stepper'
import {loadContent} from "./navigation";
import {html, render} from "lit-html";

export var counter = 1;

window.addEventListener('load', () => {
    initUI();
});

const initUI = () => {
    render(renderBasketButton(), document.querySelector('#homepage'))
    const button = document.querySelector('#goToBasket');
    button.addEventListener('click', event => {
        document.getElementById('homepage').innerHTML = '';
        render(stepper(), document.querySelector('#stepper'))
        loadContent()
    });
}

export const renderBasketButton = () => html
    `<lion-button id="goToBasket">Basket</lion-button>`
