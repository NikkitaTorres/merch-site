import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

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

const mapStateToProps = (state) => ({
  cartItems: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onClickingDelete: (itemId) => dispatch(removeFromCart(itemId),)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);