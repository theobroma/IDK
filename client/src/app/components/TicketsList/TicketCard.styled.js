import styled from 'styled-components';

const StyledTicketCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 1px solid transparent;
  ${'' /* margin-top: 20px; */}
  padding: 15px;
  .time {
    color: #4a4a4a;
    font-size: 32px;
  }
  .price {
    display: block;
    margin-top: 9px;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #2196f3;
  }
`;
export default StyledTicketCard;
