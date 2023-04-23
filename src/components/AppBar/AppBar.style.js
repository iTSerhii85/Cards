import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 15px;
  border-bottom: 2px solid gray;
  box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  margin-bottom: 20px;
  z-index: 100;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  font-size: larger;
  font-weight: bolder;
  align-items: center;
`;

export const IkonWrapper = styled.div`
  :hover {
    scale: 1.2;
  }
`;

export const Text = styled.p`
  font-size: 25px;
  margin: 0;
  :hover {
    scale: 1.2;
  }
`;

export const FilterButton = styled.button`
  background-color: inherit;
  cursor: pointer;

  :hover {
    color: #f36429;
    scale: 1.2;
  }
`;
