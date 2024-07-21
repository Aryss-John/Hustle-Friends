function addToCart(product) {
    const cartContainer = document.getElementById('CartContainer');
    const cartItemHTML = `
        <div class="rounded-lg border border-gray-200 bg-stone-50 p-4 shadow-sm md:p-6">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" class="shrink-0 md:order-1">
                    <img class="h-20 w-20" src="${product.image1}" alt="${product.productName}" />
                </a>
                <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a href="#" class="text-base font-medium text-gray-900 hover:underline" id="productName">${product.productName} ${product.color}</a>
                    <div class="flex items-center gap-4">
                        <button type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline" onclick="removeFromCart(${product.id})">
                            <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                        </button>
                    </div>
                </div>
                <label for="counter-input-${product.id}" class="sr-only">Choose quantity:</label>
                <div class="flex items-center justify-between md:order-3 md:justify-end">
                    <div class="flex items-center">
                        <button type="button" id="decrement-button-${product.id}" onclick="decrementQuantity(${product.id})" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                            <svg class="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                            </svg>
                        </button>
                        <input type="text" id="counter-input-${product.id}" class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" placeholder="" value="${product.quantity}" required />
                        <button type="button" id="increment-button-${product.id}" onclick="incrementQuantity(${product.id})" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                            <svg class="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                    </div>
                    <div class="text-end md:order-4 md:w-32">
                        <p class="text-base font-bold text-gray-900" id="productPrice">₱${product.totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);
}

document.addEventListener('DOMContentLoaded', () => {
    const addToCart = document.getElementById('AddToCart');
    addToCart.addEventListener('click', (event) => {
        event.preventDefault();
        addToCart();
    });
});

function removeFromCart(productId) {
    const cartItem = document.querySelector(`#CartContainer [id="counter-input-${productId}"]`).closest('.rounded-lg');
    if (cartItem) {
        cartItem.remove();
    }
}

function decrementQuantity(productId) {
    const input = document.querySelector(`#counter-input-${productId}`);
    let quantity = parseInt(input.value);
    if (quantity > 1) {
        input.value = --quantity;
        updateTotalPrice(productId, quantity);
    }
}

function incrementQuantity(productId) {
    const input = document.querySelector(`#counter-input-${productId}`);
    let quantity = parseInt(input.value);
    input.value = ++quantity;
    updateTotalPrice(productId, quantity);
}

function updateTotalPrice(productId, quantity) {
    const product = products.find(p => p.id === productId);
    const price = product.price;
    const totalPrice = quantity * price;
    document.querySelector(`#productPrice`).textContent = `₱${totalPrice}`;
}
