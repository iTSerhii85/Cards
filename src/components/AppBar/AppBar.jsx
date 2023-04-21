import { NavLink } from 'react-router-dom';
import { Container, Header, Nav } from './AppBar.style';

const setActive = ({ isActive }) =>
  isActive ? { color: 'orange' } : { color: 'black' };

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <NavLink to="" style={setActive}>
            Home
          </NavLink>
          <NavLink to="tweets" style={setActive}>
            Tweets
          </NavLink>
        </Nav>
      </Container>
    </Header>
  );
};
