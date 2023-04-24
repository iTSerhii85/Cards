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

  const followers = user.followers;
  const id = user.id;
  const updateFollowing = !activeFollow;

  let num = followers;
  let formattedFollowers = num.toLocaleString('en-US');
  // console.log(formattedFollowers); // выводит "100,500"

  const toggleActiveFollow = async () => {
    if (!activeFollow) {
      user.followers += 1;
    } else {
      user.followers -= 1;
    }

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
        <Text>{formattedFollowers} followers</Text>
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
