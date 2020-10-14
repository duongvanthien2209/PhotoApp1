import React from 'react';
import PropTypes from 'prop-types';

import cls from './style.module.scss';

const Banner = ({ title, bgUrl }) => {
  const background = bgUrl ? { backgroundImage: `url(${bgUrl})` } : {};

  return (
    <div className={cls.banner} style={background}>
      <p className={cls.banner__content}>{title}</p>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  bgUrl: PropTypes.string,
};

Banner.defaultProps = {
  title: '',
  bgUrl: '',
};

export default Banner;
