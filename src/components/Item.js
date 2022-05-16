import React from 'react'
import './css/item.css'
import { Link } from "react-router-dom";

export default function Item(props) {
    const { product, addToCart } = props;

    const mouseOver = () => {
        console.log('button');
    }
return (
    <div className="products-main">
        <div className="product-image-holder" onMouseOver={mouseOver}>
            <img src={product.image} alt={product.name} />
            <button class="image-button" onClick={() => addToCart(product)}>Add To Cart</button>
        </div>

        <div className="product-details-holder">
            <div className="product-bold bold">{product.sex}</div>
            <div className="product-light">{product.name}</div>
            <div className="product-bold bold">Rs. {product.price}</div>
            <div className="star-review">
                <div className="review pointer"><Link>( View all 24 reviews ) </Link></div>
            </div>
        </div>
    </div>    
)
}
