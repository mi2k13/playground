import React from 'react';
// styles
import styles from './ListItem.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// ============================================

const ListItem = ({ children, data, separated, type }) => {
  if (!children && (!data || data.size === 0)) {
    return null;
  }

  const liStyle = cx(
    styles.root,
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
  data: React.PropTypes.any,
  separated: React.PropTypes.bool,
  type: React.PropTypes.string,
};

ListItem.defaultProps = {
  separated: false,
  type: 'list',
};

export default ListItem;
