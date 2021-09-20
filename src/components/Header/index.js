import React from "react";
import { TouchableOpacity, View } from "react-native";
import ProfilePicture from "../ProfilePicture";
import Input from "../Input";
import {
  HeaderArea,
  InfoArea,
  TopInfoArea,
  TopInfoAreaButtons,
  UserNameText,
  UserStatusText,
  BottomInfoArea,
  UserMessageText,
  BottomInfoAreaChat,
  BottomButtonsArea,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ chatHeader, goBack }) => {
  return (
    <HeaderArea>
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
            {chatHeader ? (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => {
                  goBack();
                }}
              >
                <Ionicons name="arrow-back" size={36} color="#4E609B" />
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity style={{ marginRight: 10 }}>
                  <Ionicons name="search-sharp" size={24} color="#4E609B" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="settings-sharp" size={24} color="#4E609B" />
                </TouchableOpacity>
              </>
            )}
          </TopInfoAreaButtons>
        </TopInfoArea>
        <BottomInfoArea>
          {chatHeader ? (
            <BottomInfoAreaChat>
              <UserMessageText>Carpe Diem!</UserMessageText>
              <BottomButtonsArea>
                <TouchableOpacity style={{ marginRight: 10 }}>
                  <Ionicons name="videocam-outline" size={28} color="#4e609b" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="call-outline" size={24} color="#4e609b" />
                </TouchableOpacity>
              </BottomButtonsArea>
            </BottomInfoAreaChat>
          ) : (
            <Input
              textSize="11px"
              textAlign="center"
              placeholder="Share a message or link with your contacts"
              placeholderTextColor="#929bb3"
              color="#4e609b"
              backgroundColor="#ffffff"
              borderSize="1px"
              borderColor="#929bb3"
              borderRadius="50px"
              padding="0 5px"
            />
          )}
        </BottomInfoArea>
      </InfoArea>
    </HeaderArea>
  );
};

export default Header;
