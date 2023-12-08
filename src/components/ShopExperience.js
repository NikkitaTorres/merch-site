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

  componentDidMount() {
    const storedStoreItems = JSON.parse(localStorage.getItem('mainItemList')) || [];
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.setState({ mainItemList: storedStoreItems, cartItems: storedCartItems});
    console.log("storage is created");
  }

  componentDidUpdate() {
    localStorage.setItem('mainItemList', JSON.stringify(this.state.mainItemList));
    localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
    console.log("storage did update");
  }

  handleChangingItem = (id) => {
    const selectedItem = this.state.mainItemList.find(item => item.id === id)
    console.log('Selected item:', selectedItem);
    this.setState({selectedItem: selectedItem });
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
            this.setState({ mainItemList: updatedItemList, cartItems: updatedCart, isOutOfStock: false });
          } else {
            const updatedCart = [...cartItems, { ...selectedItem, quantity: 1 }];
            this.setState({ mainItemList: updatedItemList, cartItems: updatedCart, isOutOfStock: false });
          }
        } else {
          this.setState({ isOutOfStock: true })
        }
      }
    } else {
      console.log("No item selected");
    }
  };//, isOutOfStock: false

  handleDeletingItem = (id) => {
    const updatedCart = this.state.cartItems.filter(item => item.id !== id);
    this.setState({
      cartItems: updatedCart,
      selectedItem : null
    })
  }

  render() {

    const buttonStyle = {
      backgroundColor: 'chocolate',
      color: 'lemonchiffon',
      fontFamily: 'copperplate',
      margin: '0 auto',
      display: 'block',
    };

    return (
      <React.Fragment>
        <Store store={this.state.mainItemList} onItemSelection={this.handleChangingItem}/>
        <ItemDetail item= {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} />
        <StockAdjustment onNewItemCreation={this.handleStockAdjustment} />
        <button onClick={this.handleAddToCart} style={buttonStyle}>Add to Cart</button>
        <Cart cartItems={this.state.cartItems} onClickingDelete={this.handleDeletingItem}/>
      </React.Fragment>

    );
  }
}

export default ShopExperience;