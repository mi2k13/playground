import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from './ListItem.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// ============================================

const ListItem = ({ children, data, separated, style, type }) => {
  if (!children && (!data || data.size === 0)) {
    return null;
  }

  const liStyle = cx(
    styles.root,
    style,
    {
      inline: type === 'inline',
      separated: separated,
    }
  );

  return (
    <li className={liStyle}>
      {children ? children : data}
    </li>
  )
};

ListItem.propTypes = {
  data: PropTypes.any,
  separated: PropTypes.bool,
  style: PropTypes.string,
  type: PropTypes.string,
};

ListItem.defaultProps = {
  separated: false,
  type: 'list',
};

export default ListItem;
