function toggleMenu() {
    // Get the body element
    const body = document.body;
  
    // Toggle the 'menu-open' class on the body
    body.classList.toggle('menu-open');
  
    // Toggle the 'active' class on the 'navicon' element
    naviconElement.classList.toggle('active');
}
  
// Add a click event listener to the 'navicon' element
const naviconElement = document.querySelector('.navicon');
naviconElement.addEventListener('click', toggleMenu);