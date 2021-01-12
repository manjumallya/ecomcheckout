import '@lion/input/lion-input.js';
import {ajax} from "@lion/ajax";
import {html, render} from "lit-html";
import '@lion/fieldset/lion-fieldset.js';
import {Validator} from "@lion/form-core";

export let submittedAddress

const formAddress = (addressData = {}, name = '', phoneNumber = '') => {
    const AddressValidator = class extends Validator {
        static get validatorName() {
            return 'AddressValidator';
        }
        execute(value) {
            if (value && (value.name && value.street && value.houseNumber && value.postalCode && value.city && value.phone)) {
                document.getElementById('submitAddress').disabled = false
                return false;
            }
            document.getElementById('submitAddress').disabled = true
            return true;
        }
        static async getMessage() {
            return 'All fields are required';
        }
    };
    return html`
                <lion-fieldset name="nameGroup" id="fieldset" .validators="${[new AddressValidator()]}" label="Name">
                    <lion-input  name="name" .modelValue=${name} label="Correspondence Name"></lion-input>
                    <lion-input  name="street" .modelValue=${addressData.street} label="Street Name"></lion-input>
                    <lion-input  name="houseNumber" .modelValue=${addressData.houseNumber} label="House Number"></lion-input>
                    <lion-input  name="postalCode" .modelValue=${addressData.postalCode} label="Postal Code"></lion-input>
                    <lion-input  name="city" .modelValue=${addressData.city} label="city"></lion-input>
                    <lion-input  name="phone" .modelValue=${phoneNumber} label="Phone Number"></lion-input>
                     <button id="submitAddress" @click=${setAddressData}>
                        Submit Address
                    </button>
                </lion-fieldset>
                `;
}
const setAddressData = (event) => {
    event.currentTarget.disabled = true
    document.getElementById('shippingNext').disabled = false
    submittedAddress = event.target.parentElement.modelValue
    ajax
        .post('/updateAddress', submittedAddress)
        .catch(error => {
            console.log(error);
        });
}

const formAddressData = async () => {
    await ajax.get('/getAddress')
        .then(response => {
            const addressData = response.data.addresses[0];
            const {correspondenceName, phoneNumber} = response.data
            render(formAddress(addressData, correspondenceName, phoneNumber), document.querySelector('#addressForm'))
        }).catch(error=> {
            render(formAddress(), document.querySelector('#addressForm'))
        })
}

export const  getAddressForm = async () => {
    let address =await formAddressData();
}

