import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import addMinutes from 'date-fns/addMinutes';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import StyledSegmentRow from './SegmentRow.styled';
// import format from 'helpers/format';

// {
//     "origin":"MOW",
//     "destination":"HKT",
//     "date":"2019-08-15T08:23:00.000Z",
//     "stops":[
//        "BKK"
//     ],
//     "duration":1597
//  },

const SegmentRow = (props) => {
  const {
    segment: { origin, destination, date, stops, duration },
  } = props;

  const renderStopsCount = () => {
    const val = stops.length;
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

  const renderStops = () => stops.join(', ');

  const renderTime = () => {
    const timeTo = addMinutes(parseISO(date), duration);
    // console.log(duration);
    // console.log(date);
    console.log(timeTo);
    return `${format(parseISO(date), 'HH:mm')}`;
    // return `${format(parseISO(date), 'HH:mm')} - ${format(parseISO(timeTo), 'HH:mm')}`;
    // return '111';
  };

  const renderDuration = () => {
    const hours = Math.floor(duration / 60);
    const minutes = `0${duration % 60}`.slice(-2);
    return `${hours}:${minutes}`;
  };

  return (
    <StyledSegmentRow>
      <Row>
        <Col md={8}>
          <div className="label">{`${origin} - ${destination}`}</div>
          <div className="value">
            {/* 10:45 – 08:00 */}
            {renderTime()}
          </div>
        </Col>
        <Col md={8}>
          <div className="label">В пути</div>
          <div className="value">{renderDuration()} </div>
        </Col>
        <Col md={8}>
          <div className="label">{renderStopsCount()}</div>
          <div className="value">{renderStops()} </div>
        </Col>
      </Row>
    </StyledSegmentRow>
  );
};

SegmentRow.propTypes = {};

export default SegmentRow;
