import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';
import ErrorBountry from './components/ErrorBoundry';
import BookstoreService from './Services';
import {BookstoreServiceProvider} from './components/BookstoreServiceContext';
import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBountry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBountry>
  </Provider>,
  document.getElementById('root')
);

