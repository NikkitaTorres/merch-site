import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item } = props;

  if (!item) {
    return <p>No items available</p>
  }

  return (
    <React.Fragment>
      <hr />
      <h1> Item Detail </h1>
      <h2>{item.name}</h2>
      <h3>{item.description} - {item.quantity}</h3>
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;