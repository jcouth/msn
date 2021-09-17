import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Video } from "expo-av";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled(LinearGradient)`
  flex: 1;
  position: relative;
`;

export const Areas = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 50px 25px;
`;

export const VideoArea = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledVideo = styled(Video)`
  width: 100%;
  height: 100%;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
`;

export const TopArea = styled.View`
  width: 100%;
`;

export const StoriesArea = styled.View`
  flex-grow: 1;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const StoriesBar = styled.View`
  flex: 1;
  height: 3px;
  margin: 0 5px;
  background-color: ${(props) =>
    props.opened ? "#ff0000" : props.active ? "orange" : "#ffffff"};
`;

export const UserArea = styled.View`
  flex-direction: row;
`;

export const UserInfo = styled.View`
  flex-grow: 1;
  margin-left: 5px;
`;

export const UserText = styled.Text`
  font-size: ${(props) => (props.primary ? "18px" : "14px")};
  font-weight: ${(props) => (props.primary ? "bold" : "normal")};
  text-shadow: 1px 1px 10px black;
  color: #ffffff;
`;

export const CloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-end;
  align-content: flex-end;
  margin-left: 5px;
`;

export const BottomArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const IconArea = styled.TouchableOpacity`
  margin-right: 10px;
  /* background-color: red; */
`;

export const InputArea = styled.View`
  flex: 1;
`;
