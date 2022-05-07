import React from 'react'
import Item from './../components/Item';
//For the main
export default function Main(props) {

  //taking passed value using props
  const { products, addToCart } = props;
  return (
<div id="products-section">
    <div className="products-wrapper">
        <div className="products-header">
            Our Products
        </div>
        <div className="products-content-wrapper">
          <div className="products-content">
            {
            products.map((product) => (
                  //using key product.id to remove the error of duplicate key
                    <Item key={product.id} product = {product} addToCart = { addToCart }/>
                ))
            }
          </div>
        </div>
    </div>
</div>
)
}
