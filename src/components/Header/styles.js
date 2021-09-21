import styled from "styled-components/native";

export const HeaderArea = styled.View`
  position: relative;
  z-index: 2;
`;

export const HeaderUserArea = styled.View`
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

export const HeaderOptionsShadow = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${(props) => (props.top ? `${props.top}px` : "50%")};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const HeaderOptions = styled.View`
  position: absolute;
  top: 100%;
  width: 100%;
  padding: 12.5px 25px 25px;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #d8deef;
  z-index: 2;
`;

export const HeaderItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 15px;
`;

export const HeaderItemIcon = styled.View`
  flex: 1;
  align-items: center;
  width: 10%;
`;

export const HeaderItemText = styled.Text`
  width: 85%;
  font-size: 16px;
  color: #4e609b;
`;
