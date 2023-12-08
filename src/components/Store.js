import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function Store(props) {

  const styles = {
    fontFamily: 'copperplate',
    alignItems: 'center',
  }
  return(
    <React.Fragment>
      {props.store?.map((item) => 
      // <div key={item.id} onClick={() => props.onItemSelection(item.id)}>
      <Item 
      style={styles}
      whenItemClicked = { props.onItemSelection }
      name={item.name}
      description={item.description}
      quantity={item.quantity}
      id={item.id}
      key={item.id} />
      // </div>
      )}
    </React.Fragment>
  );
}

Store.propTypes = {
  store: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default Store;