import React from 'react';

class Cart extends React.Component {

  render() {
    const { cartItems, onClickingDelete } = this.props;
    const styles = {
      fontFamily: 'copperplate',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid black',
      padding: '10px',
      marginTop: '20px',
      marginRight: '15%',
      marginLeft: '15%',
      marginBottom: '10px',
      backgroundColor: 'rgba(240, 230, 140, 0.5)',
    };

    return (
      <div style={styles}>
        <h3>Shopping Cart</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => onClickingDelete(item.id)} style={{ backgroundColor: 'chocolate', color: 'lemonchiffon', fontFamily: 'copperplate' }}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cart;