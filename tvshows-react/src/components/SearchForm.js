import React from 'react';
import Button from './common/Button';

const SearchForm = ({ handleChange, handleSubmit, placeholder }) => (
  <form onSubmit={handleSubmit}>
    <input
      onChange={handleChange}
      placeholder={placeholder}
      type="search"
    />
    <Button
      label="Chercher"
      type="submit"
    />
  </form>
);

SearchForm.propTypes = {
  handleChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  placeholder: React.PropTypes.string,
};

SearchForm.defaultProps = {
  placeholder: 'Chercher...',
};

export default SearchForm;
