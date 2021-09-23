import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Accordion from "../../../components/Accordion";
import ChatItem from "../../../components/Accordion/ChatItem";
import { Content } from "./styles";
import firebase from "firebase/app";

const data_favourites = {
  notOffline: 2,
  length: 3,
  users: [
    {
      name: "Tyrone Fuller",
      status: "Online",
      message: "Hello :D",
      lastMessage: "yesterday",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Tyrone Fuller",
      status: "Online",
      message: "Hello :D",
      lastMessage: "yesterday",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 1,
    },
    {
      name: "Thais",
      status: "Online",
      message: "",
      lastMessage: "13:11",
      avatar: require("../../../assets/jacquin.png"),
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
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 30,
    },
    {
      name: "Jani",
      status: "Busy",
      message: "",
      lastMessage: "12:04",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 0,
    },
    {
      name: "Gunter",
      status: "Offline",
      message: "...",
      lastMessage: "10:48",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 2,
    },
    {
      name: "Hunter",
      status: "Offline",
      message: "...",
      lastMessage: "03/08/2021",
      avatar: require("../../../assets/jacquin.png"),
      newMessages: 0,
    },
  ],
};

const TabChat = () => {
  const navigation = useNavigation();
  const [friends, setFriends] = useState([]);
  const [amountOnlineFriend, setAmountOnlineFriend] = useState(0);

  useEffect(() => {
    firebase
      .firestore()
      .collection("friends")
      .doc(firebase.auth().currentUser.uid)
      .collection("friends")
      .get()
      .then((snap) => {
        const array = [];
        let amountOnline = 0;
        snap.docs.map((doc) => {
          array.push(doc.data());
        });
        array.filter((data) => {
          if (data.status === "Online") amountOnline++;
        });
        console.log(array);
        setAmountOnlineFriend(amountOnlineFriend);
        setFriends(array);
      });
  }, []);

  return (
    <>
      <Content colors={["#F9F9F9", "#FFFFFF", "#F9F9F9"]}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 25, paddingTop: 0 }}>
            <Accordion
              title="Favourites"
              star
              expanded
              notOffline={data_favourites.notOffline}
              total={data_favourites.length}
            >
              {data_favourites.users.map((user, index) => (
                <ChatItem
                  key={index}
                  user={user}
                  onPress={() => {
                    navigation.navigate("Chat");
                  }}
                />
              ))}
            </Accordion>
            <Accordion
              title="Family"
              expanded
              notOffline={data_family.notOffline}
              total={data_family.length}
            >
              {data_family.users.map((user, index) => (
                <ChatItem key={index} user={user} />
              ))}
            </Accordion>
            <Accordion
              title="Friends"
              expanded
              notOffline={amountOnlineFriend}
              total={friends.length}
            >
              {friends.map((user, index) => (
                <ChatItem
                  key={index}
                  user={user}
                  onPress={() => {
                    navigation.navigate("Chat", { user });
                  }}
                />
              ))}
            </Accordion>
          </View>
        </ScrollView>
      </Content>
    </>
  );
};

export default TabChat;
