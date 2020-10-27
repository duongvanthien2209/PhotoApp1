/* eslint-disable import/no-unresolved */
import React from 'react';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

import Banner from 'components/Banner';

// Images
import Images from 'constaints/images';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

const MainPage = (props) => {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(photos);

  const handlePhotoEditClick = (photo) => {
    // console.log(photo);
    const editUrl = `/photos/${photo.id}`;
    history.push(editUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log({ Remove: photo });
    const action = removePhoto(photo.id);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Your Awesome Photo" bgUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList 
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
};

export default MainPage;
