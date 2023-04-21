import styled from 'styled-components';

export const Header = styled.header`
  /* position: fixed;
  top: 0; */
  width: 100%;
  padding: 15px;
  border-bottom: 2px solid gray;
  box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  margin-bottom: 20px;
  z-index: 100;
  background-color: #ffffff;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 1280px) {
    width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  font-size: larger;
  font-weight: bolder;
`;
