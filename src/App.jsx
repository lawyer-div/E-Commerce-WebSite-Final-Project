
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/CheckOut.jsx";
import CartSidebar from "./Pages/CartSidebar/CartSidebar.jsx";
import ShoppingCart from "./Pages/CartSidebar/ShoppingCart/ShoppingCart.jsx";
import { CartProvider } from "./Context/CartContext";
import SingleProduct from "./Pages/SingleProduct/SingleProduct.jsx";
import SingleProductApi from "./Pages/SingleProduct/SingleProductApi/SingleProductApi.jsx";
import Products from "./Pages/SingleProduct/Sproducts/Products.jsx";
import ProductPageApi from "./Pages/SingleProduct/ProductPageApi/ProductPageApi.jsx";
import ShoppingCartApi from "./Pages/CartSidebar/ShoppingCartApi/ShoppingCartApi.jsx";
import ShopProductApi from "./Pages/Shop/ShopProductApi/ShopProductApi.jsx";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product-api" element={<ShopProductApi />} />

        <Route path="/products/:category" element={<Products />} />

        <Route path="/product/:productId" element={<ProductPageApi />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/cartSidebar" element={<CartSidebar />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/cart-api" element={<ShoppingCartApi />} />

        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/SingleProduct/:productId" element={<SingleProduct />} />
        <Route path="/SingleProductapi/:productId" element={<SingleProductApi />} />


      </Routes>
    </CartProvider>
  );
}
