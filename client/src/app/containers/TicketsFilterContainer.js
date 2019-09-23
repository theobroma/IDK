import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketsFilterComponent from 'components/TicketsFilter';
import { setCurrency, setStops } from 'actions/filter';

class TicketsFilter extends React.PureComponent {
  static propTypes = {
    // currentUser: PropTypes.shape({}),
  };

  render() {
    const props = {
      ...this.props,
    };

    return <TicketsFilterComponent {...props} />;
  }
}

const mapStateToProps = (state) => ({
  tickets: state.tickets.data,
  filter: state.filter,
  // currency: state.currency.data.exchangeRate,
});

const mapDispatchToProps = {
  setCurrency,
  setStops,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketsFilter);
