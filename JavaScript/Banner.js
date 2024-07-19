// ===== Banner ===== \\
const bannerContainer = document.getElementById('bannerContainer');
  const text = '<span class="text-stone-50">☆</span>  Remember <span class="text-stone-50">where</span> you started  <span class="text-stone-50">☆</span>';

  for(let i = 0; i < 20; i++) {
    const p = document.createElement('p');
    p.className = 'inline-block px-4 animate-marquee font-extrabold uppercase text-3xl';
    p.innerHTML = text;
    bannerContainer.appendChild(p);
  }
