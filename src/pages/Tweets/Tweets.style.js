import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: -15px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  border-radius: 10.3108px;
  background: #ebd8ff;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;

  :hover {
    color: #f36429;
    scale: 1.2;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
  width: 196px;
  height: 50px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  :hover {
    color: #f36429;
    scale: 1.2;
  }
`;

export const Text = styled.p`
  margin: 0;
`;
