// Get the navbar element
const navbar = document.querySelector('header');

// Function to toggle navbar background color based on scroll position
function toggleNavbarBackground() {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

// Add scroll event listener to window
window.addEventListener('scroll', toggleNavbarBackground);


// let myOrders = document.querySelector('#myOrders');
// let myOrd = document.querySelector('.myOrders');

// myOrders.addEventListener("click",(()=>{
//     myOrd.classList.toggle("order-visible");
// }))
