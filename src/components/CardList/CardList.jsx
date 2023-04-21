import { Card } from 'components';
import { Item, List } from './CardList.style';

export const CardList = ({ users }) => {
  return (
    <List>
      {users.map(user => (
        <Item key={user.id}>
          <Card user={user} />
        </Item>
      ))}
    </List>
  );
};
