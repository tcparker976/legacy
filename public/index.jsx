import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from '../components/App';
import MovieDetailContainer from '../containers/MovieDetailContainer';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/moviedetails/:movieid/:movieposter" component={MovieDetailContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
