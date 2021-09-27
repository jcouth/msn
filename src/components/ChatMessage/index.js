import React from "react";
import {
  ChatMessageContainer,
  ChatMessageContent,
  ChatMessageInfo,
  ChatMessageText,
  ChatMessageTime,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

const ChatMessage = ({ message, time, received }) => {
  return (
    <ChatMessageContainer received={received}>
      <ChatMessageContent received={received}>
        <ChatMessageText received={received}>{message}</ChatMessageText>
        <ChatMessageInfo>
          <ChatMessageTime>{time}</ChatMessageTime>
          {!received && (
            <Ionicons name="checkmark-outline" size={18} color="#929bb3" />
          )}
        </ChatMessageInfo>
      </ChatMessageContent>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
