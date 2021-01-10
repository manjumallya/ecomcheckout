import {html, render} from "lit-html";
import { ajax } from '@lion/ajax';

export let basketPrice
export let myList
const formSKUList = () => {
    myList = document.querySelector('#basketList');
    if($('#basketList').contents().length == 0) {
        ajax.get('../data/sku.json')
            .then(response => {
                response.data.basket.sort((a, b) => (a.fulfillmentType > b.fulfillmentType) ? 1 : -1)
                basketPrice = response.data.basketSummary.price
                for (const product of response.data.basket) {
                    let listItem = document.createElement('li');
                    listItem.appendChild(
                        document.createElement('strong')
                    ).textContent = product.title;
                    listItem.appendChild(
                        document.createElement('br')
                    )
                    let img = document.createElement('img')
                    img.src = product.mediaUrl
                    listItem.appendChild(
                        img
                    )
                    listItem.appendChild(
                        document.createElement('br')
                    )
                    listItem.append(
                        ` Delivery time ${
                            product.deliveryTime
                        }`
                    );
                    listItem.appendChild(
                        document.createElement('br')
                    )
                    listItem.appendChild(
                        document.createElement('strong')
                    ).textContent = `quantity : ${product.quantity}`;
                    listItem.appendChild(
                        document.createElement('br')
                    )
                    listItem.appendChild(
                        document.createElement('strong')
                    ).textContent = `fulfillmentType : ${product.fulfillmentType}`;
                    myList.appendChild(listItem);
                }
                render(myList, document.querySelector('#basketDivContent'))
            })
    }
}

export const basketSKUHtml = () => formSKUList()

