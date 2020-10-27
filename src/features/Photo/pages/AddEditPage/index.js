/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react';
import Banner from '../../../../components/Banner';

import cls from './style.module.scss';

// Images
import Images from 'constaints/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router-dom';

const AddEditPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams(); // Lấy ra params của router
  const isAddMode = !photoId;
  const editPhoto = useSelector((state) => {
    // console.log({ photoFind: state.photos, photoId });
    return state.photos.find((item) => item.id === parseInt(photoId));
  });

  const initialValues = isAddMode
    ? {
        title: '',
        categoryId: null,
        photo: '',
      }
    : editPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: Math.random(10000, 99999),
          };
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        history.push('/photos');
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className={cls['photo-edit']}>
      <Banner title="Pick your amazing photo" bgUrl={Images.ORANGE_BG} />

      <div className={cls['photo-edit__form']}>
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
