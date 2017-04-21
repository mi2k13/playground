import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// components
import Header from './components/Header/Header';
import SearchShowContainer from './containers/SearchShowContainer';
import ShowContainer from './containers/ShowContainer';
import CollectionContainer from './containers/CollectionContainer';
// styles
import './index.css';
// sprite
import sprite from '../static/media/sprite.svg';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {/* HEADER */}
        <Header />

        {/* PAGE */}
        <div className="container">
          <Route exact path="/" component={SearchShowContainer} />
          <Route path="/collection" component={CollectionContainer} />
          <Route path="/show/:id" component={ShowContainer} />
        </div>

        {/* INLINE SVG SPRITE */}
        <div style={{ display: 'none' }} dangerouslySetInnerHTML={{__html: sprite}} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
