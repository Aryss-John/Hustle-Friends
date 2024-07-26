document.addEventListener("DOMContentLoaded", function() {
  var content = `
<!-- == NavBar Start == -->
<nav class="fixed top-0 left-0 w-full bg-gradient-to-b from-zinc-950 to-transparent border-gray-200 z-10">
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">

  <!-- Logo -->
  <a href="https://www.facebook.com/hustlefriendstreetwear" class="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="Logo/HustleFriends-Logo__NoBG.png" class="h-9 sm:h-12 md:h-14 lg:h-16" alt="Hustle Friends Logo" />
  </a>  

    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <!-- Cart Button -->
                <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" class="relative inline-flex items-center rounded-lg justify-center sm:px-3 py-2 lg:mx-3 hover:bg-zinc-800 text-sm font-medium leading-none text-stone-50 focus:bg-zinc-800">
                    <span class="sr-only">Cart</span>
                    <!-- Cart Icon -->
                    <svg class="w-8 h-8 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                    </svg>
                    <!-- Counter Badge -->
                    <span id="cartItemCount" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</span>
                </button>

                <!-- Dropdown Menu -->
                <div id="myCartDropdown1" class="hidden origin-top-right absolute right-0 mt-2 lg:w-1/4 w-5/6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="myCartDropdownButton1">
                        <ul id="cartItemsList" class="text-gray-700" role="none">
                            <!-- Cart items will be populated here dynamically -->
                            <li class="px-4 py-2 text-sm">No items in cart</li>
                        </ul>
                        <div class="border-t border-gray-200"></div>
                        <div class="px-4 py-2 text-sm text-gray-700">Total: ₱<span id="cartTotalPrice">0</span></div>
                        <a href="/ShoppingCart.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View Cart</a>
                    </div>
                </div>

    <!-- User Profile -->
    <div class="flex items-center lg:order-2 rounded-lg hover:bg-zinc-800 px-2">
      <a href="Log-In.html">
        <img src="Assets/User Profile Icon.png" class="w-8 h-8 lg:me-1" alt="">
      </a>
    </div>

    <!-- Hamburger Menu Button -->
    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-stone-50 rounded-lg md:hidden hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
      </svg>
    </button>

  </div>

  <!-- Navbar Items -->
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-zinc-700 rounded-lg bg-zinc-950 sm:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <li class="group relative">
        <a href="index.html" class="block my-1 py-2 pr-4 pl-3 text-stone-50 border-b border-zinc-700 rounded-md hover:bg-zinc-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-stone-300 lg:p-0">Home</a>
        <span class="absolute bottom-0 right-0 w-0 h-1 bg-red-600 rounded transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li class="group relative">
        <a href="Catalog.html" class="block my-1 py-2 pr-4 pl-3 text-stone-50 border-b border-zinc-700 rounded-md hover:bg-zinc-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-stone-300 lg:p-0">Catalog</a>
        <span class="absolute bottom-0 right-0 w-0 h-1 bg-red-600 rounded transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li class="group relative">
        <a href="About.html" class="block my-1 py-2 pr-4 pl-3 text-stone-50 border-b border-zinc-700 rounded-md hover:bg-zinc-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-stone-300 lg:p-0">About</a>
        <span class="absolute bottom-0 right-0 w-0 h-1 bg-red-600 rounded transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li class="group relative">
        <a href="ContactUs.html" class="block my-1 py-2 pr-4 pl-3 text-stone-50 border-b border-zinc-700 rounded-md hover:bg-zinc-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-stone-300 lg:p-0">Contact Us</a>
        <span class="absolute bottom-0 right-0 w-0 h-1 bg-red-600 rounded transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </li>        
    </ul>
  </div>

</div>
    <!-- Confirmation Modal -->
            <div id="confirmationModal" class="hidden fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                        <div>
                            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-5">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">Item Added to Cart</h3>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6">
                            <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm" onclick="closeModal()">OK</button>
                        </div>
                    </div>
                </div>

</nav>
<!-- == NavBar End  == -->      

      `;
     
  document.getElementById("NavBarContainerinLandingPage").innerHTML = content;
  
});

