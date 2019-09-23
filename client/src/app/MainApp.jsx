import React from 'react';
import { Row, Col } from 'antd';

import logo from 'images/Logo.png';
import TicketsFilterContainer from 'containers/TicketsFilterContainer';
import TicketsListContainer from 'containers/TicketsListContainer';

const MainApp = () => {
  return (
    <div className="container">
      <Row>
        <Col md={24}>
          <div className="flex justify-center pa4">
            <img src={logo} alt="logo" />
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col md={8} className="mb3">
          <TicketsFilterContainer />
        </Col>
        <Col md={16} className="mb3">
          <TicketsListContainer />
        </Col>
      </Row>
    </div>
  );
};

export default MainApp;
