import React from 'react';
import ShopHeader  from '../ShopHeader';
import { Switch, Route} from 'react-router-dom';
import {HomePage, CartPage} from '../Pages';

import './style.css'

const App = () => {

    return (
        <main role='main' className="container">
            <ShopHeader />
            <Switch>
                <Route 
                    path='/' 
                    component={HomePage} 
                    exact
                />
                <Route 
                    path="/cart"
                    component={CartPage} 
                    exact
                />
                <Route render={() => <h2>Page not found</h2>} />
            </Switch>
        </main>
    )
}

export default App;
