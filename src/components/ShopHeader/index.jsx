import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bookOnShoppingHead} from '../../Actions';
import {bindActionCreators} from 'redux';

import './style.css';

const ShopHeader = ({book, numItems, total, onShoppingHead }) => {
  const idx = numItems.map(id => id.count);
  let item = 0;
  if(idx != ''){
    item = (idx.reduce((acc, cur) => acc + cur));
  }
    return (
      <header className="shop-header row">
        <Link to='/'>
          <div className="logo text-dark">ReStore</div>
        </Link>
        <Link to='cart'>
          <div className="shopping-cart"
            onClick={() => onShoppingHead(book.id)}>
            <i className="cart-icon fa fa-shopping-cart" />
           {item} items (${total}) 
          </div>
          
        </Link>
      </header>
    );
  };
  
const mapStateToProps = ({bookList: {books}, shoppingCart: {cartItems, orderTotal}}) => {

  return {
    book: books,
    numItems: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onShoppingHead: bookOnShoppingHead
  }, dispatch)
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);