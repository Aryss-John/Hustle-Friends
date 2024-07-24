document.addEventListener("DOMContentLoaded", function() {
     var content = `
 <footer class="p-4 bg-zinc-950 md:p-8 lg:p-10">
      <div class="mx-auto max-w-screen-xl text-center">
          <a href="https://www.facebook.com/hustlefriendstreetwear" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img src="/Logo/HustleFriends-Logo__NoBG.png" class="h-16 mx-auto sm:h-20 md:h-20 lg:h-20" alt="Hustle Friends Logo" />
          </a>
          <p class="mb-4 text-zinc-600">For those who hustle nowadaze.</p>
          <ul class="flex flex-wrap justify-center items-center mb-6 text-stone-200">
              <li>
                  <a href="/About.html" class="mr-4 hover:underline md:mr-6">About</a>
              </li>
              <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6">Terms & Conditions</a>
              </li>
              <li>
                  <a href="https://www.facebook.com/hustlefriendstreetwear" class="mr-4 hover:underline md:mr-6">Facebook</a>
              </li>
              <li>
                  <a href="/About.html" class="mr-4 hover:underline md:mr-6">FAQs</a>
              </li>
              <li>
                  <a href="/ContactUs.html" class="mr-4 hover:underline md:mr-6">Contact</a>
              </li>
          </ul>
          <span class="text-sm text-zinc-400 sm:text-center">© 2020 <a href="#" class="hover:underline">Hustle Friends™</a>. All Rights Reserved.</span>
      </div>
    </footer>       

         `;
        
     document.getElementById("FooterContainer").innerHTML = content;
});

