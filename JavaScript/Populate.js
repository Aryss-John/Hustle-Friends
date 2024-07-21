document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('ProductContainer');
    

    function addProductsToDOM(products) {
        productContainer.innerHTML = ''; // Clear existing products

        products.forEach(product => {
            const productHTML = `
                <div class="group relative border border-zinc-200 p-3 rounded-lg" id="${product.id}">
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
                    
                    <button type="button" class="add-to-cart mt-3 w-full inline-flex items-center rounded-md justify-center bg-red-600 px-20 py-2.5 text-sm font-semibold text-white hover:bg-red-700" data-product-id="${product.id}" data-modal-target="successModal">
                        <svg class="-ms-2 me-2 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                        </svg>
                        Add to Cart
                    </button>
                    
                </div>
                
                <!-- Success Modal -->
                <div id="successModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 h-modal h-full bg-zinc-950/50">
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto ">
                        <!-- Modal content -->
                        <div class="relative p-4 text-center bg-stone-50 rounded-lg shadow sm:p-5">
                            <button type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-red-400 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center close-modal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="w-12 h-12 rounded-full bg-green-500 p-2 flex items-center justify-center mx-auto mb-3.5 py-2">
                                <svg aria-hidden="true" class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Success</span>
                            </div>
                            <p class="mb-4 text-lg font-semibold text-zinc-950 py-2 ">Successfully Added To Your Cart!</p>
                            <a href="ShoppingCart.html">
                            <button data-modal-toggle="successModal" type="button" class="py-2 px-3 text-sm font-medium text-center text-zinc-950 rounded-lg bg-stone-50 focus:ring-4 focus:outline-none focus:ring-red-500 border border-red-600 hover:bg-stone-200">
                                Go to Cart
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            `;

            productContainer.insertAdjacentHTML('beforeend', productHTML);
        });
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('ShoppingBag')) || [];
        console.log('Cart before:', cart);
    
        let existingProduct = cart.find(item => item.id === product.id);
    
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
    
        localStorage.setItem('ShoppingBag', JSON.stringify(cart));
        console.log('Cart after:', JSON.parse(localStorage.getItem('ShoppingBag')));
        addCartEventListeners();
    }
    
    function addCartEventListeners() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = button.getAttribute('data-product-id');
                const product = products.find(p => p.id === productId);
    
                if (product) {
                    addToCart(product);
                }
    
                const modal = document.getElementById('successModal');
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            });
        });
    
    
        document.querySelectorAll('.close-modal').forEach(button => {
            button.addEventListener('click', () => {
                const modal = document.getElementById('successModal');
                modal.classList.remove('flex');
                modal.classList.add('hidden');
            });
        });
    }

    // Initial load
    addProductsToDOM(products);
    addCartEventListeners();
});
