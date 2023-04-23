import { CardList, Filter } from 'components';
import { useEffect, useRef, useState, useContext } from 'react';
import {
  fetchAll,
  fetchAllFilteredUsers,
  fetchFilteredUsers,
  fetchUsers,
} from 'services/fetch';
import { StyledButton, StyledLink, Text } from './Tweets.style';
import { IconContext } from 'react-icons';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { MyContext } from 'context';

let allPages = 1;

const Tweets = () => {
  const { isActive, setIsActive } = useContext(MyContext);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [all, setAll] = useState(true);

  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  const [following, setFollowing] = useState('');

  useEffect(() => {
    fetchAll().then(data => {
      allPages = Math.round(data.length / 3);
    });
  }, []);

  useEffect(() => {
    if (!all) {
      return;
    }
    fetchUsers(page).then(data =>
      setCards(prevState => [...prevState, ...data])
    );
  }, [all, page]);

  useEffect(() => {
    if (following === 'All') {
      fetchAll().then(data => {
        allPages = Math.round(data.length / 3);
      });
      fetchUsers(page).then(data =>
        setCards(prevState => [...prevState, ...data])
      );
    }
    if (following === 'Follow') {
      fetchAllFilteredUsers(false).then(data => {
        allPages = Math.round(data.length / 3);
      });
      fetchFilteredUsers(false, page).then(data =>
        setCards(prevState => [...prevState, ...data])
      );
    }
    if (following === 'Following') {
      fetchAllFilteredUsers(true).then(data => {
        allPages = Math.round(data.length / 3);
      });
      fetchFilteredUsers(true, page).then(data =>
        setCards(prevState => [...prevState, ...data])
      );
    }
  }, [following, page]);

  const filteredUsers = value => {
    setAll(false);
    setPage(1);
    setCards([]);
    setFollowing(value);
    setIsActive(false);
  };

  return (
    <>
      <StyledLink to={backLocation.current}>
        <IconContext.Provider value={{ size: '30px' }}>
          <AiOutlineArrowLeft />
        </IconContext.Provider>
        <Text>Go back</Text>
      </StyledLink>
      <CardList users={cards} />
      {isActive && <Filter filteredUsers={filteredUsers} />}
      {allPages > page && (
        <StyledButton type="button" onClick={() => setPage(page + 1)}>
          <Text>Load more</Text>
        </StyledButton>
      )}
    </>
  );
};

export default Tweets;
