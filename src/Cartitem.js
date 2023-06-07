import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 9999,
      title: "Mobile Phone",
      qty: 1,
      img: " ",
    };
  }

  increaseQuantity = () => {

    // this.state.qty +=1;
    //console.log("this", this.state);

    // setState form 1
    // this.setState({
    //     qty: this.state.qty +1
    // })

    //setState form 2 -- if required previous one
     this.setState((prevState) =>{
        return{
            qty:prevState.qty+1
        }
     })
        console.log(this.state)
  };

  decreaseQuantity = ()=>{
    const{qty}=this.state;
    if(qty === 0) {
        return;
    }
    this.setState((prevState) =>{
        return{
            qty:prevState.qty -1
        }
    })
  }
  //    just a clickevent for show the alert massage
  showaleart() {
    alert("You can't delete it right now");
  }

  render() {
    const { price, title, qty } = this.state;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs : {price}</div>
          <div style={{ color: "#777" }}>Qty : {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              onClick={this.increaseQuantity}
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/256/860/860734.png"
            />
            <img
            onClick={this.decreaseQuantity}
              alt="decrease"
              className="action-icons"
              src=" https://cdn-icons-png.flaticon.com/256/1828/1828899.png"
            />
            <img
              onClick={this.showaleart}
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/256/484/484611.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;