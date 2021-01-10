import '@lion/input/lion-input.js';
import {ajax} from "@lion/ajax";
import {html, render} from "lit-html";
import '@lion/fieldset/lion-fieldset.js';

export let submittedAddress

const formAddress = (addressData, name, phoneNumber) =>
                html`
                <lion-fieldset name="nameGroup" id="fieldset" label="Name">
                    <lion-input  name="name" .modelValue=${name} label="Correspondence Name"></lion-input>
                    <lion-input  name="street" .modelValue=${addressData.street} label="Street Name"></lion-input>
                    <lion-input  name="houseNumber" .modelValue=${addressData.houseNumber} label="House Number"></lion-input>
                    <lion-input  name="postalCode" .modelValue=${addressData.postalCode} label="Postal Code"></lion-input>
                    <lion-input  name="city" .modelValue=${addressData.city} label="city"></lion-input>
                    <lion-input  name="phone" .modelValue=${phoneNumber} label="Phone Number"></lion-input>
                     <button @click=${setAddressData}>
                        Submit Address
                    </button>
                </lion-fieldset>
                `;

const setAddressData = (event) => {
    event.currentTarget.disabled = true
    document.getElementById('shippingNext').disabled = false
    submittedAddress = event.target.parentElement.modelValue
}

const formAddressData = async () => {
    await ajax.get('../data/address.json')
        .then(response => {
            const addressData = response.data.addresses[0];
            const {correspondenceName, phoneNumber} = response.data
            render(formAddress(addressData, correspondenceName, phoneNumber), document.querySelector('#addressForm'))
        })
}

export const  getAddressForm = async () => {
    let address =await formAddressData();
}
