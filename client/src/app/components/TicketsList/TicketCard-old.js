import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import format from 'helpers/format';
import dayOfTheWeek from 'helpers/dayOfTheWeek';
import { filterShape, currencyShape, ticketShape } from 'types';
import TurkishImg from 'images/turkish-airlines.jpg';

import StyledTicketCard from './TicketCard.styled';

const TicketCard = (props) => {
  const {
    ticket: {
      arrival_date,
      arrival_time,
      // carrier,
      departure_date,
      departure_time,
      destination,
      destination_name,
      origin,
      origin_name,
      price,
      stops,
    },
    currency,
    filter,
  } = props;
  console.log(props);

  const renderStops = (val) => {
    if (val === 0) {
      return `Без пересадок`;
    }
    if (val === 1) {
      return `1 пересадка`;
    }
    if (val === 2 || val === 3 || val === 4) {
      return `${val} пересадки`;
    }
    return `${val} пересадок`;
  };

  return (
    <StyledTicketCard>
      <Row>
        <Col md={8} className="border-md-right">
          <div className="flex flex-column items-center pa3">
            <div className="airlines-logo">
              <img src={TurkishImg} alt="turkish-airlines" />
            </div>
            <Button type="primary" className="f-18 color-white os-semibold w-100">
              Купить за <br />
              {Math.ceil(price / currency[0].purchaseRateNB)}
              <span className="ml2">{filter.currency}</span>
            </Button>
          </div>
        </Col>
        <Col md={16}>
          <div className="pa3">
            <Row>
              <Col md={8}>
                <div className="time">{departure_time}</div>
              </Col>
              <Col md={8} className="flex items-center">
                <div className="flex flex-column items-center">
                  <div className="f-10 color-balihai os-semibold">{renderStops(stops)}</div>
                  ===============
                </div>
              </Col>
              <Col md={8}>
                <div className="time">{arrival_time}</div>
              </Col>
            </Row>
            {/* row2 */}
            <Row>
              <Col md={8}>
                <div className="flex flex-column">
                  <div className="f-10 color-charcoal os-semibold">
                    {origin}, {origin_name}
                  </div>
                  <div className="f-10 color-balihai os-semibold">
                    {format(departure_date, 'DD MMM YYYY')},{dayOfTheWeek(departure_date)}
                  </div>
                </div>
              </Col>
              <Col md={8} className="flex items-center">
                {/* empty */}
              </Col>
              <Col md={8}>
                <div className="flex flex-column">
                  <div className="f-10 color-charcoal os-semibold">
                    {destination}, {destination_name}
                  </div>
                  <div className="f-10 color-balihai os-semibold">
                    {format(arrival_date, 'DD MMM YYYY')},{dayOfTheWeek(arrival_date)}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </StyledTicketCard>
  );
};

TicketCard.propTypes = {
  ticket: ticketShape,
  currency: PropTypes.arrayOf(currencyShape),
  filter: filterShape,
};

export default TicketCard;
