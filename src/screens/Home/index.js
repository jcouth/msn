import React from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import {
  Container,
  Content,
  HeaderArea,
  ProfileArea,
  ProfilePictureStatus,
  ProfilePicture,
  InfoArea,
  TopInfoArea,
  TopInfoAreaButtons,
  UserNameText,
  UserStatusText,
  BottomInfoArea,
  UserMessageText,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content>
        <HeaderArea>
          <ProfileArea colors={["#fff", "#fff", "#39CA54"]}>
            <ProfilePictureStatus>
              <ProfilePicture
                style={{ resizeMode: "contain" }}
                source={require("../../assets/jacquin.png")}
              />
            </ProfilePictureStatus>
          </ProfileArea>
          <InfoArea>
            <TopInfoArea>
              <View>
                <UserNameText>Tyrone Fuller</UserNameText>
                <UserStatusText>(Online)</UserStatusText>
              </View>
              <TopInfoAreaButtons>
                {/* <TouchableOpacity>
                  <Ionicons name="settings-sharp" size={26} color="#192758" />
                </TouchableOpacity> */}
                <TouchableOpacity>
                  <Ionicons name="settings-sharp" size={26} color="#192758" />
                </TouchableOpacity>
              </TopInfoAreaButtons>
            </TopInfoArea>
            <BottomInfoArea>
              <UserMessageText>
                Share a message or link with your contacts
              </UserMessageText>
            </BottomInfoArea>
          </InfoArea>
        </HeaderArea>
      </Content>
    </Container>
  );
};

export default Home;
