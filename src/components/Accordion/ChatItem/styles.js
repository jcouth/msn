import styled from "styled-components";

export const InfoArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 0 5px;
`;

export const UserArea = styled.View`
  flex-grow: 1;
  padding: 0 10px;
`;

export const TopInfoArea = styled.View`
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
`;

export const UserNameText = styled.Text`
  font-size: 16px;
  color: #4e609b;
`;

export const UserStatusText = styled.Text`
  font-size: 12px;
  color: #929bb3;
`;

export const UserMessageText = styled.Text`
  flex-grow: 1;
  font-size: 12px;
  color: #4e609b;
`;

export const LastMessageArea = styled.View`
  align-items: flex-end;
`;

export const LastMessageText = styled.Text`
  font-size: 12px;
  color: ${(props) => (props.changeColor ? "#39CA54" : "#929BB3")};
`;

export const LastNumberMessages = styled.Text`
  font-size: 14px;
  padding: 0 5px;
  border-radius: 500px;
  text-align: center;
  background-color: #39ca54;
  color: white;
`;
