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

// Done: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let removeTr = document.querySelector('tr');
  element.remove();
}

// done: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // Done: Find the table body
let tb = document.querySelector('#cart tbody');
  // Done: Iterate over the items in the cart
  for (let i in cart.items) {
    // Done: Create a TR
    let tr = document.createElement('tr');
    
    // Done: Create a TD for the delete link, quantity,  and the item
    let tdRmv = document.createElement('td')
    tdRmv.textContent = 'X';
    tr.appendChild(tdRmv);

    let tdQuant = document.createElement('td')
    tdQuant.textContent = cart.items[i].quantity;
    tr.appendChild(tdQuant);

    let tdItems = document.createElement('td')
    tdItems.textContent = cart.items[i].product;
    tr.appendChild(tdItems);

    // Done: Add the TR to the TBODY and each of the TD's to the TR
    tb.appendChild(tr);
  }
  


}

function removeItemFromCart(event) {

  // Done: When a delete link is clicked, use cart.removeItem to remove the correct item
  let clicked = event.target.tagName ;
  if (clicked.innerText === 'X')  {
    cart.removeItem();
  }else{

  }
  // TODO: Save the cart back to local storage
  
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();