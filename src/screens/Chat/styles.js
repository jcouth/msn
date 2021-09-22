import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #d8deef;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ChatArea = styled.View`
  flex: 1;
  padding: 5px 10px;
  background: #f0f0f0;
`;

export const ChatMessageContainer = styled.View`
  flex-direction: row;
  justify-content: ${(props) => (props.received ? "flex-start" : "flex-end")};
  margin: ${(props) => (props.received ? "2px 0" : "10px 0")};
`;

export const ChatMessage = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  align-self: flex-start;
  max-width: 80%;
  padding: 5px;
  border-radius: 10px;
  background-color: ${(props) => (props.received ? "#ffffff" : "#4e609b")};
`;

export const ChatMessageText = styled.Text`
  flex: 1;
  margin: 0 5px;
  font-size: 16px;
  color: ${(props) => (props.received ? "#4e609b" : "#ffffff")};
`;

export const ChatMessageInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 5px;
`;

export const ChatMessageTime = styled.Text`
  font-size: 14px;
  color: #929bb3;
`;

export const BottomArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* height: 200px; */
  /* padding: 20px 10px 20px 5px; */
  background: #d8deef;
`;

export const IconArea = styled.TouchableOpacity`
  margin: 0 7.5px;
`;

export const InputArea = styled.View`
  flex: 1;
  margin: 0 7.5px 0 0;
`;
