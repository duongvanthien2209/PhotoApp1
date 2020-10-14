import React from 'react';
import Banner from '../../../../components/Banner';

import cls from './style.module.scss';

// Images
import Images from '../../../../constaints/images';
import PhotoForm from '../../components/PhotoForm';

const AddEditPage = (props) => {
  return (
    <div className={cls['photo-edit']}>
      <Banner title="Pick your amazing photo" bgUrl={Images.ORANGE_BG} />

      <div className={cls['photo-edit__form']}>
        <PhotoForm onSubmit={(value) => console.log(value)} />
      </div>
    </div>
  );
};

export default AddEditPage;
