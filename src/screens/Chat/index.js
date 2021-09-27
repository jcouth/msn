import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
  GiftedChat,
  InputToolbar,
  Bubble,
  Send,
} from "react-native-gifted-chat";
import Header from "../../components/Header";
import { Container, Content } from "./styles";
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
      .onSnapshot((querySnapshot) => {
        const messagesFirebase = querySnapshot
          .docChanges()
          .filter(({ type }) => type === "added")
          .map(({ doc }) => {
            const message = doc.data();
            return { ...message, createdAt: message.createdAt.toDate() };
          })
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        appendMessages(messagesFirebase.slice(messages.length));
      });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  const onSend = async (messages = []) => {
    const whos_sending = messages.map((m) =>
      firebase
        .firestore()
        .collection("chats")
        .doc(_id)
        .collection(user.uid)
        .add(m)
    );
    await Promise.all(whos_sending);

    const whos_receiving = messages.map((m) =>
      firebase
        .firestore()
        .collection("chats")
        .doc(user.uid)
        .collection(_id)
        .add(m)
    );
    await Promise.all(whos_receiving);
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "#d8deef",
        }}
      />
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#4e609b",
            borderRadius: 10,
          },
          left: {
            backgroundColor: "#ffffff",
            borderRadius: 10,
          },
        }}
        textStyle={{
          right: {
            color: "#ffffff",
            fontSize: 16,
          },
          left: {
            color: "#4e609b",
            fontSize: 16,
          },
        }}
      />
    );
  };

  const renderSend = (props) => (
    <Send
      {...props}
      containerStyle={{
        justifyContent: "center",
        alignItems: "center",
        width: "10%",
      }}
    >
      <MaterialCommunityIcons name="send" size={24} color="#4e609b" />
    </Send>
  );

  return (
    <Container>
      <StatusBar backgroundColor="#d8deef" barStyle="dark-content" />
      <Content>
        <Header chatHeader user={user} goBack={goBack} />
        <GiftedChat
          listViewProps={{
            style: {
              backgroundColor: "#f0f0f0",
              paddingHorizontal: 10,
            },
          }}
          messages={messages}
          user={{ _id: _id, ...user }}
          onSend={(messages) => onSend(messages)}
          renderAvatar={null}
          renderInputToolbar={renderInputToolbar}
          renderBubble={renderBubble}
          renderSend={renderSend}
          alwaysShowSend
          scrollToBottom
        />
      </Content>
    </Container>
  );
};

export default Chat;
