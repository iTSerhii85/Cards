import styled from 'styled-components';
import img from '../../img/priroda.jpg';

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const Text = styled.picture`
  font-size: 230px;
  font-weight: 800;
  background-image: url(${img});
  background-repeat: repeat;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.6);
`;
