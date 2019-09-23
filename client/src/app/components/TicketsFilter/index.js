import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import { Row, Col, Radio, Checkbox } from 'antd';
import { EnumsMap } from 'constants/enums/Enums';
import { STOPS_COUNT_TYPE } from 'constants/enums/EnumsNames';
import { filterShape } from 'types';
import StyledTicketsFilter from './TicketsFilter.styled';

const CheckboxGroup = Checkbox.Group;

const plainOptions = EnumsMap[STOPS_COUNT_TYPE];

const plainOptionsValuesArr = plainOptions.map((obj) => {
  return Object.values(_.pick(obj, ['value']));
});
const plainOptionsValues = _.flatten(plainOptionsValuesArr);
const defaultCheckedList = [0, 1];

class TicketsFilter extends React.Component {
  state = {
    // radio
    // currency: 'UAH',
    // checkbox
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  handleCurrencyChange = (e) => {
    // this.setState({ currency: e.target.value });
    this.props.setCurrency(e.target.value);
  };

  onChange = (checkedList) => {
    this.setState(
      {
        checkedList,
        indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
        checkAll: checkedList.length === plainOptions.length,
      },
      () => {
        // console.log(this.state);
        // console.log(checkedList.length);
        this.props.setStops(this.state.checkedList);
      },
    );
  };

  onCheckAllChange = (e) => {
    this.setState(
      {
        checkedList: e.target.checked ? plainOptionsValues : [],
        indeterminate: false,
        checkAll: e.target.checked,
      },
      () => {
        // console.log(this.state);
        this.props.setStops(this.state.checkedList);
      },
    );
  };

  render() {
    const { filter } = this.props;
    const { indeterminate, checkAll, checkedList } = this.state;
    return (
      <Fragment>
        <StyledTicketsFilter>
          <div className="pa3">
            <div className="form-group">
              <label className="control-label" htmlFor="radio-currency">
                Валюта
              </label>
              <Radio.Group value={filter.currency} onChange={this.handleCurrencyChange}>
                <Radio.Button value="UAH">UAH</Radio.Button>
                <Radio.Button value="USD">USD</Radio.Button>
                <Radio.Button value="EUR">EUR</Radio.Button>
              </Radio.Group>
            </div>
            {/* checkbox */}
            <div className="form-group">
              <label className="control-label" htmlFor="checkbox-stops">
                Количество пересадок
              </label>
              <Checkbox
                indeterminate={indeterminate}
                onChange={this.onCheckAllChange}
                checked={checkAll}
              >
                Все
              </Checkbox>
              <CheckboxGroup
                options={plainOptions}
                value={checkedList}
                onChange={this.onChange}
                className="flex flex-column"
              />
            </div>
          </div>
        </StyledTicketsFilter>
      </Fragment>
    );
  }
}

TicketsFilter.propTypes = {
  filter: filterShape,
};

export default TicketsFilter;
