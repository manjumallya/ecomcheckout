import {html, render} from "lit-html";
import {ajax} from "@lion/ajax";
import '@lion/input/lion-input.js';
import {basketPrice} from './basket'

const formAccount = (accountData) =>
                html`
                    <lion-input  readonly .modelValue=${accountData.number} label="Account Number"></lion-input>
                    <lion-input  readonly .modelValue=${accountData.name} label="Account Name"></lion-input>
                    <p>Payment Price: ${basketPrice}</p>
                    <p id="errorBalance"></p>
                `;

const formAccountData = async () => {
    await ajax.get('../data/account.json')
        .then(response => {
            let accountData = response.data.accounts[0];
            render(formAccount(accountData), document.querySelector('#accountForm'))
            if (isInsufficientBalance(accountData.amount, basketPrice)) {
                $('#errorBalance').html('Insufficient balance')
                document.getElementById('paymentNext').disabled = true
            }
        })
}

export const getAccountDetails = async () => {
    let accountData = await formAccountData()
}

const isInsufficientBalance = (amount, basketPrice) => {
    return amount - basketPrice < 0 ? true : false
}

export const updateBasketStock = (productdata) =>{
    ajax
        .post('http://localhost:3000/updateSku', productdata)
        .catch(error => {
            console.log(error);
        });
}
