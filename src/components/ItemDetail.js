import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, isOutOfStock } = props;
  const styles = {
    fontFamily: 'copperplate',
    alignItems: 'center',
    textAlign: 'center',
  };

  if (isOutOfStock){
    return <p style={styles}>Item out of stock</p>;
  } 
  
  if (!item) {
    return <p style={styles}>Select an Item to see Detail</p>
  } 

  return (
    <React.Fragment>
      <div style={props.style ? {...styles, ...props.style} : styles}>
      <h2> Item Detail </h2>
      <h3>{item.name}</h3>
      <h3>{item.description}</h3>
      </div>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  style: PropTypes.object,
  isOutOfStock: PropTypes.bool,
};

export default ItemDetail;