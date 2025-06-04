const cart = [];
const cartList = document.getElementById('cart-list');
const totalEl = document.getElementById('total');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseInt(button.getAttribute('data-price'));

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = total;
}
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseInt(button.getAttribute('data-price'));
  
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      // Check if item already exists
      const existing = cart.find(item => item.name === name);
  
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      window.location.href = 'cart.html';
    });
  });
  function addToCart(name, price, image) {
    const cartItems = document.getElementById("cart-items");
  
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
  
    cartItem.innerHTML = `
      <img src="${image}" alt="${name}">
      <div class="cart-item-details">
        <h3>${name}</h3>
        <p>₹${price}</p>
      </div>
    `;
  
    cartItems.appendChild(cartItem);
  
    // Optional: Redirect to cart
    window.location.href = 'cart.html';
  }
  function addToCart(name, price, image) {
    const product = { name, price, image, quantity: 1 };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push(product);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
  }
  
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    let total = 0;
  
    cartItemsContainer.innerHTML = '';
  
    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      cartItemsContainer.innerHTML += `
        <div class="product-card">
          <img src="${item.image}" alt="${item.name}">
          <h2>${item.name}</h2>
          <p>Price: ₹${item.price}</p>
          <p>Quantity: 
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
          </p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `;
    });
  
    totalPriceElem.textContent = total;
  }
  
  function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  
  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  
  // Run this only on cart.html
  if (window.location.pathname.includes('cart.html')) {
    displayCart();
  }
  
  