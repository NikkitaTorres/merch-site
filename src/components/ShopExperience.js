import React from 'react';
import Store from './Store.js';
import StockAdjustment from './StockAdjustment.js';

class ShopExperience extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      mainItemList: []
    };
  }

  //  handleBuyChange() {
  //   const newItemQuantity = item.quantity - 1;
  // }

  handleStockAdjustment = (newItem) => {
    const existingItemIndex = this.state.mainItemList.findIndex(
      item => item.name === newItem.name || item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      const updatedItemList = [...this.state.mainItemList];
      updatedItemList[existingItemIndex].quantity = newItem.quantity;
      this.setState({ mainItemList: updatedItemList });
    } else {
      this.setState(prevState => ({
        mainItemList: [...prevState.mainItemList, newItem]
      }));
    }
  };

  handleAddToCart = () => {
    const {selectedItem, mainItemList} = this.state;

    if (selectedItem) {
      const existingItemIndex = mainItemList.findIndex(
        item => item.name === selectedItem.name || item.id === selectedItem.id
      );

      if (existingItemIndex !== -1) {
        const updatedItemList = [...mainItemList];
        updatedItemList[existingItemIndex].quantity -=1;
        this.setState({ mainItemList: updatedItemList });
      } else {
        console.log("Item out of stock")
      }
    } else {
      this.handleStockAdjustment();
    }
  };

  render() {
    // let buyButton=null;
    // if (this.state.quantity <= 0) {
    //   return "This item is currently Out of Stock"
    // } else {
    //   buyButton = <button onClick={this.handleClick}>Add item to cart</button>
    //   stockbutton = <button onClick={this.handleClick}>Change stock</button>
    // }

    return (
      <React.Fragment>
        <Store store={(this.state.mainItemList)}/>
        <StockAdjustment onNewItemCreation={this.handleStockAdjustment} />
        <button onClick={this.handleAddToCart}>Add to Cart</button>
      </React.Fragment>

    );
  }
}

export default ShopExperience;