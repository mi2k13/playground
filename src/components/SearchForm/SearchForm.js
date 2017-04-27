import React from 'react';
import PropTypes from 'prop-types';
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
      Search
    </Button>
  </form>
);

SearchForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

SearchForm.defaultProps = {
  placeholder: 'Chercher...',
};

export default SearchForm;
