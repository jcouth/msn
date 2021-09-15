import React, { useState } from "react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { Container, TitleArea, TitleText, GreenCircle } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Accordion = ({
  children,
  title,
  star,
  green,
  expanded = false,
  notOffline = 0,
  total = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <Container>
      <Collapse
        isExpanded={isExpanded}
        onToggle={() => {
          setIsExpanded((isExpanded) => !isExpanded);
        }}
      >
        <CollapseHeader>
          <TitleArea>
            <MaterialIcons
              name={isExpanded ? "expand-less" : "expand-more"}
              size={16}
              color="#4E609B"
            />
            {star && <Ionicons name="star" size={16} color="#FAD02C" />}
            <TitleText>
              {title} ({notOffline}/{total})
            </TitleText>
            {green && <GreenCircle />}
          </TitleArea>
        </CollapseHeader>
        <CollapseBody>
          {children}
          {/* {data.users.map((user, index) => (
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
                  <UserStatusText> ({user.status})</UserStatusText>
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
          ))} */}
        </CollapseBody>
      </Collapse>
    </Container>
  );
};

export default Accordion;
