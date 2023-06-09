import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 104999,
          title: "Mobile Phone",
          qty: 1,
          img: "https://i.pinimg.com/564x/1d/a7/7a/1da77a25e2147c6b908ccdfe84012bbb.jpg",
          id: 1,
        },
        {
          price: 99999,
          title: "Laptop",
          qty: 1,
          img: "https://i.pinimg.com/564x/4a/bb/86/4abb8659d4d951a6fefefe401a02aeb7.jpg",
          id: 2,
        },
        {
          price: 9999,
          title: "Watch",
          qty: 10,
          img: "https://i.pinimg.com/564x/a9/57/e9/a957e913c0db183f8e7943c027134326.jpg",
          id: 3,
        },
      ],
    };
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;
    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const item = products.filter((item) => item.id != id);

    this.setState({
      products: item,
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding:10,fontSize:20, }}>TOTAL:{this.getCartTotal()};</div>
      </div>
    );
  }
}

export default App;
