import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import shortid from 'shortid';
import format from 'helpers/format';
import dayOfTheWeek from 'helpers/dayOfTheWeek';
import { filterShape, currencyShape, ticketShape } from 'types';
import TurkishImg from 'images/turkish-airlines.jpg';

import SegmentRow from './SegmentRow';
import StyledTicketCard from './TicketCard.styled';

const TicketCard = (props) => {
  const {
    ticket: {
      price,
      carrier,
      segments = [],
      arrival_date,
      arrival_time,
      // carrier,
      departure_date,
      departure_time,
      destination,
      destination_name,
      origin,
      origin_name,

      stops,
    },
    currency,
    filter,
  } = props;

  const renderCurrencySign = (val) => {
    if (val === 'USD') {
      return '\u0024';
    }
    if (val === 'EUR') {
      return '\u20AC';
    }
    return '\u20B4';
  };

  const TitleBlock = (
    <Row style={{ marginBottom: '18px' }}>
      <Col md={16}>
        <span className="price">
          {currency && Math.ceil(price / currency[0].purchaseRateNB)}
          <span className="ml2">{currency && renderCurrencySign(currency[0].currency)}</span>
        </span>
        {/* <span className="price">13 400 Р</span> */}
      </Col>
      <Col md={8}>
        <div className="airlines-logo">
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>
      </Col>
    </Row>
  );

  const renderSegments = () =>
    segments.map((segment) => <SegmentRow key={shortid.generate()} segment={segment} />);

  return (
    <div style={{ paddingBottom: '20px' }}>
      <StyledTicketCard>
        {TitleBlock}
        {renderSegments()}
      </StyledTicketCard>
    </div>
  );
};

TicketCard.propTypes = {
  ticket: ticketShape,
  currency: PropTypes.arrayOf(currencyShape),
  filter: filterShape,
};

TicketCard.defaultProps = {
  ticket: {},
};

export default TicketCard;
