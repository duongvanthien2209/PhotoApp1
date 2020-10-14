import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import cls from './style.module.scss';

const Header = () => (
  <header className={cls.header}>
    <Container>
      <Row className="justify-content-between">
        <Col xs="auto">
          <a className={cls.header__title} href="http://google.com.vn">
            Easy FrontEnd
          </a>
        </Col>
        <Col xs="auto">
          <NavLink className={cls.header__link} to="/photos">
            Redux Project
          </NavLink>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
