//importing the component navigation
import Navigation from './components/Navigation';

//importing the pages
import Main from './pages/Main';
import Cart from './pages/Cart';
import data from './database/data'; //importing the data of products
import React, { useState } from 'react' //useState
import { Switch, Route } from "react-router-dom"; // to route

function App() {

  const { products } = data; //defining products from data

   //defining the cartItems array to store the items add to cart using useState
  const [cartItems, setCartItems] = useState([]);

  //function to add products into cart

  //accepts the product to add to the cart as an arguement
  //exist = finds the selected product and product which is already in the cart 
  // if it exists it alerts else updates the cart item and adds the new product
  const addToCart = (product) => {
    const exist = cartItems.find(x => x.id === product.id);

    if (exist) {
      alert("Already Added! You can go to cart page to increase the quantity!");
    }  else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  //function to increase the quantity of products in the cart

  //accepts the product to add to the cart as an arguement
  //exist = finds the selected product and product which is already in the cart
  // if it is same, updates the cartItems and quantity else exist garena vane tei aayo
  // else is not necessarily needed in this function

  const increaseItem = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    //exist ma aako product map garera add ani qty badhayo
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  //decrease the item
  const decreaseItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      alert('Only one quantity remaining! Please click on "x" to remove the product!');
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  }

  //delete the item
  const deleteItem = (product) => {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
  }

  //for the check out in the cart
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.13;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <div className="App">
      {/* //the navigation component */}
      <Navigation countCartItems={cartItems.length} totalPrice={totalPrice}/>

      <Switch>
        <Route exact path='/'>
          {/* //the main product page, //passing the products to render in page */}
          <Main addToCart={addToCart} products={products} />
          <Cart itemsPrice={itemsPrice} taxPrice={taxPrice} totalPrice={totalPrice} increaseItem={increaseItem} decreaseItem={decreaseItem} deleteItem={deleteItem} cartItems={cartItems} />
        </Route>

        <Route path='/cart' component={Cart}>
          {/* //the cart page, //passing cartItems array to the cart page*/}
          <Cart itemsPrice={itemsPrice} taxPrice={taxPrice} totalPrice={totalPrice} increaseItem={increaseItem} decreaseItem={decreaseItem} deleteItem={deleteItem} cartItems={cartItems} />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
