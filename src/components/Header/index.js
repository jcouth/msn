import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfilePicture from "../ProfilePicture";
import Input from "../Input";
import {
  HeaderArea,
  HeaderUserArea,
  InfoArea,
  TopInfoArea,
  TopInfoAreaButtons,
  UserNameText,
  UserStatusText,
  BottomInfoArea,
  UserMessageText,
  BottomInfoAreaChat,
  BottomButtonsArea,
  HeaderOptions,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  HeaderOptionsShadow,
} from "./styles";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import firebase from "firebase/app";

const Header = ({
  user = { name: "Tyrone", status: "Online" },
  chatHeader,
  goBack,
}) => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [top, setTop] = useState(0);

  return (
    <>
      <HeaderArea
        onLayout={(e) => {
          setTop(e.nativeEvent.layout.height);
        }}
      >
        <HeaderUserArea>
          <TouchableWithoutFeedback
            onPress={() => {
              setExpanded((expanded) => !expanded);
            }}
          >
            <ProfilePicture
              colors={["#fff", "#C3EFCB", "#39CA54"]}
              source={require("../../assets/jacquin.png")}
            />
          </TouchableWithoutFeedback>
          <InfoArea>
            <TopInfoArea>
              <View>
                <UserNameText>{user.name}</UserNameText>
                <UserStatusText>({user.status})</UserStatusText>
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
                      <Ionicons
                        name="settings-sharp"
                        size={24}
                        color="#4E609B"
                      />
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
                      <Ionicons
                        name="videocam-outline"
                        size={28}
                        color="#4e609b"
                      />
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
        </HeaderUserArea>
        {expanded && (
          <>
            <HeaderOptions>
              <TouchableOpacity
                onPress={() => {
                  console.log("a");
                }}
              >
                <HeaderItem>
                  <HeaderItemIcon>
                    <FontAwesome name="user" size={24} color="#4e609b" />
                  </HeaderItemIcon>
                  <HeaderItemText>Profile Picture</HeaderItemText>
                </HeaderItem>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("a");
                }}
              >
                <HeaderItem>
                  <HeaderItemIcon>
                    <FontAwesome
                      name="dot-circle-o"
                      size={24}
                      color="#4e609b"
                    />
                  </HeaderItemIcon>
                  <HeaderItemText>Status</HeaderItemText>
                </HeaderItem>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("a");
                }}
              >
                <HeaderItem>
                  <HeaderItemIcon>
                    <MaterialCommunityIcons
                      name="camera-outline"
                      size={24}
                      color="#4e609b"
                    />
                  </HeaderItemIcon>
                  <HeaderItemText>Story</HeaderItemText>
                </HeaderItem>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("a");
                }}
              >
                <HeaderItem>
                  <HeaderItemIcon>
                    <MaterialCommunityIcons
                      name="account-group"
                      size={24}
                      color="#4e609b"
                    />
                  </HeaderItemIcon>
                  <HeaderItemText>Create Group</HeaderItemText>
                </HeaderItem>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  firebase.auth().signOut();
                  navigation.reset({
                    routes: [{ name: "SignIn" }],
                  });
                }}
              >
                <HeaderItem>
                  <HeaderItemIcon>
                    <FontAwesome name="sign-out" size={24} color="#4e609b" />
                  </HeaderItemIcon>
                  <HeaderItemText>Sign Out</HeaderItemText>
                </HeaderItem>
              </TouchableOpacity>
            </HeaderOptions>
          </>
        )}
      </HeaderArea>
      {expanded && (
        <>
          <HeaderOptionsShadow top={top} />
        </>
      )}
    </>
  );
};

export default Header;
