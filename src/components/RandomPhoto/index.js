import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import cls from './RandomPhoto.module.scss';

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);

  return `https://picsum.photos/id/${randomId}/300/300`;
};

const RandomPhoto = (props) => {
  const {
    name, imageUrl, onImageUrlChange, onRandomButtonBlur,
  } = props;

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className={cls['random-photo']}>
      <div className={cls['random-photo__button']}>
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>

      <div className={cls['random-photo__photo']}>
        { imageUrl && <img src={imageUrl} alt="Ooops ... not found" /> }
      </div>
    </div>
  );
};

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: '',
  imageUrl: '',
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

export default RandomPhoto;
