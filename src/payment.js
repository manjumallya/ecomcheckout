import {html, render} from "lit-html";
import {ajax} from "@lion/ajax";
import '@lion/input/lion-input.js';
import {basketPrice} from './basket'

const formAccount = (accountData) =>
                html`
                    <lion-input  readonly .modelValue=${accountData.number} label="Account Number"></lion-input>
                    <lion-input  readonly .modelValue=${accountData.name} label="Account Name"></lion-input>
                    <p>Payment Price: ${basketPrice}</p>
                `;

const formAccountData = async () => {
    await ajax.get('../data/account.json')
        .then(response => {
            let accountData = response.data.accounts[0];
            render(formAccount(accountData), document.querySelector('#accountForm'))
        })
}

export const getAccountDetails = async () => {
    let accountData = await formAccountData()
}
