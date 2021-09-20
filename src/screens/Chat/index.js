import React from "react";
import { StatusBar } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Header from "../../components/Header";
import Input from "../../components/Input";
import ChatMessage from "../../components/ChatMessage";
import {
  Container,
  Content,
  ChatArea,
  BottomArea,
  IconArea,
  InputArea,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Chat = ({ navigation: { goBack }, route: { params } }) => {
  return (
    <Container>
      <StatusBar backgroundColor="#d8deef" barStyle="dark-content" />
      <Content>
        <Header chatHeader goBack={goBack} />
        <ChatArea>
          <ChatMessage
            message="So, when yous gonna throw a concert in London?"
            time="12:04"
          />
          <ChatMessage
            message="We're still considering..."
            time="12:06"
            received
          />
          <ChatMessage message="I'll let you know tho" time="12:06" received />
          <ChatMessage message="Okay" time="12:08" />
        </ChatArea>
        <BottomArea>
          <IconArea>
            <TouchableWithoutFeedback>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={30}
                color="#4e609b"
              />
            </TouchableWithoutFeedback>
          </IconArea>
          <InputArea>
            <Input
              placeholder="Type a message"
              placeholderTextColor="#929bb3"
              color="#4e609b"
              backgroundColor="#ffffff"
              borderSize="1px"
              borderColor="#929bb3"
              borderRadius="50px"
              padding="5px 10px"
              rightIcon={
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="sticker-outline"
                    size={20}
                    color="#4e609b"
                  />
                </TouchableOpacity>
              }
            />
          </InputArea>
          <IconArea>
            <TouchableWithoutFeedback>
              <MaterialCommunityIcons
                name="camera-outline"
                size={24}
                color="#4e609b"
              />
            </TouchableWithoutFeedback>
          </IconArea>
          <IconArea>
            <TouchableWithoutFeedback>
              <MaterialCommunityIcons
                name="microphone-outline"
                size={24}
                color="#4e609b"
              />
            </TouchableWithoutFeedback>
          </IconArea>
        </BottomArea>
      </Content>
    </Container>
  );
};

export default Chat;