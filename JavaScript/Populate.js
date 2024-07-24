
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('ProductContainer');

    products.forEach(product => {
        const productHTML = `
            <div class="bg-white shadow-lg rounded-lg border-b-4 border-red-600 overflow-hidden transform duration-300 hover:scale-105 hover:shadow-2xl product-card" data-type="${product.type}" style="opacity: 0; transform: translateY(20px);">
                <div class="product-image">
                    <a href="Product Pages/${product.productName}.html">
                        <img class="object-cover default-image rounded-t-xl h-96 w-screen" src="${product.image1}" alt="Product Image">
                        <img class="object-cover hover-image rounded-t-xl h-96 w-screen" src="${product.image2}" alt="Product Image Hover">
                    </a>
                </div>
                    
                <div class="p-3 border-l-2 border-r-2 border-zinc-200">
                    <h3 class="text-xl font-bold text-gray-800 text-center">${product.productName}</h3>
                    <div class="flex items-center justify-between mt-3">
                        <span class="text-gray-800 font-medium text-xl">₱${product.price}</span>
                        <span class="text-yellow-400 text-2xl">${product.rating}</span>
                    </div>
                </div>

                <div class="flex flex-row">
                    <button onclick="addToCart('${product.productName}', ${product.price}, '${product.image1}')" class="w-1/3 flex items-center justify-center bg-red-600 text-white py-2 hover:bg-red-500 transition-all">
                        <svg class="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                        </svg>
                    </button>
                    <button class="flex-1 text-red-600 py-2 border border-red-600 hover:bg-red-100 transition-all">
                        Buy Now
                    </button>
                </div>
            </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', productHTML);
    });

    // Animation for product cards on page load
    const productCards = document.querySelectorAll('.product-card');
    let delay = 100; // Initial delay in ms

    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        }, delay);
        delay += 100; // Increment delay for staggered animation effect
    });

    document.getElementById('ShowTshirtsButton').addEventListener('click', () => filterProducts('Tshirt'));
    document.getElementById('ShowShortsButton').addEventListener('click', () => filterProducts('Bottom'));
    document.getElementById('ShowHoodiesButton').addEventListener('click', () => filterProducts('Hoodie'));
    document.getElementById('ShowAllProducts').addEventListener('click', () => filterProducts('All'));
});

function filterProducts(type) {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        if (type === 'All' || card.dataset.type === type) {
            card.classList.remove('hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.classList.add('hidden');
            }, 500); // Match this duration with the transition duration
        }
    });
}

