import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
// styles
import styles from './DropdownItem.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

// ============================================

const DropdownItem = ({ handleClick, isActive, item }) => {
  const liStyle = cx(
    styles.root,
    {
      active: isActive
    }
  );

  return (
    <li
      className={liStyle}
      onClick={() => handleClick(item.get('value'))}
    >
      {item.get('label')}
    </li>
  )
};

DropdownItem.propTypes = {
  handleClick: PropTypes.func,
  isActive: PropTypes.bool,
  item: PropTypes.instanceOf(Map).isRequired,
};

export default DropdownItem;
