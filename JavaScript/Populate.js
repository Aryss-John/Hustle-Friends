document.addEventListener('DOMContentLoaded', () => {
    
    const productContainer = document.getElementById('ProductContainer');

    products.forEach(product => {
        const productHTML = `
             <div class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                    <img src="${product.image1}" class="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-200 group-hover:scale-125" alt="${product.productName}">
                </div>
                <div class="mt-3 flex justify-between">
                    <div>
                        <h3 class="text-lg font-medium text-zinc-900">                         
                            ${product.productName}
                        </h3>                        
                        <p class="mt-1 text-sm text-stone-500">${product.color}</p>
                    </div>
                    <p class="text-xl font-semibold text-zinc-950 pt-2.5">₱${product.price}</p>
                </div>      
                <button type="button" class="add-to-cart mt-3 w-full inline-flex items-center rounded-md justify-center bg-red-600 px-20 py-2.5 text-sm font-semibold text-white hover:bg-red-700">
                    <svg class="-ms-2 me-2 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                    </svg>
                    Add to Cart
                </button>                 
            </div>
        `;

        productContainer.insertAdjacentHTML('beforeend', productHTML);
    });
});
