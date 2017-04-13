import React from 'react';
import { Map } from 'immutable';
// styles
import styles from './Image.css';
import cx from 'classnames';

// ============================================

const Image = ({ alt, image, style, width }) => {
  if (image) {
    return (
      <img
        className={cx(
          styles.root,
          {
            [style]: style,
          }
        )}
        alt={alt}
        src={image.get('medium')}
        width={width}
      />
    );
  }
  return (
    <div>
      Missing image for {alt}
    </div>
  );
};

Image.propTypes = {
  alt: React.PropTypes.string,
  image: React.PropTypes.instanceOf(Map),
  style: React.PropTypes.string,
  width: React.PropTypes.oneOfType(['string', 'number']),
};

export default Image;
