import React from 'react'
import './css/navigation.css'
import logo from './images/logo.png';
import iconCart from './images/icon-cart.png';
import { Link } from "react-router-dom";

// For navigation of the site
export default function Navigation(props) {
  const { countCartItems, totalPrice } = props;
  return (
    <div className="header">
        <div className="inner-header">
            <nav className="nav-bar">
                <ul className="nav-items">
                    <li className="nav-item">
                        <div className="logo-container">
                          <img src={logo} alt="logo" className="logo" />
                        </div>
                    </li>
                    <li className="nav-item-second">
                        <div className="icon-container">
                            <Link to='/cart'>
                                <img src={iconCart} alt="icon" className="icon-cart" />
                            </Link>
                        </div>
                        <div className="shop-page">
                            <Link to='/cart'>
                  <span className='inline light-color'>Shopping Cart {' '}
                  {countCartItems ? (
                      <button className='cart-denote'>{countCartItems }</button>
                  ) : (
                    ''
                )}</span>
                                <h4>Rs. {totalPrice}</h4>
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
