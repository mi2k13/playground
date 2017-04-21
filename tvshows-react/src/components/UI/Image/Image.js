import React from 'react';
import { Map } from 'immutable';
// styles
import styles from './Image.css';
import cx from 'classnames';

// ============================================

const Image = ({ alt, image, size, style, width }) => {
  if (image) {
    return (
      <img
        className={cx(
          styles.root,
          style,
        )}
        alt={alt}
        src={image.get(size)}
        width={width}
      />
    );
  }
  return (
    <div className={cx(
      styles.root,
      styles.missing,
      style
    )}>
      <span className={styles.missingLabel}>
        {alt}
      </span>
    </div>
  );
};

Image.propTypes = {
  alt: React.PropTypes.string,
  image: React.PropTypes.instanceOf(Map),
  size: React.PropTypes.string,
  style: React.PropTypes.string,
  width: React.PropTypes.string,
};

Image.defaultProps = {
  size: 'medium',
};

export default Image;
