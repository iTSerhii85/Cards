import { NavLink } from 'react-router-dom';
import {
  Container,
  FilterButton,
  Header,
  IkonWrapper,
  Nav,
  Text,
} from './AppBar.style';
import { IconContext } from 'react-icons';
import { IoIosHome, IoIosFunnel } from 'react-icons/io';

import { MyContext } from 'context';
import { useContext } from 'react';

const setActive = ({ isActive }) =>
  isActive ? { color: 'orange' } : { color: '#ffffff' };

export const AppBar = () => {
  const { isActive, setIsActive } = useContext(MyContext);

  return (
    <Header>
      <Container>
        <Nav>
          <NavLink to="" style={setActive}>
            <IkonWrapper>
              <IconContext.Provider value={{ size: '25px' }}>
                <IoIosHome />
              </IconContext.Provider>
            </IkonWrapper>
          </NavLink>
          <NavLink to="tweets" style={setActive}>
            <Text>Tweets</Text>
          </NavLink>
        </Nav>
        <FilterButton type="button" onClick={() => setIsActive(!isActive)}>
          <IconContext.Provider
            value={{ size: '25px', backgroundColor: 'inherit' }}
          >
            <IoIosFunnel />
          </IconContext.Provider>
        </FilterButton>
      </Container>
    </Header>
  );
};
