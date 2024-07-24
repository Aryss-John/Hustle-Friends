document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('ProductContainer');
       // Update cart badge and dropdown on load
      updateCartBadge();
      updateCartDropdown();
  });

  function addToCart(productName, price) {
const cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
const existingItem = cartItems.find(item => item.productName === productName);

if (existingItem) {
  existingItem.quantity += 1;
} else {
  cartItems.push({ productName, price, quantity: 1 });
}

localStorage.setItem('ShoppingBag', JSON.stringify(cartItems));
updateCartBadge();
updateCartDropdown();
}

function removeFromCart(productName) {
let cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
const itemIndex = cartItems.findIndex(item => item.productName === productName);

if (itemIndex !== -1) {
  if (cartItems[itemIndex].quantity > 1) {
      cartItems[itemIndex].quantity -= 1;
  } else {
      cartItems.splice(itemIndex, 1);
  }
}

localStorage.setItem('ShoppingBag', JSON.stringify(cartItems));
updateCartBadge();
updateCartDropdown();
}

function updateCartBadge() {
const cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
document.getElementById('cartItemCount').textContent = itemCount;
}

function updateCartDropdown() {
const cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
const cartItemsList = document.getElementById('cartItemsList');
const cartTotalPrice = document.getElementById('cartTotalPrice');
cartItemsList.innerHTML = '';

if (cartItems.length === 0) {
  const noItems = document.createElement('li');
  noItems.className = 'px-4 py-2 text-sm';
  noItems.textContent = 'No items in cart';
  cartItemsList.appendChild(noItems);
  cartTotalPrice.textContent = '0';
} else {
  let totalPrice = 0;
  cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
      const li = document.createElement('li');
      li.className = 'px-4 py-2 text-sm flex justify-between items-center';
      li.innerHTML = `
          <span>${item.productName}</span>
          <span>${item.quantity} x ₱${item.price}</span>
          <button onclick="removeFromCart('${item.productName}')" class="ml-2 text-red-600 hover:text-red-800 transition-all">Remove</button>
      `;
      cartItemsList.appendChild(li);
  });
  cartTotalPrice.textContent = totalPrice.toFixed(2);
}
}

// Close the dropdown if clicked outside
window.addEventListener('click', (e) => {
const cartButton = document.getElementById('myCartDropdownButton1');
const cartDropdown = document.getElementById('myCartDropdown1');
if (!cartButton.contains(e.target) && !cartDropdown.contains(e.target)) {
  cartDropdown.classList.add('hidden');
}
});

document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.getElementById('myCartDropdownButton1');
    const cartDropdown = document.getElementById('myCartDropdown1');
    const cartItemsList = document.getElementById('cartItemsList');

    cartButton.addEventListener('click', () => {
        cartDropdown.classList.toggle('hidden');
        updateCartDropdown();
    });

    function updateCartDropdown() {
        const cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
        cartItemsList.innerHTML = '';

        if (cartItems.length === 0) {
        const noItems = document.createElement('li');
        noItems.className = 'px-4 py-2 text-sm';
        noItems.textContent = 'No items in cart';
        cartItemsList.appendChild(noItems);
        } else {
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.className = 'px-4 py-2 text-sm flex justify-between items-center';
            li.innerHTML = `
            <span>${item.productName}</span>
            <span>${item.quantity} x ₱${item.price}</span>
            `;
            cartItemsList.appendChild(li);
        });
        }
    }

    // Close the dropdown if clicked outside
    window.addEventListener('click', (e) => {
        if (!cartButton.contains(e.target) && !cartDropdown.contains(e.target)) {
        cartDropdown.classList.add('hidden');
        }
    });
});