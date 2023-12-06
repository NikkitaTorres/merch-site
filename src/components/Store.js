import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function Store(props) {
  return(
    <React.Fragment>
      {props.store?.map((item, index) => //? placeholder 
      <Item name={item.name}
      description={item.description}
      quantity={item.quantity}
      key={index} />
      )}
    </React.Fragment>
  );
}

Store.propTypes = {
  store: PropTypes.array
};

export default Store;