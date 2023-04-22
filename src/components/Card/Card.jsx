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
import { updateUser } from 'services/fetch';

export const Card = ({ user }) => {
  const [activeFollow, setActiveFollow] = useState(user.following);

  const toggleActiveFollow = async () => {
    if (!activeFollow) {
      user.followers += 1;
    } else {
      user.followers -= 1;
    }

    const followers = user.followers;
    const id = user.id;
    const updateFollowing = !activeFollow;

    await updateUser(id, updateFollowing, followers).then(
      setActiveFollow(!activeFollow)
    );
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
