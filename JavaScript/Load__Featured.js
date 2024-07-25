document.addEventListener("DOMContentLoaded", function() {
  
    var content = `

    <!-- ===== -->            
            <div class="rounded-lg border border-zinc-300 bg-neutral-50 p-6 shadow-md transform duration-300 hover:scale-105 hover:shadow-2xl" id="Featured">
              <div class="h-56 w-full">
                <a href="#" class="relative flex h-60 overflow-hidden rounded-md">
                    <img id="image1" class="peer absolute top-0 right-0 h-full w-full object-cover" src="https://i.ibb.co/z8044J9/449646257-1014761163451801-5842622221926959076-n.jpg" alt="product image" />
                    <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://i.ibb.co/686JNQX/448204381-993038962823591-6961833472496118905-n.jpg" alt="product image" />
                    <span class="absolute top-0 left-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">Best Seller!</span>
                </a>
              </div>
              <div class="pt-6">
                <div class="mb-4 flex items-center justify-between gap-4">
                    <div class="flex items-center gap-2 mt-1">
                      <div
                        class="h-5 w-5 rounded border border-gray-900 bg-red-600"
                      ></div>
                      <div
                        class="h-5 w-5 rounded border border-gray-900 bg-sky-600"
                      ></div>
                      <div
                        class="h-5 w-5 rounded border border-gray-900 bg-zinc-950"
                      ></div>
                    </div>
      
                   <div class="flex items-center justify-end gap-1">
                    <a href="Product Pages/HF Red Flower Tee">

                    <button type="button" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 ">
                      <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                        <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </a>
                    </button>            

                  </div>
                </div>
      
                <a id="product-name" href="#" class="text-xl font-semibold leading-tight text-gray-900 hover:underline">HF Red Flower Tee</a>          
              
                <div class="mt-4 flex items-center justify-between gap-4">
                
                  <p id="product-price" class="text-3xl font-bold mb-1 ml-1 leading-tight text-gray-900">₱550</p>
      
                  <button onclick="addToCart('HF Red Flower Tee', 650, 'https://i.ibb.co/z8044J9/449646257-1014761163451801-5842622221926959076-n.jpg')" type="button" class="add-to-cart inline-flex items-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500">
                    <svg class="-ms-2 me-2 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <!-- ===== -->      
      
            <!-- ===== -->
            
            <div class="Featured product Top rounded-lg border border-zinc-300 bg-neutral-50 p-6 shadow-md transform duration-300 hover:scale-105 hover:shadow-2xl" id="Featured">
              
              <div class="h-56 w-full">
                
                <a href="#" class="relative flex h-60 overflow-hidden rounded-md">            
                    <img id="product-img" class="peer absolute top-0 right-0 h-full w-full object-cover" src="https://i.ibb.co/X4bTLXj/431675899-923530339774454-7713866171662698597-n.jpg" alt="product image" />
                    <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://i.ibb.co/mzRBbLc/431660646-923530366441118-5514797062202285558-n.jpg" alt="product image" />
                    <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-red-600 text-center font-medium text-sm text-white">Sale!</span>      
                </a>
                
              </div>
              <div class="pt-6">
                <div class="mb-4 flex items-center justify-between gap-4">
                  <div class="flex items-center gap-2 mt-1">
                    <div
                      class="h-5 w-5 rounded border border-gray-900 bg-zinc-950"
                    ></div>
                  </div>
      
                  <div class="flex items-center justify-end gap-1">
                    <a href="Product Page/HF 8-Bal Tee">

                    <button type="button" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                      <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                        <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </a>
                    </button>            

                  </div>
                </div>
      
                <a id="product-name" href="#" class="text-xl font-semibold leading-tight text-gray-900 hover:underline">HF 8-Ball Tee</a>          
              
                <div class="mt-4 flex items-center justify-between gap-4">
                
                  <p id="product-price" class="text-3xl font-bold mb-1 ml-1 leading-tight text-gray-900">₱750</p>
      
                  <button onclick="addToCart('HF 8-Ball Tee', 750, 'https://i.ibb.co/X4bTLXj/431675899-923530339774454-7713866171662698597-n.jpg')" type="button" class="add-to-cart inline-flex items-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500">
                    <svg class="-ms-2 me-2 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <!-- ===== -->
      
            <!-- ===== -->
            
            <div class="Featured  product Bottoms rounded-lg border border-zinc-300 bg-neutral-50 p-6 shadow-md transform duration-300 hover:scale-105 hover:shadow-2xl" id="Featured">
              <div class="h-56 w-full">
                <a href="#" class="relative flex h-60 overflow-hidden rounded-md">
                    <img id="product-img" class="peer absolute top-0 right-0 h-full w-full object-cover" src="https://i.ibb.co/jv8NKP6/449066503-1004540705006750-9192293920099988532-n.jpg" alt="product image" />
                    <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://i.ibb.co/LYqJ5Z9/449066109-1004540715006749-2892819975220884522-n.jpg" alt="product image" />
                </a>
              </div>
              <div class="pt-6">
                <div class="mb-4 flex items-center justify-between gap-4">
                  <div class="flex items-center gap-2 mt-1">
                    <div
                      class="h-5 w-5 rounded border border-gray-900 bg-sky-600"
                    ></div>
                    <div
                      class="h-5 w-5 rounded border border-gray-900 bg-red-600"
                    ></div>
                    <div
                      class="h-5 w-5 rounded border border-gray-900 bg-zinc-950"
                    ></div>
                    <div
                    class="h-5 w-5 rounded border border-gray-900 bg-rose-400"
                    ></div>
                    <div
                    class="h-5 w-5 rounded border border-gray-900 bg-green-400"
                    ></div>
                  </div>

                  <div class="flex items-center justify-end gap-1">
                    <a href="Product Pages/HF Cozy Mesh Shorts.html">

                    <button type="button" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 ">
                      <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentcolor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                        <path stroke="currentcolor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </a>
                    </button>            

                  </div>
                </div>
      
                <a id="product-name" href="#" class="text-xl font-semibold leading-tight text-gray-900 hover:underline">HF Trapstar Mesh Shorts</a>          
              
                <div class="mt-4 flex items-center justify-between gap-4">
                
                  <p id="product-price" class="text-3xl font-bold mb-1 ml-1 leading-tight text-gray-900">₱350</p>
      
                  <button onclick="addToCart('HF Trapstar Mesh Shorts', 350, 'https://i.ibb.co/jv8NKP6/449066503-1004540705006750-9192293920099988532-n.jpg')" type="button" class="add-to-cart inline-flex items-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500">
                    <svg class="-ms-2 me-2 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <!-- ===== -->
            
            <!-- ===== -->
            
            <div class=" Featured product Tops rounded-lg border border-zinc-300 bg-neutral-50 p-6 shadow-md transform duration-500 hover:scale-105 hover:shadow-2xl" id="Featured:Top">
              <div class="h-56 w-full">
                <a href="#" class="relative flex h-60 overflow-hidden rounded-md">
                    <img id="product-img" class="peer absolute top-0 right-0 h-full w-full object-cover" src="https://i.ibb.co/QJQjSFR/448201772-992197736241047-2041936251521898012-n.jpg" alt="product image" />
                    <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://i.ibb.co/YBzRbCk/448081055-992197716241049-4590479843051867159-n.jpg" alt="product image" />
                    <span class="absolute top-0 left-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">New Release!</span>
                </a>
              </div>
              <div class="pt-6">
                <div class="mb-4 flex items-center justify-between gap-4">
                  <div class="flex items-center gap-2 mt-1">
                    <div class="h-5 w-5 rounded border border-gray-900 bg-lime-950"></div>                 
      
                  </div>
      
                   <div class="flex items-center justify-end gap-1">
                    <a href="Product Pages/HF Hustler's Club Tee.html">

                    <button type="button" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                      <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentcolor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                        <path stroke="currentcolor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </a>
                    </button>            

                  </div>
                </div>
      
                <a id="product-name" href="#" class="text-xl font-semibold leading-tight text-gray-900 hover:underline">HF Hustler's Club Tee</a>          
              
                <div class="mt-4 flex items-center justify-between gap-4">
                
                  <p id="product-price" class="text-3xl font-bold mb-1 ml-1 leading-tight text-gray-900">₱650</p>
      
                  <button onclick="addToCart('HF Hustler's Club', 350, 'https://i.ibb.co/QJQjSFR/448201772-992197736241047-2041936251521898012-n.jpg')" type="button" class="add-to-cart inline-flex items-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500">
                    <svg class="-ms-2 me-2 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>           
                     
            <!-- ===== -->          
      
      

    `;
  
    document.getElementById("FeaturedContainer").innerHTML = content;
  });