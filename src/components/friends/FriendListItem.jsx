import PropTypes from 'prop-types';
import { checkStatus } from './checkStatus'
import {
  ItemOfFriendList,
  NameItem,
  AvatarItem,
} from './FriendListItem.styled';

export const FriendListItem = (({avatar, name, isOnline}) => {
  return (
    <ItemOfFriendList>
      <span className="status">{[checkStatus(isOnline)]}</span>
      <AvatarItem src={avatar} alt={name} width="48" />
      <NameItem>{name}</NameItem>
    </ItemOfFriendList>
  );
})

Event.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};