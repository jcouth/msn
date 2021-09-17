import React, { useRef, useState } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import ProfilePicture from "../../components/ProfilePicture";
import Input from "../../components/Input";
import {
  CloseButton,
  Container,
  Content,
  Areas,
  TopArea,
  StoriesArea,
  StoriesBar,
  UserArea,
  UserInfo,
  UserText,
  BottomArea,
  IconArea,
  InputArea,
  StyledVideo,
  VideoArea,
} from "./styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Story = ({ navigation: { goBack }, route: { params } }) => {
  const { user } = params;
  const video = useRef(null);
  const [activeStory, setActiveStory] = useState({
    active: 0,
    when: user.stories[0].when,
    video: user.stories[0].video,
  });

  const getColor = (status) => {
    let color = ["#fff", "#D8D8D8", "#808080"]; // Offline
    if (status === "Online") color = ["#fff", "#C3EFCB", "#39CA54"];
    else if (status === "Busy") color = ["#fff", "#FFB2B2", "#FF1919"];
    else if (status === "Away") color = ["#fff", "#FFD8B2", "#FF8000"];
    return color;
  };

  const goToNextVideo = () => {
    const position = activeStory.active + 1;
    if (position < user.stories.length) {
      setActiveStory({
        active: position,
        when: user.stories[position].when,
        video: user.stories[position].video,
      });
    } else {
      goBack();
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <VideoArea
          onPress={() => {
            goToNextVideo();
          }}
        >
          <StyledVideo
            ref={video}
            source={{
              uri: activeStory.video,
            }}
            // useNativeControls
            resizeMode="contain"
            shouldPlay={true}
            onPlaybackStatusUpdate={(e) => {
              if (e.didJustFinish) {
                goToNextVideo();
              }
            }}
          />
        </VideoArea>
        <Areas>
          <TopArea>
            <StoriesArea>
              {user.stories.map((story, index) => {
                return (
                  <StoriesBar
                    active={activeStory.active === index ? 1 : 0}
                    opened={index < activeStory.active ? 1 : 0}
                    key={index}
                  />
                );
              })}
            </StoriesArea>
            <UserArea>
              <ProfilePicture
                width="50px"
                height="50px"
                borderSize="2.5px"
                roundness="5px"
                colors={getColor(user.status)}
                source={user.avatar}
              />
              <UserInfo>
                <UserText primary>{user.name}</UserText>
                <UserText>{activeStory.when}</UserText>
              </UserInfo>
              <CloseButton
                onPress={() => {
                  goBack();
                }}
              >
                <Ionicons name="close" size={36} color="#ffffff" />
              </CloseButton>
            </UserArea>
          </TopArea>
          <BottomArea>
            <IconArea>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="#ffffff"
              />
            </IconArea>
            <InputArea>
              <Input
                placeholder="Type a message"
                placeholderTextColor="#ffffff"
                color="#ffffff"
                backgroundColor="transparent"
                borderSize="1px"
                borderColor="#ffffff"
                borderRadius="50px"
                caretCo
                // padding="5px 10px"
                rightIcon={
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="sticker-outline"
                      size={20}
                      color="#ffffff"
                    />
                  </TouchableOpacity>
                }
              />
            </InputArea>
          </BottomArea>
        </Areas>
      </Content>
    </Container>
  );
};

export default Story;
