import logo from './logo.svg';
import fakeLogo from './fakeLogo.svg'
// import { add, multiply } from './helpers.js'
// import cats, { meow } from './cats.js'
import ShoppingCart from './ShoppingCart';
import Alert from './Alert'
import items from './items'
import moreItems from './moreItems'
import './App.css';

function App() {
  // console.log(multiply(4,9))
  // console.log(add(16, 8))
  // console.log(cats)
  // console.log(meow())
  console.log(fakeLogo)
  return (
    <div>
      <Alert variant="success" >
        <h1>Welcome Back!</h1>
      </Alert>
      <Alert variant="danger" >
        <h1>Oh No!</h1>
      </Alert>
      <img src={fakeLogo} id="logo" />
      <ShoppingCart items={items} username="Carly"/>
      <ShoppingCart items={moreItems} username="Thomas"/>
    </div>
    
  );
}

export default App;

//Note the relationships between ShoppingCart, CartItem, and items/moreitems
