import { CardList } from 'components';
import { useEffect, useState } from 'react';
import { fetchUsers } from 'services/fetch';
import { StyledButton } from './Tweets.style';

const Tweets = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => setCards(data));
  }, []);

  // console.log(cards);

  return (
    <>
      <StyledButton>Back</StyledButton>
      <CardList users={cards} />
      <StyledButton>Load more</StyledButton>
    </>
  );
};

export default Tweets;
