import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function StockAdjustment(props) {
  function handleStockChangeSubmission(event) {
    event.preventDefault();
    // console.log(event.target.name.value);
    // console.log(event.target.description.value);
    // console.log(event.target.quantity.value);
    props.onNewItemCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value, 10),
      id: v4()
    });
  }


  return (
    <React.Fragment>
      <form onSubmit={handleStockChangeSubmission}>
        <input
          type='text'
          name='name'
          placeholder='item name' />
        <input
          type='text'
          name='description'
          placeholder='description' />
        <input
          type='number'
          name='quantity'
          placeholder='0' />
        <button type="submit">Update Stock</button>
      </form>
    </React.Fragment>
  );
}

StockAdjustment.propTypes = {
  onNewItemCreation: PropTypes.func,
  onStockUpdate: PropTypes.func
}

export default StockAdjustment;