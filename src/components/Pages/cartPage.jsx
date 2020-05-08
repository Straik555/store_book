import React from 'react';
import BookListItem from '../BookListItem';
import {connect} from 'react-redux';
import { withBookstoreService } from '../Hoc';
import {bookAddedToCart} from '../../Actions';
import {compose} from '../../Utils';
import {bindActionCreators} from 'redux';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const CartPage = ({booksIt, loading, error, onAddedToCart}) => {

    // if(error){
    //     return <ErrorIndicator />
    // }
    // if(loading){
    //     return (
    //         <div className="spinner">
    //             <Spinner />
    //         </div>
    //     )
        
    // };
    if(booksIt) {
        return (
            <ul className='book-list'>
            {booksIt.map(book => {
                return (
                    <li key={book.id}>
                        <BookListItem 
                            book={book} 
                            onAddedToCart={() => onAddedToCart(book.id)}
                        />
                    </li>
                )
            })}
        </ul>
        )
    } 
    return <h2>Cart Page</h2>
}

const mapStateToProps =({shoppingHeaderCart: {booksIt, loading, error}, shoppingCart: {cartItems}}) => {
    return {booksIt, loading, error, cartItems};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onAddedToCart: bookAddedToCart
    }, dispatch)
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CartPage);