document.addEventListener("DOMContentLoaded", function() {
var content = `
   <!-- == NavBar Start == -->
     <nav id="navbar" style="transition: opacity 0.3s ease-in-out;" class="fixed left-0 right-0 top-0 z-50 rounded-2xl m-4 bg-zinc-950">
         <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-3 py-4">
           <!-- Logo -->
           <a href="https://www.facebook.com/hustlefriendstreetwear" class="flex items-center space-x-3 rtl:space-x-reverse">
             <img src="/Logo/HustleFriends-Logo__NoBG.png" class="h-11 sm:h-11 md:h-14 lg:h-16" alt="Hustle Friends Logo" />
           </a>  
       
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <!-- Cart Button -->
                <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" class="relative inline-flex items-center rounded-lg justify-center sm:px-3 py-2 lg:mx-3 hover:bg-zinc-800 text-sm font-medium leading-none text-stone-50 focus:bg-zinc-800">
                    <span class="sr-only">Cart</span>
                    <!-- Cart Icon -->
                    <svg class="w-8 h-8 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                    </svg>
                    <!-- Counter Badge -->
                    <span id="cartItemCount" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</span>
                </button>

                <!-- Dropdown Menu -->
                <div id="myCartDropdown1" class="hidden origin-top-right absolute right-0 mt-2 lg:w-1/4 w-5/6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="myCartDropdownButton1">
                        <ul id="cartItemsList" class="text-gray-700" role="none">
                            <!-- Cart items will be populated here dynamically -->
                            <li class="px-4 py-2 text-sm">No items in cart</li>
                        </ul>
                        <div class="border-t border-gray-200"></div>
                        <div class="px-4 py-2 text-sm text-gray-700">Total: ₱<span id="cartTotalPrice">0</span></div>
                        <a href="/ShoppingCart.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View Cart</a>
                    </div>
                </div>            

             <!-- User Profile -->
       
               <div id="userDropdownButton1" data-dropdown-toggle="userDropdown1"  class="flex items-center lg:order-2  rounded-lg hover:bg-zinc-800 px-3">
                   <img src="/Assets/User Profile Icon.png" class="w-8 h-8 lg:me-1" alt="">
               </div>
               
             <div id="userDropdown1" class="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-zinc-800 antialiased shadow-lg">
              <ul class="p-2 text-start text-sm font-medium text-stone-50">
                <li><a href="UserProfile.html" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-zinc-500"> My Account </a></li>
                <li><a href="Log-In.html" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-zinc-500"> Log In </a></li>
                <li><a href="Sign-Up.html" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-zinc-500"> Sign Up </a></li>
              </ul>        
            </div>

             <!-- Hamburger Menu Button -->
             <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-stone-50 rounded-lg md:hidden hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
               <span class="sr-only">Open main menu</span>
               <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
               </svg>
             </button>
           </div>
       
           <!-- Navbar Items -->
           <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
             <ul class="flex flex-col font-medium p-4 mt-4 border border-zinc-700 rounded-lg bg-zinc-950 sm:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:p-0">
               <li class="group relative">
                 <a href="/index.html" class="block my-1 py-2 pr-4 pl-3 text-stone-50 border-b border-zinc-700 rounded-md hover:bg-zinc-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-stone-300 lg:p-0 md:border-0 md:hover:text-stone-300">Home</a>
                 <span class="absolute bottom-0 right-0 w-0 h-1 bg-red-600 rounded transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
               </li>
               <li class="group relative">
                 <a href="/Catalog.html" class="block my-1 py-2 pr-4 pl-3 text-stone-50 border-b border-zinc-700 rounded-md hover:bg-zinc-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-stone-300 lg:p-0 md:border-0 md:hover:text-stone-300">Catalog</a>
                 <span class="absolute bottom-0 right-0 w-0 h-1 bg-red-600 rounded transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
               </li>
               <li class="group relative">
                 <a href="/About.html" class="block my-1 py-2 pr-4 pl-3 text-stone-50 border-b border-zinc-700 rounded-md hover:bg-zinc-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-stone-300 lg:p-0 md:border-0 md:hover:text-stone-300">About</a>
                 <span class="absolute bottom-0 right-0 w-0 h-1 bg-red-600 rounded transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
               </li>
               <li class="group relative">
                 <a href="/ContactUs.html" class="block my-1 py-2 pr-4 pl-3 text-stone-50 border-b border-zinc-700 rounded-md hover:bg-zinc-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-stone-300 lg:p-0 md:border-0 md:hover:text-stone-300">Contact Us</a>
                 <span class="absolute bottom-0 right-0 w-0 h-1 bg-red-600 rounded transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
               </li>        
             </ul>
           </div>

         </div>
         
            <!-- Confirmation Modal -->
            <div id="confirmationModal" class="hidden fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                        <div>
                            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-5">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">Item Added to Cart</h3>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6">
                            <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm" onclick="closeModal()">OK</button>
                        </div>
                    </div>
                </div>
     </nav>
   <!-- == NavBar End  == -->
`;
   
document.getElementById("NavBarContainer").innerHTML = content;

var navbar = document.getElementById("navbar");

// Handle scroll event
window.addEventListener("scroll", function() {
   if (window.scrollY > 50) {
      navbar.style.opacity = "0.5";
   } else {
      navbar.style.opacity = "1";
   }
});

// Handle click event
navbar.addEventListener("click", function() {
  navbar.style.opacity = "1";
});

// Handle hover event
navbar.addEventListener("mouseover", function() {
  navbar.style.opacity = "1";
});

// Handle mouseout event to restore opacity on scroll if not hovering
navbar.addEventListener("mouseout", function() {
  if (window.scrollY > 50) {
    navbar.style.opacity = "0.5";
  } else {
    navbar.style.opacity = "1";
  }
});
});