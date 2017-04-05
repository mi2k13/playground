import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchShow from './components/SearchShow';
import Show from './components/Show';
import Collection from './components/Collection';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <ul>
        <li><Link to="/">Recherche</Link></li>
        <li><Link to="/collection">Collection</Link></li>
      </ul>
      <hr/>

      <Route exact path="/" component={SearchShow} />
      <Route path="/collection" component={Collection} />
      <Route path="/show/:id" component={Show} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
