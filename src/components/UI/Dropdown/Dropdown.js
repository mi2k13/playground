import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
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
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);

    if ((!domNode || !domNode.contains(event.target))) {
        this.setState({ open : false });
    }
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
      <span
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
        <div className={styles.menu}>
          <ul>
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
      </span>
    )
  }
}

Dropdown.propTypes = {
  currentLabel: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.instanceOf(List).isRequired,
  style: PropTypes.string,
};

export default Dropdown;
