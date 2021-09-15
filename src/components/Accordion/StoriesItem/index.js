import React from "react";
import { InfoArea } from "./styles";
import ProfilePicture from "../../ProfilePicture";
import { UserArea, UserNameText } from "./styles";
import { TouchableWithoutFeedback } from "react-native";

const StoriesItem = ({ user, bigger, onPress }) => {
  const getColor = (status) => {
    let color = ["#fff", "#D8D8D8", "#808080"]; // Offline
    if (status === "Online") color = ["#fff", "#C3EFCB", "#39CA54"];
    else if (status === "Busy") color = ["#fff", "#FFB2B2", "#FF1919"];
    else if (status === "Away") color = ["#fff", "#FFD8B2", "#FF8000"];
    return color;
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <InfoArea>
        <ProfilePicture
          width="100px"
          height={bigger ? "175px" : "100px"}
          roundness="5px"
          colors={bigger ? ["#FFFFFF", "#FFFFFF"] : getColor(user.status)}
          source={user.avatar}
        />
        {!bigger && (
          <UserArea>
            <UserNameText numberOfLines={1}>{user.name}</UserNameText>
          </UserArea>
        )}
      </InfoArea>
    </TouchableWithoutFeedback>
  );
};

export default StoriesItem;
