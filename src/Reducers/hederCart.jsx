const filterUsers = (users, filter) => {
    var result = [];
            for (var i = 0; i < users.length; i++) {
                let titles = filter[i]
                if (users[i].title == titles) {
                    result.push(users[i]);
                }
            }
    return result;
}

const updateOrder = (state) => {
    const {bookList: {books}, shoppingCart : {cartItems}} = state;
    const titles = cartItems.map(item => item.title);

    const xer = filterUsers(books, titles);
    return {
        ...state,
        loading: false,
        booksIt: xer
    }
}

const hederCart = (state, action) => {

    if(state === undefined) {
        return {
            booksIt: [],
            loading: true,
            error: null
        }
    };
    switch(action.type){
        case 'BOOKSRET':
            return updateOrder(state)

        default:
            return state.shoppingHeaderCart;
    }  
}
export {hederCart};