import {html, render} from "lit-html";
import{myList} from "./basket";
import {addressData, correspondenceName, phoneNumber} from "./shipping";

const thankYouMessage = () =>
    html `
        <strong>Thank you for your order</strong>
        <p>Items going to be delivered: </p><br>
        ${myList}
        <h4>Delivery Address: </h4>
        <p>
        ${correspondenceName} <br>
        ${addressData.street} <br>
        ${addressData.houseNumber} <br>
        ${addressData.postalCode} <br>
        ${addressData.city} <br>
        ${phoneNumber}
        </p>
    `
export const getThankYouContent = () => {
    render(thankYouMessage(), document.querySelector('#thankYouContent'))
}
