import React from "react";
import ProfilePicture from "../../ProfilePicture";
import {
  InfoArea,
  UserArea,
  TopInfoArea,
  UserMessageText,
  UserNameText,
  LastMessageArea,
  LastMessageText,
  LastNumberMessages,
} from "./styles";

const GroupItem = ({ user }) => {
  const getColor = (status) => {
    let color = ["#fff", "#D8D8D8", "#808080"]; // Offline
    if (status === "Online") color = ["#fff", "#C3EFCB", "#39CA54"];
    else if (status === "Busy") color = ["#fff", "#FFB2B2", "#FF1919"];
    else if (status === "Away") color = ["#fff", "#FFD8B2", "#FF8000"];
    return color;
  };

  return (
    <>
      <InfoArea>
        <ProfilePicture
          width="50px"
          height="50px"
          borderSize="2.5px"
          roundness="5px"
          padding="0px"
          colors={getColor(user.status)}
          source={
            user.avatar
              ? {
                  uri: user.avatar,
                }
              : require("../../../assets/jacquin.png")
          }
          imageFill={user.avatar ? true : false}
        />
        <UserArea>
          <TopInfoArea>
            <UserNameText>{user.name}</UserNameText>
          </TopInfoArea>
          <UserMessageText>{user.last_message}</UserMessageText>
        </UserArea>
        <LastMessageArea>
          <LastMessageText changeColor={0 < user.last_message_amount ? 1 : 0}>
            {user.last_message_date}
          </LastMessageText>
          {0 < user.last_message_amount && (
            <LastNumberMessages>{user.last_message_amount}</LastNumberMessages>
          )}
        </LastMessageArea>
      </InfoArea>
    </>
  );
};

export default GroupItem;
