import React from "react";
import { ScrollView, View } from "react-native";
import Accordion from "../../../components/Accordion";
import GroupItem from "../../../components/Accordion/GroupItem";
import { Content } from "./styles";

const data_fut = {
  notOffline: 2,
  length: 2,
  users: [
    {
      name: "Fut de Quarta",
      lastMessage: "yesterday",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 1,
    },
    {
      name: "Fut dos Amigo",
      lastMessage: "13:11",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 2,
    },
  ],
};

const data_family = {
  notOffline: 1,
  length: 3,
  users: [
    {
      name: "Para toda a Família",
      lastMessage: "12:43",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 30,
    },
    {
      name: "Só os primos",
      lastMessage: "12:04",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Sem a tia Julha",
      lastMessage: "10:48",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 2,
    },
  ],
};

const data_friends = {
  notOffline: 0,
  length: 2,
  users: [
    {
      name: "Faculdade",
      lastMessage: "13:00",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Só os amigões",
      lastMessage: "12:04",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 0,
    },
  ],
};

const data_work = {
  notOffline: 2,
  length: 3,
  users: [
    {
      name: "Compasso",
      lastMessage: "13:00",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "UolFlix",
      lastMessage: "12:04",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Team One",
      lastMessage: "13:04",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 0,
    },
  ],
};

const TabGroups = () => {
  return (
    <>
      <Content colors={["#F9F9F9", "#FFFFFF", "#F9F9F9"]}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 25, paddingTop: 0 }}>
            <Accordion
              title="Fut"
              expanded
              notOffline={data_fut.notOffline}
              total={data_fut.length}
            >
              {data_fut.users.map((user, index) => (
                <GroupItem key={index} user={user} />
              ))}
            </Accordion>
            <Accordion
              title="Family"
              notOffline={data_family.notOffline}
              total={data_family.length}
            >
              {data_family.users.map((user, index) => (
                <GroupItem key={index} user={user} />
              ))}
            </Accordion>
            <Accordion
              title="Friends"
              notOffline={data_friends.notOffline}
              total={data_friends.length}
            >
              {data_friends.users.map((user, index) => (
                <GroupItem key={index} user={user} />
              ))}
            </Accordion>
            <Accordion
              title="Work"
              notOffline={data_work.notOffline}
              expanded
              total={data_work.length}
            >
              {data_work.users.map((user, index) => (
                <GroupItem key={index} user={user} />
              ))}
            </Accordion>
          </View>
        </ScrollView>
      </Content>
    </>
  );
};

export default TabGroups;
