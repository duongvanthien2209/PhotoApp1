/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react';
import Banner from '../../../../components/Banner';

import cls from './style.module.scss';

// Images
import Images from 'constaints/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';

const AddEditPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    // console.log('Form submit ->', values);
    const action = addPhoto(values);
    console.log(action);
    dispatch(action);
  };

  return (
    <div className={cls['photo-edit']}>
      <Banner title="Pick your amazing photo" bgUrl={Images.ORANGE_BG} />

      <div className={cls['photo-edit__form']}>
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddEditPage;
