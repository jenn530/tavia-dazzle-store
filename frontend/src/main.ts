import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header class="navbar">
  <img src="/IMG-20260731-WA0000.jpg" alt="Logo" class="logo">

    <nav>
        <a href="#">Home</a>
            <a href="#products">Shop</a>
                <a href="#">About</a>
                    <a href="#">Contact</a>
                        <a href="#" id="cart-btn">
                              Cart (<span id="cart-count">0</span>)
                                  </a>
                                    </nav>
                                    </header>

                                    <section class="hero">
                                      <h1>Luxury Jewellery, Watches & Accessories</h1>
                                        <p>Discover timeless elegance with TAVIA DAZZLE STORE.</p>

                                        <button onclick="document.getElementById('products').scrollIntoView({behavior: 'smooth'});">Shop Now</button>
                                                </section>

                                                <section class="products" id="products">
                                                <h2>Featured Collection</h2>

                                                <div class="product-grid">

                                                <div class="card">
                                                <img src="/products/IMG-20260731-WA0020.jpg" alt="Female Rolex Wrist Set">
                                                <h3>Female Rolex Wrist Set</h3>
                                                <p>₦26,000</p>
                                                <button>Add to Cart</button>
                                                </div>

                                                <div class="card">
                                                <img src="/products/IMG-20260731-WA0027.jpg" alt="Male POEDAGAR Watch">
                                                <h3>Male POEDAGAR Watch</h3>
                                                <p>₦30,000</p>
                                                <button>Add to Cart</button>
                                                </div>

                                                <div class="card">
                                                <img src="/products/IMG-20260731-WA0018.jpg" alt="Stud Unisex Gold Earring">
                                                <h3>Stud Unisex Gold Earring</h3>
                                                <p>₦5,500</p>
                                                <button>Add to Cart</button>
                                                </div>
                                                <div class="card">
                                                <img src="/products/IMG-20260731-WA0021.jpg" alt="Unisex Gold Earrings">
                                                <h3>Unisex Gold Earrings</h3>
                                                <p>₦4,500</p>
                                                <button>Add to Cart</button>
                                                </div>

                                                <div class="card">
                                                <img src="/products/IMG-20260731-WA0016.jpg" alt="Rose Female Jewelry Set">
                                                <h3>Rose Female Jewelry Set</h3>
                                                <p>₦25,000</p>
                                                <button>Add to Cart</button>
                                                </div>

                                                </div>
                                                </section>

                                                <div id="cart-panel" class="cart-panel">
                                                <h2>🛒 Shopping Cart</h2>

                                                <div id="cart-items">
                                                <p>Your cart is empty.</p>
                                                </div>

                                                <h3>Total: ₦<span id="cart-total">0</span></h3>

                                                <button id="close-cart">Close</button>
                                                </div>
                                                `;

                                                let cartCount = 0;

                                                const cartCountElement = document.getElementById("cart-count");
                                                const cartItems = document.getElementById("cart-items");
                                                const emptyCartMessage = cartItems?.querySelector("p");
                                                const cartTotal = document.getElementById("cart-total");

                                                const cartButton = document.getElementById("cart-btn");
                                                const cartPanel = document.getElementById("cart-panel");
                                                const closeCartButton = document.getElementById("close-cart");

                                                const addToCartButtons = document.querySelectorAll(".card button");

                                                addToCartButtons.forEach((button) => {
                                                        button.addEventListener("click", () => {
                                                                const card = button.parentElement;

                                                                        if (!card) return;

                                                                                const productName =
                                                                                            card.querySelector("h3")?.textContent || "Product";

                                                                                                    const priceText =
                                                                                                                card.querySelector("p")?.textContent || "₦0";

                                                                                                                        const price =
                                                                                                                                    Number(priceText.replace(/[^\d]/g, ""));

                                                                                                                                            cartCount++;

                                                                                                                                                    if (cartCountElement) {
                                                                                                                                                                cartCountElement.textContent =
                                                                                                                                                                                cartCount.toString();
                                                                                                                                                                                        }

                                                                                                                                                                                                if (cartItems) {
                                                                                                                                                                                                            if (emptyCartMessage) {
                                                                                                                                                                                                                            emptyCartMessage.style.display = "none";
                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                    const item = document.createElement("p");

                                                                                                                                                                                                                                                                item.textContent =
                                                                                                                                                                                                                                                                                `${productName} - ₦${price.toLocaleString()}`;

                                                                                                                                                                                                                                                                                            cartItems.appendChild(item);
                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                            if (cartTotal) {
                                                                                                                                                                                                                                                                                                                        const currentTotal =
                                                                                                                                                                                                                                                                                                                                        Number(
                                                                                                                                                                                                                                                                                                                                                            cartTotal.textContent?.replace(/[^\d]/g, "")
                                                                                                                                                                                                                                                                                                                                                                            ) || 0;

                                                                                                                                                                                                                                                                                                                                                                                        cartTotal.textContent =
                                                                                                                                                                                                                                                                                                                                                                                                        `₦${(currentTotal + price).toLocaleString()}`;
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                    });                                                                                                                                                                   });
                                                                                                                                                                                                                                                                   cartButton?.addEventListener("click", (event) => {
                                                                                                                                                                                                                                                                                event.preventDefault();

                                                                                                                                                                                                                                                                                    if (cartPanel) {
                                                                                                                                                                                                                                                                                            cartPanel.style.display = "block";
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                closeCartButton?.addEventListener("click", () => {
                                                                                                                                                                                                                                                                                                    if (cartPanel) {
                                                                                                                                                                                                                                                                                                            cartPanel.style.display = "none";
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                const checkoutButton = document.createElement("button");
                                                                                                                                                                                                                                                                                                                checkoutButton.textContent = "Checkout on WhatsApp";
                                                                                                                                                                                                                                                                                                                checkoutButton.style.marginTop = "10px";
                                                                                                                                                                                                                                                                                                                checkoutButton.style.width = "100%";
                                                                                                                                                                                                                                                                                                                checkoutButton.style.padding = "10px";
                                                                                                                                                                                                                                                                                                                checkoutButton.style.backgroundColor = "#25D366";
                                                                                                                                                                                                                                                                                                                checkoutButton.style.color = "white";
                                                                                                                                                                                                                                                                                                                checkoutButton.style.border = "none";
                                                                                                                                                                                                                                                                                                                checkoutButton.style.borderRadius = "5px";

                                                                                                                                                                                                                                                                                                                cartPanel?.appendChild(checkoutButton);

                                                                                                                                                                                                                                                                                                                checkoutButton.addEventListener("click", () => {
                                                                                                                                                                                                                                                                                                                    const items = cartItems?.innerText || "No items";
                                                                                                                                                                                                                                                                                                                        const total = cartTotal?.innerText || "₦0";

                                                                                                                                                                                                                                                                                                                            const message = `Hello TAVIA DAZZLE STORE!%0A%0AI would like to place an order:%0A${encodeURIComponent(items)}%0A%0ATotal: ${encodeURIComponent(total)}`;

                                                                                                                                                                                                                                                                                                                                window.open(`https://wa.me/2349061347035?text=${message}`, "_blank");
                                                                                                                                                                                                                                                                                                                                });