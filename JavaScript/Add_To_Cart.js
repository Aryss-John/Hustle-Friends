document.addEventListener('DOMContentLoaded', () => {
  // Update cart badge and dropdown on load
  updateCartBadge();
  updateCartDropdown();
});

function addToCart(productName, price, image1) {
  const cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
  const existingItem = cartItems.find(item => item.productName === productName);

  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cartItems.push({ productName, price, quantity: 1, image1 });
  }

  localStorage.setItem('ShoppingBag', JSON.stringify(cartItems));
  updateCartBadge();
  updateCartDropdown();
  animateAddToCart();
  showConfirmationModal();
}

function removeFromCart(productName) {
  let cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
  
  // Filter out the item to be removed
  cartItems = cartItems.filter(item => item.productName !== productName);

  // Update the localStorage with the new cartItems array
  localStorage.setItem('ShoppingBag', JSON.stringify(cartItems));

  // Update UI
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
      li.className = 'px-4 py-2 text-sm flex items-center';
      li.innerHTML = `
        <img src="${item.image1}" alt="${item.productName}" class="w-16 h-16 object-cover mr-2">
        <div class="flex-1 flex justify-between items-center">
          <span>${item.productName}</span>
          <div class="flex items-center">
            <button onclick="decrementQuantity('${item.productName}')" class="text-red-600 hover:text-red-800 transition-all mx-2">-</button>
            <span>${item.quantity}</span>
            <button onclick="incrementQuantity('${item.productName}')" class="text-green-600 hover:text-green-800 transition-all mx-2">+</button>
            <span class="ml-2">₱${item.price}</span>
            <button onclick="removeFromCart('${item.productName}')" class="ml-2 text-red-600 hover:text-red-800 transition-all">Remove</button>
          </div>
        </div>
      `;
      cartItemsList.appendChild(li);
    });
    cartTotalPrice.textContent = totalPrice.toFixed(2);
  }
}

function incrementQuantity(productName) {
  const cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
  const existingItem = cartItems.find(item => item.productName === productName);

  if (existingItem) {
      existingItem.quantity += 1;
  }

  localStorage.setItem('ShoppingBag', JSON.stringify(cartItems));
  updateCartBadge();
  updateCartDropdown();
}

function decrementQuantity(productName) {
  const cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
  const existingItem = cartItems.find(item => item.productName === productName);

  if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
  } else {
      removeFromCart(productName);
  }

  localStorage.setItem('ShoppingBag', JSON.stringify(cartItems));
  updateCartBadge();
  updateCartDropdown();
}

function animateAddToCart() {
  const cartButton = document.getElementById('myCartDropdownButton1');
  cartButton.classList.add('animate-bounce');
  setTimeout(() => {
      cartButton.classList.remove('animate-bounce');
  }, 500);
}

function showConfirmationModal() {
  const confirmationModal = document.getElementById('confirmationModal');
  confirmationModal.classList.remove('hidden');

  setTimeout(() => {
      confirmationModal.classList.add('hidden');
  }, 2000);
}

function closeModal() {
  document.getElementById('confirmationModal').classList.add('hidden');
}

// Close the dropdown if clicked outside
window.addEventListener('click', (e) => {
  const cartButton = document.getElementById('myCartDropdownButton1');
  const cartDropdown = document.getElementById('myCartDropdown1');
  if (!cartButton.contains(e.target) && !cartDropdown.contains(e.target)) {
      cartDropdown.classList.add('hidden');
  }
});
