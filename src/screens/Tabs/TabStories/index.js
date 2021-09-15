import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Accordion from "../../../components/Accordion";
import StoriesItem from "../../../components/Accordion/StoriesItem";
import ProfilePicture from "../../../components/ProfilePicture";
import {
  ChannelsArea,
  ChannelsContainerArea,
  ChannelsText,
  ChannelsTextArea,
  ChannelsTitle,
  Content,
} from "./styles";

const data_favourites = {
  notOffline: 3,
  length: 4,
  users: [
    {
      name: "Tyrone Fuller",
      status: "Online",
      avatar: require("../../../assets/jacquin.png"),
    },
    {
      name: "Thales Franciso fernando",
      status: "Offline",
      avatar: require("../../../assets/jacquin.png"),
    },
    {
      name: "Bruno",
      status: "Away",
      avatar: require("../../../assets/jacquin.png"),
    },
    {
      name: "Septter",
      status: "Busy",
      avatar: require("../../../assets/jacquin.png"),
    },
  ],
};

const data_family = {
  notOffline: 1,
  length: 1,
  users: [
    {
      name: "Thanise",
      status: "Away",
      avatar: require("../../../assets/jacquin.png"),
    },
  ],
};

const data_friends = {
  notOffline: 1,
  length: 1,
  users: [
    {
      name: "Erikas",
      status: "Online",
      avatar: require("../../../assets/jacquin.png"),
    },
  ],
};

const data_subscriptions = {
  notOffline: 0,
  length: 1,
  users: [
    {
      name: "Erikas",
      status: "Offline",
      avatar: require("../../../assets/jacquin.png"),
    },
  ],
};

const data_channels = [
  {
    id: 1,
    avatar: require("../../../assets/jacquin.png"),
    title: "He Calls Himself A Merman",
  },
  {
    id: 2,
    avatar: require("../../../assets/jacquin.png"),
    title: "COVID-19 Linked Misinformation Can Be Fatal",
  },
  {
    id: 3,
    avatar: require("../../../assets/jacquin.png"),
    title: "The Huge Spider's Bite Feels Like Breaking Bones",
  },
];

const TabStories = () => {
  const _renderItem = ({ item }) => (
    <>
      <ChannelsArea>
        <ProfilePicture
          width="100%"
          height="200px"
          roundness="5px"
          colors={["#FFFFFF", "#FFFFFF"]}
          source={require("../../../assets/jacquin.png")}
        />
        <ChannelsTextArea>
          <ChannelsText></ChannelsText>
        </ChannelsTextArea>
      </ChannelsArea>
    </>
  );
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
              <ScrollView horizontal={true}>
                {data_favourites.users.map((user, index) => (
                  <StoriesItem key={index} user={user} />
                ))}
              </ScrollView>
            </Accordion>
            <Accordion
              title="Family"
              expanded
              notOffline={data_family.notOffline}
              total={data_family.length}
            >
              <ScrollView horizontal={true}>
                {data_family.users.map((user, index) => (
                  <StoriesItem key={index} user={user} />
                ))}
              </ScrollView>
            </Accordion>
            <Accordion
              title="Friends"
              expanded
              notOffline={data_friends.notOffline}
              total={data_friends.length}
            >
              <ScrollView horizontal={true}>
                {data_friends.users.map((user, index) => (
                  <StoriesItem key={index} user={user} />
                ))}
              </ScrollView>
            </Accordion>
            <Accordion
              title="Subscriptions"
              expanded
              notOffline={data_subscriptions.notOffline}
              total={data_subscriptions.length}
            >
              <ScrollView horizontal={true}>
                {data_subscriptions.users.map((user, index) => (
                  <StoriesItem key={index} user={user} bigger />
                ))}
              </ScrollView>
            </Accordion>
            <ChannelsContainerArea>
              <ChannelsTitle>Channels</ChannelsTitle>
              {/* <FlatList
                data={data_channels}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id}
                num
              /> */}
            </ChannelsContainerArea>
          </View>
        </ScrollView>
      </Content>
    </>
  );
};

export default TabStories;
