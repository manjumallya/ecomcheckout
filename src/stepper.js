
import '@lion/button/lion-button.js';
import {html} from "lit-html";
export const stepper = () => html
    `<lion-button id='step1'>step 1</lion-button> 
    <lion-button id="step2" disabled>step 2</lion-button>
    <lion-button id="step3" disabled>step 3</lion-button>
    <lion-button id="step4" disabled>step 4</lion-button>`;
