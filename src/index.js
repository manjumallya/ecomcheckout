
import '@lion/steps/lion-steps.js';
import '@lion/steps/lion-step.js';
import {stepper} from './stepper'

const button = document.querySelector('lion-button');
export var counter = 1;
button.addEventListener('click', event => {
    document.getElementById('container').innerHTML = stepper
});


