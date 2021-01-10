import '@lion/steps/lion-steps.js';
import '@lion/steps/lion-step.js';
import '@lion/button/lion-button.js'
import {formBasketButton} from "./home";

export var counter = 1;

window.addEventListener('load', () => {
    initUI();
});

const initUI = () => {
    formBasketButton()
}
