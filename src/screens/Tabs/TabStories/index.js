import React from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Accordion from "../../../components/Accordion";
import StoriesItem from "../../../components/Accordion/StoriesItem";
import ProfilePicture from "../../../components/ProfilePicture";
import {
  ChannelsArea,
  ChannelsContainer,
  ChannelsContent,
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
      stories: [
        {
          when: "11min",
          video: "https://cdn.dribbble.com/users/5236389/screenshots/13497348/media/6cccc746db12f8a37415f014847496b7.mp4",
        },
        {
          when: "7min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
        {
          when: "2min",
          video: "https://cdn.dribbble.com/users/5236389/screenshots/13497348/media/6cccc746db12f8a37415f014847496b7.mp4",
        },
      ],
      status: "Online",
      avatar: require("../../../assets/jacquin.png"),
    },
    {
      name: "Thales Franciso fernando",
      stories: [
        {
          when: "11min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
      ],
      status: "Offline",
      avatar: require("../../../assets/jacquin.png"),
    },
    {
      name: "Bruno",
      stories: [
        {
          when: "11min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
        {
          when: "7min",
          video: "https://cdn.dribbble.com/users/5236389/screenshots/13497348/media/6cccc746db12f8a37415f014847496b7.mp4",
        },
      ],
      status: "Away",
      avatar: require("../../../assets/jacquin.png"),
    },
    {
      name: "Septter",
      stories: [
        {
          when: "11min",
          video: "https://cdn.dribbble.com/users/5236389/screenshots/13497348/media/6cccc746db12f8a37415f014847496b7.mp4",
        },
        {
          when: "7min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
      ],
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
      stories: [
        {
          when: "11min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
        {
          when: "7min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
      ],
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
      stories: [
        {
          when: "11min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
        {
          when: "7min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
      ],
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
      title: "Big Buck Bunny",
      stories: [
        {
          when: "11min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
        {
          when: "7min",
          video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
      ],
      status: "Offline",
      avatar: require("../../../assets/jacquin.png"),
    },
  ],
};

const data_channels = {
  length: 3,
  channels: [
    {
      avatar: require("../../../assets/jacquin.png"),
      title: "He Calls Himself A Merman",
    },
    {
      avatar: require("../../../assets/jacquin.png"),
      title: "COVID-19 Linked Misinformation Can Be Fatal",
    },
    {
      avatar: require("../../../assets/jacquin.png"),
      title: "The Huge Spider's Bite Feels Like Breaking Bones",
    },
  ],
};

const TabStories = () => {
  const navigation = useNavigation();

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
                  <StoriesItem
                    key={index}
                    user={user}
                    onPress={() => {
                      navigation.navigate("Story", { user: user });
                    }}
                  />
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
                  <StoriesItem
                    key={index}
                    user={user}
                    onPress={() => {
                      navigation.navigate("Story", { user: user });
                    }}
                  />
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
                  <StoriesItem
                    key={index}
                    user={user}
                    onPress={() => {
                      navigation.navigate("Story", { user: user });
                    }}
                  />
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
                  <StoriesItem
                    key={index}
                    user={user}
                    bigger
                    onPress={() => {
                      navigation.navigate("Story", { user: user });
                    }}
                  />
                ))}
              </ScrollView>
            </Accordion>
            <ChannelsContainer>
              <ChannelsTitle>Channels</ChannelsTitle>
              <ChannelsContent>
                {data_channels.channels.map((channel, index) => (
                  <ChannelsArea key={index}>
                    <ProfilePicture
                      width="100%"
                      height="200px"
                      roundness="5px"
                      colors={["#FFFFFF", "#FFFFFF"]}
                      source={require("../../../assets/jacquin.png")}
                    />
                    <ChannelsTextArea>
                      <ChannelsText>{channel.title}</ChannelsText>
                    </ChannelsTextArea>
                  </ChannelsArea>
                ))}
              </ChannelsContent>
            </ChannelsContainer>
          </View>
        </ScrollView>
      </Content>
    </>
  );
};

export default TabStories;
