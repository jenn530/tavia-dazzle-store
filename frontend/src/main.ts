import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header class="navbar">
  <img src="/IMG-20260731-WA0000.jpg" alt="Logo" class="logo">

    <nav>
        <a href="#">Home</a>
            <a href="#">Shop</a>
                <a href="#">About</a>
                    <a href="#">Contact</a>
                        <a href="#">🛒 Cart</a>
                          </nav>
                          </header>

                          <section class="hero">
                            <h1>Luxury Jewellery, Watches & Accessories</h1>

                              <p>
                                  Discover timeless elegance with TAVIA DAZZLE STORE.
                                    </p>

                                      <button>Shop Now</button>
                                      </section>

                                      <section class="products">

                                      <h2>Featured Collection</h2>

                                      <div class="product-grid">

                                      <div class="card">
                                      <h3>Gold Necklace</h3>
                                      <p>₦45,000</p>
                                      </div>

                                      <div class="card">
                                      <h3>Luxury Watch</h3>
                                      <p>₦80,000</p>
                                      </div>

                                      <div class="card">
                                      <h3>Bracelet</h3>
                                      <p>₦20,000</p>
                                      </div>

                                      <div class="card">
                                      <h3>Handbag</h3>
                                      <p>₦65,000</p>
                                      </div>

                                      </div>

                                      </section>
                                      `