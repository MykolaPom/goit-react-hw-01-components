import styled from '@emotion/styled';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  border-collapse: separate;
  width: 500px;
  text-transform: capitalize;
`;

export const TableHeader = styled.th`
  padding: 8px;
  border: 2px solid #2a2a2a;
  background-color: #b8ecff;
  text-transform: uppercase;
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #2a2a2a;
  text-align: center;
`;

export const TableRowsEven = styled.tr`
  &:nth-of-type(2n) {
    background-color: #ECECEC;
  }
`;
