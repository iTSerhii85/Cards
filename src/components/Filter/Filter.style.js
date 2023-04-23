import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100vh;
  width: 20%;
  background: rgba(71, 28, 169, 0.86);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  padding: 50px;
  border-left: 1px solid black;

  h2 {
    color: #ffffff;
    font-size: 40px;
    font-weight: 500;
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(73, 0, 255, 0.46);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
`;

export const HWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #ffffff;
  font-size: 25px;
  font-weight: 400;

  :hover {
    color: #f36429;
    scale: 1.2;
  }

  p {
    margin: 0;
  }
`;
