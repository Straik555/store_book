import React, {Component} from 'react';
import Spinner from '../Spinner';
import BookListItem from '../BookListItem';
import {connect} from 'react-redux';
import { withBookstoreService } from '../Hoc';
import {fetchBooks, bookAddedToCart} from '../../Actions';
import {compose} from '../../Utils';
import ErrorIndicator from '../ErrorIndicator';
import {bindActionCreators} from 'redux';

import './style.css';

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className='book-list'>
            {books.map(book => {
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
};

class BookListContainer extends Component{

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if(error){
            return <ErrorIndicator />
        }

        if(loading){
            return (
                <div className="spinner">
                    <Spinner />
                </div>
            )
        };
       return <BookList 
        books={books}
        onAddedToCart={onAddedToCart}
       />
    }
};

// описывае какие данные хотим получить
const mapStateToProps =({bookList: {books, loading, error}}) => {
    return {books, loading, error};
};

// const mapDispatchToProps = (dispatch, {bookstoreService}) => {
//     return {
//         fetchBooks: fetchBooks(bookstoreService, dispatch),
//         onAddedToCart: (id) => dispatch(bookAddedToCart(id))
//     }
// }

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch)
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);