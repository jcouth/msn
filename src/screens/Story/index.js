import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Content, HeaderArea } from "./styles";
import ProfilePicture from "../../components/ProfilePicture";

const Story = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <HeaderArea>
          <StoriesArea></StoriesArea>
          <UserArea>
            <ProfilePicture />
            <View>
              <Name></Name>
              <When></When>
            </View>
            <CloseButton>{/* icon */}</CloseButton>
          </UserArea>
        </HeaderArea>
        <BottomArea>
          {/* icon */}
          {/* text input */}
        </BottomArea>
      </Content>
    </Container>
  );
};

export default Story;
