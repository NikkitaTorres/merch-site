import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  const styles = {
    fontFamily: 'copperplate',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    padding: '10px',
    marginRight: '25%',
    marginLeft: '25%',
    marginBottom: '10px',
    backgroundColor: 'rgba(240, 230, 140, 0.5)',
  };

  return (
    <React.Fragment>
    <div style={styles} onClick = {() => props.whenItemClicked(props.id)}>
      <h2>{props.name}</h2>
      {/* <h3><em>{props.description}</em></h3> */}
      <h3>{props.quantity}</h3>
    </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func,
  style: PropTypes.object
};

export default Item;