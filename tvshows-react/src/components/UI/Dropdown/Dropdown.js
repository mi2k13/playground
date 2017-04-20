import React from 'react';
import { List } from 'immutable';
// components
import DropdownItem from '../DropdownItem/DropdownItem';
import Icon from '../Icon/Icon';
// styles
import styles from './Dropdown.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

// ============================================

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const {
      currentLabel,
      handleChange,
      options,
      style,
    } = this.props;

    const divStyle = cx(
      styles.root,
      style,
      {
        open: this.state.open,
      }
    );

    return (
      <div
        className={divStyle}
        onClick={this.toggleMenu}
      >
        {/* LABEL */}
        <span className={styles.labelContainer}>
          <span className={styles.label}>
            {currentLabel}
          </span>
          <Icon
            symbol="arrow"
            style={styles.icon}
          />
        </span>

        {/* MENU */}
        <ul className={styles.menu}>
          {options.map((option, id) => (
              <DropdownItem
                key={id}
                isActive={option.get('label') === currentLabel}
                item={option}
                handleClick={handleChange}
              />
            )
          )}
        </ul>
      </div>
    )
  }
}

Dropdown.propTypes = {
  currentLabel: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  options: React.PropTypes.instanceOf(List).isRequired,
  style: React.PropTypes.string,
};

export default Dropdown;
