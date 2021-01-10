import '@lion/input/lion-input.js';
import {ajax} from "@lion/ajax";
import {html, render} from "lit-html";

export let addressData
export let correspondenceName, phoneNumber
const formAddress = (addressData, name, phoneNumber) =>
                html`
                    <lion-input  .modelValue=${name} label="Correspondence Name"></lion-input>
                    <lion-input  .modelValue=${addressData.street} label="Street Name"></lion-input>
                    <lion-input  .modelValue=${addressData.houseNumber} label="House Number"></lion-input>
                    <lion-input  .modelValue=${addressData.postalCode} label="Postal Code"></lion-input>
                    <lion-input  .modelValue=${addressData.city} label="city"></lion-input>
                    <lion-input  .modelValue=${phoneNumber} label="Phone Number"></lion-input>
                `;

const formAddressData = async () => {
    await ajax.get('../data/address.json')
        .then(response => {
            addressData = response.data.addresses[0];
            ({correspondenceName, phoneNumber} = response.data)
            render(formAddress(addressData, correspondenceName, phoneNumber), document.querySelector('#addressForm'))
        })
}

export const  getAddressForm = async () => {
    let address =await formAddressData();
}
