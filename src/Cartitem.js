import React from "react";

const CartItem = (props) => {
  const { price, title, qty } =  props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
     props;
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
          {/* Increase btn */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/256/860/860734.png"
            onClick={() => onIncreaseQuantity(product)}
          />
          {/* Decrease btn */}
          <img
            alt="decrease"
            className="action-icons"
            src=" https://cdn-icons-png.flaticon.com/256/1828/1828899.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          {/* Delete btn */}
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/256/484/484611.png"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
