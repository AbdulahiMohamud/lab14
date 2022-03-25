/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
let removeTR = document.querySelector('tr');
element.remove();
// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  
  
  // DONE: Find the table body
  let tbody = document.querySelector('#cart tbody');
  
  // DONE: Iterate over the items in the cart
  for(let i = 0; i < cart.items.length; i++){
    let tr = document.createElement('tr');

    let tdRemove = document.createElement('td');
    tdRemove.textContent = 'X';
    tr.appendChild(tdRemove);

    let tdQuantity = document.createElement('td');
    tdQuantity.textContent = cart.items[i].quantity;
    tr.appendChild(tdQuantity);

    let tdItem= document.createElement('td');
    tdItem.textContent = cart.items[i].product;
    tr.appendChild(tdItem);

    tbody.appendChild(tr);

  }

  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR



}

function removeItemFromCart(event) {
  if(click){
    cart.removeItem 
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
showCart();