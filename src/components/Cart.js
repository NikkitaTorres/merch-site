import React from 'react';

class Cart extends React.Component {

  render() {
    const { cartItems } = this.props;

    return (
      <div>
        <h3>Shopping Cart</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cart;