import { CardList } from 'components';
import { useEffect, useRef, useState } from 'react';
import { fetchAll, fetchUsers } from 'services/fetch';
import { StyledButton, Text } from './Tweets.style';
import { IconContext } from 'react-icons';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

let allPages = 1;

const Tweets = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchAll().then(data => {
      allPages = data.length / 3;
    });
  }, []);

  useEffect(() => {
    fetchUsers(page).then(data =>
      setCards(prevState => [...prevState, ...data])
    );
  }, [page]);

  return (
    <>
      <Link to={backLocation.current}>
        <StyledButton>
          <IconContext.Provider value={{ size: '30px' }}>
            <AiOutlineArrowLeft />
          </IconContext.Provider>
          <Text>Go back</Text>
        </StyledButton>
      </Link>
      <CardList users={cards} />
      {allPages > page && (
        <StyledButton type="button" onClick={() => setPage(page + 1)}>
          <Text>Load more</Text>
        </StyledButton>
      )}
    </>
  );
};

export default Tweets;
