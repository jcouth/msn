import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  GiftedChat,
  InputToolbar,
  LeftAction,
  ChatInput,
  SendButton,
} from "react-native-gifted-chat";
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
import firebase from "firebase/app";

const Chat = ({ navigation: { goBack }, route: { params } }) => {
  const _id = firebase.auth().currentUser.uid;
  const { user } = params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("chats")
      .doc(_id)
      .collection(user.uid)
      .onSnapshot((querySnapchot) => {
        const messagesFirebase = querySnapchot
          .docChanges()
          .filter(({ type }) => type === "added")
          .map(({ doc }) => {
            const message = doc.data();
            return { ...message, createdAt: message.createdAt.toDate() };
          })
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        appendMessages(messagesFirebase);
      });
    return () => unsubscribe();
    // .get()
    // .then((snap) => {
    //   const array = [];
    //   let amountOnline = 0;
    //   snap.docs.map((doc) => {
    //     array.push(doc.data());
    //   });
    //   array.filter((data) => {
    //     if (data.status === "Online") amountOnline++;
    //   });
    //   console.log(array);
    //   setAmountOnlineFriend(amountOnlineFriend);
    //   setFriends(array);

    // const unsubscribe = firebase
    //   .firestore()
    //   .collection("chats")
    //   // .doc(userData.user.uid)
    //   .onSnapshot((querySnapchot) => {
    //     const messagesFirebase = querySnapchot
    //       .docChanges()
    //       .filter(({ type }) => type === "added")
    //       .map(({ doc }) => {
    //         const message = doc.data();
    //         return { ...message, createdAt: message.createdAt.toDate() };
    //       })
    //       .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    //     // console.log(messagesFirebase);
    //     appendMessages(messagesFirebase);
    //   });
    // return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  const onSend = async (messages = {}) => {
    const writes = messages.map((m) =>
      firebase
        .firestore()
        .collection("chats")
        .doc(_id)
        .collection(user.uid)
        .add(m)
    );
    await Promise.all(writes);
    const writes2 = messages.map((m) =>
      firebase
        .firestore()
        .collection("chats")
        .doc(user.uid)
        .collection(_id)
        .add(m)
    );
    await Promise.all(writes2);
  };

  return (
    <Container>
      <StatusBar backgroundColor="#d8deef" barStyle="dark-content" />
      <Content>
        <Header chatHeader user={user} goBack={goBack} />
        <GiftedChat
          messages={messages}
          user={{ _id: _id, ...user }}
          onSend={(messages) => onSend(messages)}
          renderAvatar={null}
        />
        {/* <ChatArea>
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
         */}
        {/* <BottomArea>
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
        </BottomArea> */}
      </Content>
    </Container>
  );
};

export default Chat;
