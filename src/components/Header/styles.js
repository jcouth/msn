import styled from "styled-components/native";

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 25px 12.5px;
  background-color: #d8deef;
`;

export const InfoArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const TopInfoArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TopInfoAreaButtons = styled.View`
  flex-direction: row;
`;

export const UserNameText = styled.Text`
  font-size: 18px;
  color: #4e609b;
`;

export const UserStatusText = styled.Text`
  font-size: 16px;
  color: #4e609b;
`;

export const BottomInfoArea = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

export const BottomInfoAreaChat = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BottomButtonsArea = styled.View`
  flex-direction: row;
`;

export const UserMessageText = styled.Text`
  font-size: 12px;
  color: #4e609b;
`;
