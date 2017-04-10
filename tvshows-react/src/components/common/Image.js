import React from 'react';
import { Map } from 'immutable';

const Image = ({ alt, image }) => {
  if (image) {
    return (
      <img
        alt={alt}
        src={image.get('medium')}
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
}

export default Image;
