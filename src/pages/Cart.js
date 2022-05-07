import React from 'react'
import './css/cart.css'
import { Link } from "react-router-dom";

// For navigation of the cart page
export default function Cart(props) {

//fetching the passed cartItems
  const { cartItems , increaseItem, decreaseItem, deleteItem, itemsPrice, taxPrice, totalPrice} = props;

return (
// <!-- ************* Cart Section Starts ********** -->
<div id="cart_main_section">
    <div className="cart-main">
        <div className="cart-wrapper-left">
            <div className="cart-heading-wrapper">
                <div className="cart-product"> PRODUCT</div>
                <div className="cart-product-price"> PRICE</div>
                <div className="cart-product-quantity">QUANTITY</div>
                <div className="cart-product-subtotal">SUBTOTAL</div>
                <div className="cart-product-button"></div>
        </div>
        
        {cartItems.length === 0 && <div className='empty-message'>Cart is Empty!!!</div>}

        {
          cartItems.map((item) => (
            
            <div key = {item.id} className="cart-content-wrapper">
                <div className="cart-product">
                    <div className="cart-product-image"><img src={item.image} alt={item.name} /></div>
                    <div className="cart-product-name"><strong className="dark-color">{item.name}</strong></div>
                </div>
                <div className="cart-product-price">{item.name}</div>
                <div className="cart-product-quantity">
                    <div className="quantity-full">
                        <div><button onClick={() => increaseItem(item)} className="light-color">+</button></div>
                        <div><strong className="dark-color">{item.qty}</strong></div>
                        <div><button onClick={() => decreaseItem(item)} className="light-color">-</button></div>
                    </div>
                </div>
                <div className="cart-product-subtotal">Rs. {item.price.toFixed(2)}</div>
                <div className="cart-product-button"><button onClick={() => deleteItem(item)}>x</button></div>
            </div>
          ))
        }
      </div>
      
      {cartItems.length !== 0 && (
        <div className="cart-wrapper-right">
          <div className="cart-checkout-wrapper">
            <div className="checkout-head"><p>CART TOTAL</p></div>
            <div className="checkout-content">
              <div className="checkout-item">
                <p>Sub Total </p>
                <p> Rs. {itemsPrice.toFixed(2)}</p></div>
            </div>
            <div className="checkout-content">
              <div className="checkout-item">
                <p>Tax 13% </p>
                <p>Rs. {taxPrice.toFixed(2)}</p>
              </div>
            </div>
            <div className="checkout-foot">
              <p>Total</p><strong>Rs {totalPrice.toFixed(2)}</strong>
            </div>
            <div className="checkout">
              <Link to="#"><p>proceed to checkout</p></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
)  
}
