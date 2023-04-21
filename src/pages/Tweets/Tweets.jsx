import { CardList } from 'components';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'services/fetch';
import { StyledButton } from './Tweets.style';

const Tweets = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchContacts().then(data => setCards(data));

    // return (cleanUp = () => {
    //   fetchContacts();
    // });
  }, []);

  console.log(cards);

  return (
    <>
      <StyledButton>Back</StyledButton>
      <CardList users={cards} />
      <StyledButton>Load more</StyledButton>
    </>
  );
};

export default Tweets;
