import {html, render} from "lit-html";
import{myList} from "./basket";
import {submittedAddress} from "./shipping";

const thankYouMessage = () =>
    html `
        <strong>Thank you for your order</strong>
        <p>Items going to be delivered: </p><br>
        ${myList}
        <h4>Delivery Address: </h4>
        <p >
        ${submittedAddress.email}
        ${submittedAddress.name} <br>
        ${submittedAddress.street} <br>
        ${submittedAddress.houseNumber} <br>
        ${submittedAddress.postalCode} <br>
        ${submittedAddress.city} <br>
        ${submittedAddress.phone}
        </p>
    `
export const getThankYouContent = () => {
    render(thankYouMessage(), document.querySelector('#thankYouContent'))
}
