import { useState } from 'react';
import {
  Avatar,
  Boy,
  Picture,
  Rectangle,
  StyledButton,
  StyledFollowingButton,
  Text,
  TextWrapper,
  Wrapper,
} from './Card.style';

export const Card = ({ user }) => {
  const [activeFollow, setActiveFollow] = useState(false);

  // let followers = user.followers;

  const toggleActiveFollow = () => {
    setActiveFollow(!activeFollow);
    if (!activeFollow) {
      user.followers += 1;
    } else {
      user.followers -= 1;
    }
  };

  return (
    <Wrapper>
      <Picture></Picture>
      <Rectangle></Rectangle>
      <Boy>
        {' '}
        <Avatar src={user.avatar} alt="avatar" />
      </Boy>
      <TextWrapper>
        <Text>{user.user}</Text>
        <Text>{user.tweets} tweets</Text>
        <Text>{user.followers} followers</Text>
      </TextWrapper>
      {!activeFollow ? (
        <StyledButton onClick={toggleActiveFollow}>follow</StyledButton>
      ) : (
        <StyledFollowingButton onClick={toggleActiveFollow}>
          following
        </StyledFollowingButton>
      )}
    </Wrapper>
  );
};
