import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Radio } from 'antd';
import shortid from 'shortid';
import { FixedSizeList as List } from 'react-window';
import { filterShape, ticketShape } from 'types';
import TicketCard from './TicketCard';

const TicketsList = (props) => {
  const { tickets = [], filter } = props;

  const filteredTickets = tickets.filter((ticket) => {
    const ticketStops = ticket.segments[0].stops.length;
    // console.log(ticketStops);
    return filter.stops.includes(ticketStops);
  });

  // const arr = tickets.slice(0, 5);
  const renderTickets = () =>
    filteredTickets
      // .slice(0, 5)
      .map((ticket) => <TicketCard key={shortid.generate()} ticket={ticket} {...props} />);

  const mock_ticket = {
    price: 72616,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2019-08-15T08:23:00.000Z',
        stops: ['BKK'],
        duration: 1597,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2019-09-03T23:38:00.000Z',
        stops: ['DXB', 'BKK'],
        duration: 1750,
      },
    ],
  };

  const MyRow = ({ index, style }) => (
    <TicketCard key={shortid.generate()} ticket={filteredTickets[index]} {...props} />
  );

  return (
    <Fragment>
      {/* {tickets.length} */}
      <Row>
        <Col md={24}>
          {/* <Radio.Group value={filter.currency} onChange={this.handleCurrencyChange}> */}
          <Radio.Group>
            <Radio.Button value="fastest">Самый быстрый</Radio.Button>
            <Radio.Button value="cheapest">Самый дешевый</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      {/* {renderTickets()} */}
      {/* <TicketCard key={shortid.generate()} ticket={mock_ticket} {...props} /> */}
      <div className="mb4" />
      {filteredTickets.length > 0 && (
        <List height={800} itemCount={5} itemSize={191} width={800}>
          {MyRow}
        </List>
      )}
    </Fragment>
  );
};

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(ticketShape),
  filter: filterShape,
};

export default TicketsList;
