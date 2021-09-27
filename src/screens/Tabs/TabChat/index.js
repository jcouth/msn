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
      avatar: "https://ui-avatars.com/api/?name=Tyrone&length=1",
      email: "",
      last_message: "Hello :D",
      last_message_date: "yesterday",
      last_message_amount: 1,
      message_text: "",
      name: "Tyrone Fuller",
      status: "Online",
    },
    {
      avatar: "https://ui-avatars.com/api/?name=Thamires&length=1",
      email: "",
      last_message: "Boa noite",
      last_message_date: "08/08/2021",
      last_message_amount: "",
      message_text: "",
      name: "Thamires Fuller",
      status: "Offline",
    },
    {
      avatar: "https://ui-avatars.com/api/?name=Thais&length=1",
      email: "",
      last_message: "Te encontro lá",
      last_message_date: "05/08/2021",
      last_message_amount: "",
      message_text: "",
      name: "Thais",
      status: "Busy",
    },
  ],
};

const data_family = {
  notOffline: 2,
  length: 4,
  users: [
    {
      avatar: "https://ui-avatars.com/api/?name=Thanise&length=1",
      email: "",
      last_message: " Sim, estou muito feliz :DD",
      last_message_date: "12:43",
      last_message_amount: 1,
      message_text: "",
      name: "Thanise",
      status: "Away",
    },
    {
      avatar: "https://ui-avatars.com/api/?name=Jani&length=1",
      email: "",
      last_message: "fechado",
      last_message_date: "12:04",
      last_message_amount: "",
      message_text: "",
      name: "Jani",
      status: "Busy",
    },
    {
      avatar: "https://ui-avatars.com/api/?name=Gunter&length=1",
      email: "",
      last_message: "...",
      last_message_date: "10:48",
      last_message_amount: 2,
      message_text: "",
      name: "Gunter",
      status: "Offline",
    },
    {
      avatar: "https://ui-avatars.com/api/?name=Hunter&length=1",
      email: "",
      last_message: "Me responde GRRR",
      last_message_date: "03/08/2021",
      last_message_amount: 18,
      message_text: "",
      name: "Hunter",
      status: "Offline",
    },
  ],
};

const TabChat = () => {
  const _id = firebase.auth().currentUser.uid;
  const navigation = useNavigation();
  const [friends, setFriends] = useState([]);
  const [amountOnlineFriend, setAmountOnlineFriend] = useState(0);

  useEffect(() => {
    let isMounted = true;
    firebase
      .firestore()
      .collection("friends")
      .doc(_id)
      .collection("friends")
      .get()
      .then((snap) => {
        if (isMounted) {
          const array = [];
          let amountOnline = 0;
          snap.docs.map((doc) => {
            const _info = doc
              .data()
              .user.get()
              .then((res) => {
                if (res.data().status !== "Offline") amountOnline++;
                const aux = { ...doc.data(), ...res.data(), uid: res.id };
                delete aux.user;

                return aux;
              });
            array.push(_info);
          });
          setAmountOnlineFriend(amountOnline);
          resolvePromises(array);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const resolvePromises = async (array) => {
    const resolved = await Promise.all(
      array.map(async (res) => {
        let user = await res;
        return await user;
      })
    );
    setFriends(resolved);
  };

  return (
    <Content colors={["#F9F9F9", "#FFFFFF", "#F9F9F9"]}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 25, paddingTop: 0 }}>
          <Accordion
            title="Favourites"
            star
            notOffline={data_favourites.notOffline}
            total={data_favourites.length}
          >
            {data_favourites.users.map((user, index) => (
              <ChatItem key={index} user={user} onPress={() => {}} />
            ))}
          </Accordion>
          <Accordion
            title="Family"
            notOffline={data_family.notOffline}
            total={data_family.length}
          >
            {data_family.users.map((user, index) => (
              <ChatItem key={index} user={user} onPress={() => {}} />
            ))}
          </Accordion>
          <Accordion
            title="Friends"
            expanded={0 < friends.length}
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
  );
};

export default TabChat;
