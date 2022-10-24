import PropTypes from 'prop-types';
import { checkStatus } from './checkStatus'

export const FriendListItem = (({avatar, name, isOnline}) => {
  return (
    <li className="item">
      <span className="status">{[checkStatus(isOnline)]}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
})

Event.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};