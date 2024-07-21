document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('ProductContainer');

    // Function to render product HTML
    const renderProductHTML = (product) => `
        <div class="group relative border border-zinc-200 p-3 rounded-lg" id="product-${product.id}">
            <div class="aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <a href="Product Pages/${product.productName}.html">
                    <img src="${product.image1}" class="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-200 group-hover:scale-125" alt="${product.productName}">
                </a>
            </div>
            <div class="mt-3 flex justify-between">
                <div>
                    <h3 class="text-lg font-medium text-zinc-900">${product.productName}</h3>
                    <p class="mt-1 text-sm text-stone-500">${product.color}</p>
                </div>
                <p class="text-xl font-semibold text-zinc-950 pt-2.5">₱${product.price}</p>
            </div>                
            <button type="button" class="add-to-cart mt-3 w-full inline-flex items-center rounded-md justify-center bg-red-600 px-20 py-2.5 text-sm font-semibold text-white hover:bg-red-700" data-product-id="${product.id}" data-modal-target="successModal" data-modal-toggle="successModal">
                <svg class="-ms-2 me-2 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                </svg>
                Add to Cart
            </button>
            
        </div>
    `;

    // Function to render all products
    const ShowAll = () => {
        productContainer.innerHTML = ''; // Clear existing products
        products.forEach(product => {
            productContainer.insertAdjacentHTML('beforeend', renderProductHTML(product));
        });
    };

    // Display all products on page load
    ShowAll();

    // Function to filter and show products by type
    const showProductsByType = (type) => {
        productContainer.innerHTML = ''; // Clear existing products
        products.filter(product => product.type === type).forEach(product => {
            productContainer.insertAdjacentHTML('beforeend', renderProductHTML(product));
        });
    };

    // Event listeners for filter buttons
    document.getElementById('ShowShortsButton').addEventListener('click', (event) => {
        event.preventDefault();
        showProductsByType('Shorts');
    });

    document.getElementById('ShowTshirtsButton').addEventListener('click', (event) => {
        event.preventDefault();
        showProductsByType('Tshirt');
    });

    document.getElementById('ShowAllProducts').addEventListener('click', (event) => {
        event.preventDefault();
        ShowAll();
    });

    // Handle "Add to Cart" button click
    productContainer.addEventListener('click', (event) => {
        if (event.target.closest('.add-to-cart')) {
            const button = event.target.closest('.add-to-cart');
            const productId = button.getAttribute('data-product-id');
            const product = products.find(p => p.id === parseInt(productId));
            addToCart(product);
            showSuccessModal();
        }
    });

    // Function to show success modal
    const showSuccessModal = () => {
        const modal = document.getElementById('successModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    };

    // Function to hide success modal
    const hideSuccessModal = () => {
        const modal = document.getElementById('successModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    };

    // Event listener to close the modal
    document.addEventListener('click', (event) => {
        if (event.target.closest('[data-modal-toggle="successModal"]')) {
            hideSuccessModal();
        }
    });

    // Initialize modal (if it's already in HTML)
    const initialModal = document.getElementById('successModal');
    if (initialModal) {
        initialModal.addEventListener('click', (event) => {
            if (event.target === initialModal) {
                hideSuccessModal();
            }
        });
    }
});
