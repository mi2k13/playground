import React from 'react';
import Button from './common/Button';

const SearchForm = ({ placeholder }) => (
  <form>
    <input
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
  placeholder: React.PropTypes.string,
};

SearchForm.defaultProps = {
  placeholder: 'Chercher...',
};

export default SearchForm;
