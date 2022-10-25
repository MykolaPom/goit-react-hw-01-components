import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import {ListOfFriends} from './FriendList.styled'

export const FriendList = ({ props }) => {
  return (
    <ListOfFriends>
      {props.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={name}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        id={id}
      />
      ))}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};