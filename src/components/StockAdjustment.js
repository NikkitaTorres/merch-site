import React, { useState } from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function StockAdjustment(props) {
const [items, setItems] = useState([]);

  function handleStockChangeSubmission(event) {
    event.preventDefault();
    const newItem = {
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value, 10),
      id: v4()
    };
    setItems([...items, newItem]);
    props.onNewItemCreation(newItem);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleStockChangeSubmission} style={{ textAlign: 'center' }}>
        <input
          type='text'
          name='name'
          placeholder='item name' 
          required />
        <input
          type='text'
          name='description'
          placeholder='description' />
        <input
          type='number'
          name='quantity'
          placeholder='0' 
          min='0' />
        <button type="submit" style={{ backgroundColor: 'chocolate', color: 'lemonchiffon', fontFamily: 'copperplate' }}>Update Stock</button>
      </form>
    </React.Fragment>
  );
}

StockAdjustment.propTypes = {
  onNewItemCreation: PropTypes.func,
  onStockUpdate: PropTypes.func
}

export default StockAdjustment;