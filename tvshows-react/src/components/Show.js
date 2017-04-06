import React from 'react';

const Show = ({ match }) => (
  <div>
    <h1>Show {match.params.id}</h1>
  </div>
);

export default Show;
