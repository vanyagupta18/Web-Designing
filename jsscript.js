// Add event listeners to each "Add to Cart" button
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseInt(button.getAttribute('data-price'));
      const image = button.getAttribute('data-image');
  
      // Get the current cart from localStorage (if any)
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      // Check if the item is already in the cart
      const existing = cart.find(item => item.name === name);
  
      // If the item is already in the cart, increase the quantity
      if (existing) {
        existing.quantity += 1;
      } else {
        // Otherwise, add a new item to the cart
        cart.push({ name, price, image, quantity: 1 });
      }
  
      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // Redirect to the cart page
      window.location.href = 'cart.html'; // You can change this URL if needed
    });
  });
  function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Redirect to cart page
    window.location.href = 'cart.html';
  }
  