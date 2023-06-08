import React from "react";
import CartItem from "./Cartitem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 19999,
          title: "Mobile Phone",
          qty: 1,
          img: " ",
          id: 1,
        },
        {
          price: 99999,
          title: "Laptop",
          qty: 1,
          img: " ",
          id: 2,
        },
        {
          price: 9999,
          title: "Watch",
          qty: 10,
          img: " ",
          id: 3,
        },
      ],
    };
    // this.testing();
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
