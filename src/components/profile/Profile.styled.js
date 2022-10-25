import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  background-color: #d9d0ff;
  text-align: center;
  padding: 10px 0 0 0;
  border-radius: 5px;
  marign-bottom: 20px;
`;

export const Stats = styled.ul`
  border-top: 1px solid #000;
  display: flex;
  font-size: 14px;
  justify-content: space-around;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
`;

export const List = styled.li`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100px;
    &:nth-of-type(2n){
      border-left: 1px solid #000;
      border-right: 1px solid #000;
    }
}
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #def6ff;
`;

export const Label = styled.span`
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: #37b1b1;
`;

export const Quantity = styled.span`
  font-weight: 900;
  margin-left: auto;
  margin-right: auto;
`;