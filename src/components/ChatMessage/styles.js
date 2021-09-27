import styled from "styled-components/native";

export const ChatMessageContainer = styled.View`
  flex-direction: row;
  justify-content: ${(props) => (props.received ? "flex-start" : "flex-end")};
  margin: ${(props) => (props.received ? "2px 0" : "10px 0")};
`;

export const ChatMessageContent = styled.View`
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
