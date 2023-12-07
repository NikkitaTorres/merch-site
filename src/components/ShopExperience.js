import React from 'react';
import Store from './Store.js';
import StockAdjustment from './StockAdjustment.js';
import ItemDetail from './ItemDetail.js';
import Cart from './Cart.js';

class ShopExperience extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      mainItemList: [],
      cartItems: [],
      isOutOfStock: false,
    };
  }

  createStorage() {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.setState({ cartItems: storedCartItems });
  }

  updateStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
  }

  handleChangingItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id) [0]
    this.setState({selectedItem: selectedItem});
  }

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
    const { selectedItem, mainItemList, cartItems } = this.state;
  
    if (selectedItem) {
      const existingItemIndex = mainItemList.findIndex(
        item => item.name === selectedItem.name || item.id === selectedItem.id
      );
  
      if (existingItemIndex !== -1) {
        const updatedItemList = [...mainItemList];
        const currentQuantity = updatedItemList[existingItemIndex].quantity;
  
        if (currentQuantity > 0) {
          updatedItemList[existingItemIndex].quantity = Math.max(currentQuantity - 1, 0);
  
          const existingCartItemIndex = cartItems.findIndex(
            item => item.name === selectedItem.name || item.id === selectedItem.id
          );
  
          if (existingCartItemIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingCartItemIndex].quantity += 1;
            this.setState({ mainItemList: updatedItemList, cartItems: updatedCart });
          } else {
            const updatedCart = [...cartItems, { ...selectedItem, quantity: 1 }];
            this.setState({ mainItemList: updatedItemList, cartItems: updatedCart });
          }
        } else {
          this.setState({ isOutOfStock: true })
        }
      }
    } else {
      console.log("No item selected");
    }
  };//, isOutOfStock: false

  render() {
    const {isOutOfStock} = this.state;

    return (
      <React.Fragment>
        <Store store={this.state.mainItemList} onItemSelection={this.handleChangingItem}/>
        <ItemDetail item= {this.state.selectedItem} />
        <StockAdjustment onNewItemCreation={this.handleStockAdjustment} />
        <button onClick={this.handleAddToCart}>Add to Cart</button>
        {isOutOfStock && <p>Item out of stock</p>}
        <Cart cartItems={this.state.cartItems} />
      </React.Fragment>

    );
  }
}

export default ShopExperience;