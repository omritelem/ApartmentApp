"use strict"
// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Main from './main';

// Import the combined reducers
// import reducers from './reducers/index';

// STEP 1 CREATE THE STORE
const middleware = applyMiddleware(thunk, logger);
const store =  createStore(middleware);
// const store =  createStore(reducers, middleware);

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        {/* <IndexRoute component={BooksList}/>
        <Route path="/admin" component={BooksForm}/>
        <Route path="/cart" component={Cart}/> */}
      </Route>
    </Router>
  </Provider>
);

render(
  Routes,  document.getElementById('app')
);
