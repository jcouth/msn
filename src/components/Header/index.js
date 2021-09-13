import React from "react";
import { TouchableOpacity, View } from "react-native";
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
import ProfilePicture from "../ProfilePicture";

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
            <TouchableOpacity>
              <Ionicons name="search-sharp" size={24} color="#192758" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="settings-sharp" size={24} color="#192758" />
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
