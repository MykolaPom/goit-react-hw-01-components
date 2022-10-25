import styled from '@emotion/styled';

export const SectionStats = styled.section`
  background-color: #def6ff;
  border-radius: 8px;
  margin-top: 20px;
  width: 400px;

  margin-left: auto;
  margin-right: auto;
  width: 350px;

  margin-bottom: 20px;
`;
export const Header = styled.h2`
  font-size: 24px;
  text-align: center;
  padding-top: 20px;
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  padding: 0;
`;
export const ListItem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 10px 0;
  width: 80px;
  &:first-of-type {
    background-color: blue;
  }
  &:nth-of-type(2) {
    background-color: pink;
  }
  &:nth-of-type(3) {
    background-color: grey;
  }
  &:nth-of-type(4) {
    background-color: tomato;
  }
  &:nth-of-type(5) {
    background-color: green;
  }
`;
export const Label = styled.span`
  font-weight: 700;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  font-size: 18px;
`;