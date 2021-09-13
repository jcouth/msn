import React from "react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import {
  Container,
  TitleArea,
  TitleText,
  GreenCircle,
  InfoArea,
  UserArea,
  TopInfoArea,
  UserMessageText,
  UserNameText,
  UserStatusText,
  LastMessageArea,
  LastMessageText,
  LastNumberMessages,
} from "./styles";
import ProfilePicture from "../ProfilePicture";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Accordion = ({ title, star, green, data }) => {
  const getColor = (status) => {
    // alert(status)
    let color = ["#fff", "#D8D8D8", "#808080"]; // Offline
    if (status === "Online") color = ["#fff", "#C3EFCB", "#39CA54"];
    else if (status === "Busy") color = ["#fff", "#FFB2B2", "#FF1919"];
    else if (status === "Away") color = ["#fff", "#FFD8B2", "#FF8000"];
    return color;
  };

  return (
    <Container>
      <Collapse>
        <CollapseHeader>
          <TitleArea>
            <MaterialIcons name="expand-more" size={16} color="black" />
            {star && <Ionicons name="star-outline" size={16} color="black" />}
            <TitleText>
              {title} ({data.notOffline}/{data.length})
            </TitleText>
            {green && <GreenCircle />}
          </TitleArea>
        </CollapseHeader>
        <CollapseBody>
          {data.users.map((user, index) => (
            <InfoArea key={index}>
              <ProfilePicture
                width="50px"
                height="50px"
                borderSize="2.5px"
                roundness="5px"
                colors={getColor(user.status)}
                source={user.avatar}
              />
              <UserArea>
                <TopInfoArea>
                  <UserNameText>{user.name}</UserNameText>
                  <UserStatusText> {user.status}</UserStatusText>
                </TopInfoArea>
                <UserMessageText>{user.message}</UserMessageText>
              </UserArea>
              <LastMessageArea>
                <LastMessageText changeColor={0 < user.newMessages ? 1 : 0}>
                  {user.lastMessage}
                </LastMessageText>
                {0 < user.newMessages && (
                  <LastNumberMessages>{user.newMessages}</LastNumberMessages>
                )}
              </LastMessageArea>
            </InfoArea>
          ))}
        </CollapseBody>
      </Collapse>
    </Container>
  );
};

export default Accordion;
