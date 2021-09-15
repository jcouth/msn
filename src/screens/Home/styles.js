import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #d8deef;
`;

// export const Content = styled(LinearGradient)`
export const Content = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProfileArea = styled(LinearGradient)`
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid #192758;
  border-radius: 10px;
`;

export const ProfilePictureStatus = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid #192758;
  border-radius: 10px;
`;

export const ProfilePicture = styled.Image`
  flex: 1;
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
  color: #192758;
`;

export const UserStatusText = styled.Text`
  font-size: 16px;
  color: #192758;
`;

export const BottomInfoArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const UserMessageText = styled.Text`
  font-size: 10px;
  color: #192758;
`;
