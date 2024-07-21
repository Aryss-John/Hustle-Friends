document.addEventListener("DOMContentLoaded", function() {
    var content = `
<!-- == NavBar Start == -->
<nav class="absolute top-0 left-0 w-full bg-gradient-to-b from-zinc-950 to-transparent border-gray-200 z-10">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">

    <!-- Logo -->
    <a href="https://www.facebook.com/hustlefriendstreetwear" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="Logo/HustleFriends-Logo__NoBG.png" class="h-9 sm:h-12 md:h-14 lg:h-16" alt="Hustle Friends Logo" />
    </a>  

    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

      <!-- Cart Button -->
      <a href="ShoppingCart.html">
        <button type="button" class="inline-flex items-center rounded-lg justify-center  px-2 py-2 lg:mx-3 hover:bg-zinc-800 text-sm font-medium leading-none text-stone-50 focus:bg-zinc-800">
          <span class="sr-only"> Cart </span>
          <!-- Cart Icon -->
          <svg class="w-8 h-8 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg>
        </button>      
      </a>

      <!-- User Profile -->
      <div class="flex items-center lg:order-2 rounded-lg hover:bg-zinc-800 px-2">
        <a href="AccountManager/index.html">
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
</nav>
<!-- == NavBar End  == -->      

        `;
       
    document.getElementById("NavBarContainerinLandingPage").innerHTML = content;
});

document.addEventListener("DOMContentLoaded", function() {
   var content = `
      <!-- == NavBar Start == -->
<nav class="absolute top-0 left-0 w-full bg-zinc-950 border-stone-50 z-10 border-b border-zinc-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
      <!-- Logo -->
      <a href="https://www.facebook.com/hustlefriendstreetwear" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/Logo/HustleFriends-Logo__NoBG.png" class="h-12 sm:h-12 md:h-14 lg:h-16" alt="Hustle Friends Logo" />
      </a>  
  
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <!-- Cart Button -->
        <a href="ShoppingCart.html">
          <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" class="inline-flex items-center rounded-lg justify-center sm:px-3 py-2 lg:mx-3 hover:bg-zinc-800 text-sm font-medium leading-none text-stone-50 focus:bg-zinc-800">
            <span class="sr-only"> Cart </span>
            <!-- Cart Icon -->
            <svg class="w-8 h-8 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
            </svg>
          </button>      
        </a>
  
        <!-- User Profile -->
  
          <div class="flex items-center lg:order-2  rounded-lg hover:bg-zinc-800 px-3">
            <a href="/AccountManager/index.html">
              <img src="/Assets/User Profile Icon.png" class="w-8 h-8 lg:me-1" alt="">
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
  </nav>
<!-- == NavBar End  == -->

 `;
      
   document.getElementById("NavBarContainer").innerHTML = content;
});