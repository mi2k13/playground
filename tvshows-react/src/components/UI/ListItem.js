import React from 'react';

// ============================================

const ListItem = ({ data, children }) => {
  if (!children && (!data || data.size === 0)) {
    return null;
  }
  return (
    <li>
      {children ? children : data}
    </li>
  )
};

ListItem.propTypes = {
  data: React.PropTypes.any,
}

export default ListItem;
