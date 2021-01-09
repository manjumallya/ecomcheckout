import '@lion/steps/lion-steps.js';
import '@lion/steps/lion-step.js';
import {counter, renderBasketButton} from "./index";
import {html, render} from "lit-html";
import {basketSKUHtml} from "./basket";
import {getAddressForm} from "./shipping";

const defineContent = () => html
    `<lion-steps id="steps">
        <lion-step @enter="${basketSKUHtml}" id="basketContent" initial-step>
            Cart
            <div id="basketDivContent">
                <ul id="basketList"></ul>
            </div>
            <lion-button id="basketNext">next</lion-button>
        </lion-step> 
        <lion-step @enter="${getAddressForm}">
            Delivery Address
            <div id="addressForm"></div>
            <lion-button id="shippingPrev">previous</lion-button>
            <lion-button id="shippingNext">next</lion-button>
        </lion-step>
         <lion-step>
            Payment
            <lion-button id="paymentNext">confirm</lion-button>
         </lion-step>
          <lion-step>Thank you
            <lion-button id="home">Home</lion-button>
          </lion-step>
       </lion-steps>`;


let basketNext, shippingPrev, shippingNext, paymentNext, homeButton

const next = () => {
    return document.getElementById('steps').next();
}

const previous = () => {
    return document.getElementById('steps').previous();
}

export const loadContent = () => {
    if(counter === 1) {
        render(defineContent(), document.querySelector('#content'))
        navigate()
    }
}

const navigate = () => {
    basketNext = document.querySelector('#basketNext');
    basketNext.addEventListener('click', event => {
        next()
        document.querySelector('#step1').disabled = true
        document.querySelector('#step2').disabled = false
    });
    shippingPrev = document.querySelector('#shippingPrev');
    shippingPrev.addEventListener('click', event => {
        previous()
        document.querySelector('#step1').disabled = false
        document.querySelector('#step2').disabled = true
    });
    shippingNext = document.querySelector('#shippingNext');
    shippingNext.addEventListener('click', event => {
        next()
        document.querySelector('#step2').disabled = true
        document.querySelector('#step3').disabled = false
    });
    paymentNext = document.querySelector('#paymentNext');
    paymentNext.addEventListener('click', event => {
        next()
        document.querySelector('#step3').disabled = true
        document.querySelector('#step4').disabled = false
    });
    homeButton = document.querySelector('#home')
    homeButton.addEventListener('click', event =>{
        document.getElementById('stepper').innerHTML = '';
        document.getElementById('content').innerHTML = '';
        render(renderBasketButton(), document.querySelector('#homepage'))
    })
}
