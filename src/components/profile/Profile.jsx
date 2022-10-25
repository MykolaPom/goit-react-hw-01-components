import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Stats,
  List,
  Name,
  Avatar,
  Label,
  Quantity
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer key={tag}>
      <div className="description">
        <Avatar src={avatar} alt={username}/>

        <Name>{username}</Name>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats>
        <List>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </List>
        <List>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </List>
        <List>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </List>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired), //об'єкт з інформацією про активності
};