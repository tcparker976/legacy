import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from '../components/App';
import Home from '../components/Home';
import MovieDetailContainer from '../containers/MovieDetailContainer';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/moviedetails/:imdbId" component={MovieDetailContainer} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
