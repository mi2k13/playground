import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SearchShowContainer from './containers/SearchShowContainer';
import Show from './components/Show';
import Collection from './components/Collection';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <ul>
          <li><Link to="/">Recherche</Link></li>
          <li><Link to="/collection">Collection</Link></li>
        </ul>
        <hr/>

        <Route exact path="/" component={SearchShowContainer} />
        <Route path="/collection" component={Collection} />
        <Route path="/show/:id" component={Show} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
