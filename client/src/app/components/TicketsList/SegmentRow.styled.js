import styled from 'styled-components';

const StyledSegmentRow = styled.div`
  margin-top: 7px;
  .label {
    ${'' /* font-family: OpenSans-SemiBold, sans-serif; */}
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    letter-spacing: -0.8px;
    word-spacing: 3px;
    color: #a0b0b9;
  }
  .value {
    ${'' /* font-family: OpenSans-SemiBold, sans-serif; */}
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    word-spacing: 3px;
    color: #4a4a4a;
  }
`;
export default StyledSegmentRow;
