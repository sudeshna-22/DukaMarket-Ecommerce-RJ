import React from 'react'
import './css/item.css'

export default function Item(props) {
    const { product, addToCart } = props;

    const mouseOver = () => {
        console.log('button');
    }
return (
    <div className="products-main">
        <div className="product-image-holder" onMouseOver={mouseOver}>
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product-datails-holder">
            <div className="product-bold">{product.sex}</div>
            <div className="product-light">{product.name}</div>
            <div className="product-bold">Rs. {product.price}</div>
            <div className="star-review">
                <div className="star">Star</div>
                <div className="review">Review <button onClick={() => addToCart(product)}>+</button></div>
            </div>
        </div>
    </div>    
)
}
