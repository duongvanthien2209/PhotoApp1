import React from 'react';
import { Button } from 'reactstrap';

import cls from './style.module.scss';

const PhotoCard = (props) => {
  const { photo, onEditClick, onRemoveClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(photo);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(photo);
  };

  return (
    <div className={cls.photo}>
      <img src={photo.photo} alt={photo.title} />

      <div className={cls.photo__overlay}>
        <h3 className={cls.photo__title}>{photo.title}</h3>

        <div className={cls.photo__actions}>
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={handleRemoveClick}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
