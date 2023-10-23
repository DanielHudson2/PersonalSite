function toggleMenu() {
    // Get the body element
    const body = document.body;
  
    // Get the element with the 'navicon' class
    const navicon = document.querySelector('.navicon');
  
    // Toggle the 'menu-open' class on the body
    body.classList.toggle('menu-open');
  
    // Toggle the 'active' class on the 'navicon' element
    navicon.classList.toggle('active');
}
  
// Add a click event listener to the 'navicon' element
const naviconElement = document.querySelector('.navicon');
naviconElement.addEventListener('click', toggleMenu);