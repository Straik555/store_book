import {updateBookList} from './bookList';
import {updateShoppingCart} from './shoppingCart';
import {hederCart} from './hederCart';

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        shoppingHeaderCart: hederCart(state, action)
    }
};

export default reducer; 
