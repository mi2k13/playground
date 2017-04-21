import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import SearchShowContainer from './containers/SearchShowContainer';
import ShowContainer from './containers/ShowContainer';
import CollectionContainer from './containers/CollectionContainer';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Header />

        <Route exact path="/" component={SearchShowContainer} />
        <Route path="/collection" component={CollectionContainer} />
        <Route path="/show/:id" component={ShowContainer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
