import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import Accordion from "../../components/Accordion";
import Header from "../../components/Header";
import { Container, Content } from "./styles";

const data_favourites = {
  notOffline: 2,
  length: 2,
  users: [
    {
      name: "Tyrone Fuller",
      status: "Online",
      message: "Hello :D",
      lastMessage: "yesterday",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 1,
    },
    {
      name: "Thais",
      status: "Online",
      message: "",
      lastMessage: "13:11",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 2,
    },
  ],
};

const data_family = {
  notOffline: 2,
  length: 4,
  users: [
    {
      name: "Thanise",
      status: "Away",
      message: "[a.fasdf/]",
      lastMessage: "12:43",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 30,
    },
    {
      name: "Jani",
      status: "Busy",
      message: "",
      lastMessage: "12:04",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Gunter",
      status: "Offline",
      message: "...",
      lastMessage: "10:48",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 2,
    },
    {
      name: "Hunter",
      status: "Offline",
      message: "...",
      lastMessage: "03/08/2021",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 0,
    },
  ],
};

const data_friends = {
  notOffline: 3,
  length: 7,
  users: [
    {
      name: "Erikas",
      status: "Online",
      message: "",
      lastMessage: "13:00",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Anna",
      status: "Busy",
      message: "",
      lastMessage: "12:04",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Maitê",
      status: "Away",
      message: "...",
      lastMessage: "10:48",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 1,
    },
    {
      name: "Virgínia",
      status: "Offline",
      message: "...",
      lastMessage: "yesterday",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Jean",
      status: "Offline",
      message: "...",
      lastMessage: "02/09/2021",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Dinar",
      status: "Offline",
      message: ":p",
      lastMessage: "03/08/2021",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Broz",
      status: "Offline",
      message: ":|",
      lastMessage: "01/08/2021",
      avatar: require("../../assets/jacquin.png"),
      newMessages: 0,
    },
  ],
};

const Chat = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content colors={["#D8DEEF", "#F9F9F9", "#FFFFFF", "#F9F9F9", "#D8DEEF"]}>
        <Header style={{ padding: 25, paddingBottom: 0 }} />
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 25, paddingTop: 0 }}>
            <Accordion title="Favourites" star green data={data_favourites} />
            <Accordion title="Family" data={data_family} />
            <Accordion title="Friends" data={data_friends} />
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Chat;
