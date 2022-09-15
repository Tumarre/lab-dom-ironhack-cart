// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let result = Number(price * quantity);
  const subtotal = product.querySelector('.subtotal span');
  return (subtotal.textContent = result);
}

function calculateAll(product) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const productElements = document.querySelectorAll('.product');

  let totalPriceee = 0;
  productElements.forEach((producte) => {
    let productTotal = updateSubtotal(producte);
    totalPriceee += productTotal;
  });
  let totalPriceSuu = document.querySelector('#total-value span');
  totalPriceSuu.innerHTML = totalPriceee.toFixed(2);
  console.log(`This is total price ${totalPriceee}`);
}
// ITERATION 3
//... your code
// ITERATION 4

let removeBtt = document.querySelectorAll('.btn-remove');
removeBtt.forEach((button) => {
  button.addEventListener('click', removeProduct);
  button.addEventListener('click', calculateAll);
});
function removeProduct(event) {
  const target = event.currentTarget;
  const targetParent = target.parentNode.parentNode;
  const parent = target.parentNode.parentNode.parentNode;
  parent.removeChild(targetParent);
}
console.log(removeBtt);
// ITERATION 5

// function createProduct() {
//   //... your code goes here
//   const name = document.querySelectorAll('.create-product input')[0].value;
//   const price = document.querySelectorAll('.create-product input')[1].value;

//   createNewProductRow(name, price);

//   clearInputFlieds();
// }

// function clearInputFlieds() {
//   [...document.querySelectorAll('.create-product input')].forEach(
//     (wuTangArgument) => {
//       wuTangArgument.value = '';
//     }
//   );
// }

// function createNewProductRow(name, price) {
//   const cart = document.querySelectorAll('tbody');
//   const trProduct = document.createElement('tr');
//   trProduct.className = 'product';
//   const tdName = document.createElement('td');
//   const nameSpan = document.createElement('span');
//   tdName.className = 'name';
//   nameSpan.innerText = name;
//   tdName.appendChild(nameSpan);
//   const tdPrice = document.createElement('td');
//   tdPrice.className = 'price';
//   tdPrice.innerText = '€';
//   const tdPriceContent = document.createElement('span');
//   tdPriceContent.innerText = price;
//   tdPrice.appendChild(tdPriceContent);
//   const tdQuantity = document.createElement('td');
//   tdQuantity.className = 'quantity';
//   const quantityInput = document.createElement('input');
//   quantityInput.className = 'number';
//   quantityInput.value = 0;
//   quantityInput.placeholder = 'Quantity';
//   quantityInput.min = 0;
//   tdQuantity.appendChild(quantityInput);
//   const tdSubtotal = document.createElement('td');
//   tdSubtotal.className = 'subtotal';
//   tdSubtotal.innerText = '€';
//   const subTotalSpan = document.createElement('span');
//   subTotalSpan.innerText = 0;
//   tdSubtotal.appendChild(subTotalSpan);
//   const tdAction = document.createElement('td');
//   tdAction.className = 'action';
//   const buttonAction = document.createElement('button');
//   buttonAction.className = 'btn btn-remove';
//   buttonAction.innerText = 'Remove';
//   buttonAction.addEventListener('click', removeProduct);
//   tdAction.appendChild(buttonAction);

//   trProduct.appendChild(tdName);
//   trProduct.appendChild(tdPrice);
//   trProduct.appendChild(tdQuantity);
//   trProduct.appendChild(tdSubtotal);
//   trProduct.appendChild(tdAction);
//   cart.appendChild(trProduct);
// }

function createProduct() {
  const productName = document.querySelector('.product-name');
  const productPrice = document.querySelector('.product-price');
  const addToList = document.querySelector('tbody');
  addToList.innerHTML += `
  </tr>
        <tr class="product">
          <td class="name">
            <span>${productName.value}</span>
          </td>
          <td class="price">$<span>${productPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>s
  `;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
