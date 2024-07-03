import logo from './logo.svg';
import fakeLogo from './fakeLogo.svg'
// import { add, multiply } from './helpers.js'
// import cats, { meow } from './cats.js'
import ShoppingCart from './ShoppingCart.js';
import items from './items.js'
import moreItems from './moreItems.js'
import './App.css';

function App() {
  // console.log(multiply(4,9))
  // console.log(add(16, 8))
  // console.log(cats)
  // console.log(meow())
  console.log(fakeLogo)
  return (
    <div>
      <img src={fakeLogo} id="logo" />
      <ShoppingCart items={items} username="Carly"/>
      <ShoppingCart items={moreItems} username="Thomas"/>
    </div>
    
  );
}

export default App;

//Note the relationships between ShoppingCart, CartItem, and items/moreitems
