import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import Banner from '../../../../components/Banner';

// Images
import Images from '../../../../constaints/images';

const MainPage = () => (
  <div className="photo-main">
    <Banner title="Your Awesome Photo" bgUrl={Images.PINK_BG} />

    <Container className="text-center">
      <Link to="/photos/add">Add new photo</Link>
    </Container>
  </div>
);

export default MainPage;
