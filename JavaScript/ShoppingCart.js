document.addEventListener('DOMContentLoaded', () => {
    updateCartPage();
});

function updateCartPage() {
    const cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    cartItemsList.innerHTML = '';

    if (cartItems.length === 0) {
        const noItems = document.createElement('li');
        noItems.className = 'px-4 py-2 text-sm';
        noItems.textContent = 'No items in cart';
        cartItemsList.appendChild(noItems);
        cartTotalPrice.textContent = '₱0.00';
    } else {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;
            const li = document.createElement('li');
            li.className = 'flex items-center bg-white p-4 rounded-lg shadow-lg border-2 border-zinc-200 mt-4';
            li.innerHTML = `
                <img src="${item.image1}" alt="${item.productName}" class="w-16 h-16 object-cover mr-4">
                <div class="flex-1">
                    <h3 class="font-bold text-xl">${item.productName}</h3>
                    <p class="text-gray-600 font-medium">₱${item.price}</p>
                </div>
                <div class="flex items-center">
                    <button onclick="decrementQuantity('${item.productName}')" class="text-red-600 hover:text-red-800 transition-all mx-2">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="incrementQuantity('${item.productName}')" class="text-green-600 hover:text-green-800 transition-all mx-2">+</button>
                    <button onclick="removeFromCart('${item.productName}')" class="ml-4 text-red-600 hover:text-red-800 transition-all">Remove</button>
                </div>
            `;
            cartItemsList.appendChild(li);
        });
        cartTotalPrice.textContent = `₱${totalPrice.toFixed(2)}`;
    }
}

function removeFromCart(productName) {
    let cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
    cartItems = cartItems.filter(item => item.productName !== productName);
    localStorage.setItem('ShoppingBag', JSON.stringify(cartItems));
    updateCartPage();
}

function incrementQuantity(productName) {
    const cartItems = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
    const existingItem = cartItems.find(item => item.productName === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    }

    localStorage.setItem('ShoppingBag', JSON.stringify(cartItems));
    updateCartPage();
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
    updateCartPage();
}
function hideCartDropdownButton() {
    const cartButton = document.getElementById('myCartDropdownButton1');
    if (cartButton) {
        cartButton.classList.add('hidden');
    }
}