import React from 'react';
// components
import Button from '../UI/Button/Button';
// styles
import styles from './SearchForm.css';

// ============================================

const SearchForm = ({ handleChange, handleSubmit, placeholder }) => (
  <form
    className={styles.root}
    onSubmit={handleSubmit}
  >
    <input
      className={styles.input}
      onChange={handleChange}
      placeholder={placeholder}
      type="search"
    />
    <Button
      size="big"
      style={styles.button}
      type="submit"
    >
      Chercher
    </Button>
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
