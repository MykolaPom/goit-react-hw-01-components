import PropTypes from 'prop-types';
import {SectionStats, Header, List, ListItem, Label, Percentage} from './Statistics.styled'

export const Statistics = ({ title, props }) => {
  return (
    <SectionStats>
      {title && <Header>{title}</Header>}

      <List>
        {props.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </ListItem>
        ))}
      </List>
    </SectionStats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
