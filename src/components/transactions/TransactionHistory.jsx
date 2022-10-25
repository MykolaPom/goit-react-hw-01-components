import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableCell,
  TableRowsEven,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ props }) => {
  return (
    <Table>
      <thead>
        <TableRowsEven>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRowsEven>
      </thead>
      <tbody>
        {props.map(({ id, type, amount, currency }) => (
          <TableRowsEven key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRowsEven>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
