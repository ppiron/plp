function scroll(event) {
  const id = event.currentTarget.getAttribute('href');
  if (id === '#form') {
    event.preventDefault();
    window.scrollBy({
      top: -window.scrollY,
      left: 0,
      behavior: "smooth" 
    });
    return 
  }
  const el = document.querySelector(id);
  event.preventDefault();
  let offset = el.getBoundingClientRect().top + Math.round(window.scrollY);
  const b = el.getBoundingClientRect().bottom + Math.round(window.scrollY);
  const vh = window.innerHeight;
  const margin = offset - 160 - b + vh;
  let l;
  if (offset > 160) {
    if (id !== '#products') {
      l = offset - 160;
      window.scrollTo({
        top: l,
        behavior: "smooth"
      })
    } else {
      el.setAttribute('style', `margin-bottom: ${margin};`);
      l = offset - 160;
      window.scrollTo({
        top: l,
        behavior: "smooth"
      })
      //el.setAttribute('style', `margin-bottom: 100px;`);
    }
  } else {
    window.scrollBy({
      top: offset - 160,
      left: 0,
      behavior: "smooth" 
    });
  }
}

document.querySelectorAll('.link').forEach(function(el) {
  el.addEventListener("click", scroll, false);
})