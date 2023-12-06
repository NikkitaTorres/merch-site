import React from "react";
import PropTypes from "prop-types";

function Store(props) {
  return(
    <React.Fragment>
      {props.store.map((item, index) =>
      <Item name={item.name}
      description = {item.description}
      quantity={item.quantity}
      key={index} />
      )}
    </React.Fragment>
  );
}

Store.PropTypes = {
  store: PropTypes.array
};

export default Store;