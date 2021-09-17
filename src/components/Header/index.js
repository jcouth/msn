import React from "react";
import { TouchableOpacity, View } from "react-native";
import ProfilePicture from "../ProfilePicture";
import {
  HeaderArea,
  InfoArea,
  TopInfoArea,
  TopInfoAreaButtons,
  UserNameText,
  UserStatusText,
  BottomInfoArea,
  UserMessageText,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ style }) => {
  return (
    <HeaderArea style={style}>
      <ProfilePicture
        colors={["#fff", "#C3EFCB", "#39CA54"]}
        source={require("../../assets/jacquin.png")}
      />
      <InfoArea>
        <TopInfoArea>
          <View>
            <UserNameText>Tyrone Fuller</UserNameText>
            <UserStatusText>(Online)</UserStatusText>
          </View>
          <TopInfoAreaButtons>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Ionicons name="search-sharp" size={24} color="#4E609B" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="settings-sharp" size={24} color="#4E609B" />
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
  );
};

export default Header;
