import { NavLink } from 'react-router-dom';
import { Container, Header, Nav, Text } from './AppBar.style';
import { IconContext } from 'react-icons';
import { IoIosHome } from 'react-icons/io';

const setActive = ({ isActive }) =>
  isActive ? { color: 'orange' } : { color: '#ffffff' };

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <NavLink to="" style={setActive}>
            <IconContext.Provider value={{ size: '25px' }}>
              <IoIosHome />
            </IconContext.Provider>
          </NavLink>
          <NavLink to="tweets" style={setActive}>
            <Text>Tweets</Text>
          </NavLink>
        </Nav>
      </Container>
    </Header>
  );
};
