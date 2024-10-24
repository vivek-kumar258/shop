// document.querySelectorAll('.product button').forEach(button => {
//     button.addEventListener('click', () => {
//         alert('Product added to cart!');
//     });
// });
let cartCount = 0;

function addToCart() {
    cartCount++; // Increment the cart count
    document.getElementById('cart-count').innerText = cartCount;
    alert(` added to your cart!`);
}