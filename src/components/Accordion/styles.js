import styled from "styled-components";

export const Container = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  margin-left: 5px;
  color: #192758;
`;

export const GreenCircle = styled.View`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  border-radius: 500px;
  background-color: #39ca54;
`;

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
  color: #192758;
`;

export const UserStatusText = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const UserMessageText = styled.Text`
  flex-grow: 1;
  font-size: 12px;
  color: #192758;
`;

export const LastMessageArea = styled.View`
  align-items: flex-end;
`;

export const LastMessageText = styled.Text`
  font-size: 12px;
  color: ${props => props.changeColor ? "#39CA54" : "gray"};
`;

export const LastNumberMessages = styled.Text`
  font-size: 12px;
  padding: 0 5px;
  border-radius: 500px;
  text-align: center;
  background-color: #39CA54;
  color: white;
`;