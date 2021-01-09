import '@lion/input/lion-input.js';
import {ajax} from "@lion/ajax";
import {html, render} from "lit-html";

const formAddress = (addressData) =>
                html`
                    <lion-input  .modelValue=${addressData.streetName} label="streetName"></lion-input>
                    <lion-input  .modelValue=${addressData.doorNumber} label="doorNumber"></lion-input>
                    <lion-input  .modelValue=${addressData.postalCode} label="postalCode"></lion-input>
                    <lion-input  .modelValue=${addressData.city} label="city"></lion-input>
                    <lion-input  .modelValue=${addressData.country} label="country"></lion-input>
                `;

const formAddressData = async () => {
    await ajax.get('../data/address.json')
        .then(response => {
            let addressData = response.data.addressList[0];
            render(formAddress(addressData), document.querySelector('#addressForm'))
        })
}

export const  getAddressForm = async () => {
    let addressData =await formAddressData();
}
