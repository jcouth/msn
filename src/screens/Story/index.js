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
  VideoClickArea,
  VideoClick,
} from "./styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

const Story = ({ navigation: { goBack }, route: { params } }) => {
  const { user } = params;
  const video = useRef(null);
  const [activeStory, setActiveStory] = useState({
    active: 0,
    when: user.stories[0].when,
    video: user.stories[0].video,
    duration: 0,
  });

  const getColor = (status) => {
    let color = ["#fff", "#D8D8D8", "#808080"]; // Offline
    if (status === "Online") color = ["#fff", "#C3EFCB", "#39CA54"];
    else if (status === "Busy") color = ["#fff", "#FFB2B2", "#FF1919"];
    else if (status === "Away") color = ["#fff", "#FFD8B2", "#FF8000"];
    return color;
  };

  const prevVideo = () => {
    const position = activeStory.active - 1;
    if (0 <= position) {
      setActiveStory({
        active: position,
        when: user.stories[position].when,
        video: user.stories[position].video,
      });
    }
  };

  const nextVideo = () => {
    const position = activeStory.active + 1;
    if (position < user.stories.length) {
      setActiveStory({
        active: position,
        when: user.stories[position].when,
        video: user.stories[position].video, // rmv
      });
    } else {
      goBack();
    }
  };

  const _handleVideoRef = (component) => {
    if (component !== null) {
      if (video.current !== null) {
        video.current.stopAsync();
        video.current.unloadAsync();
      }
      const playbackObject = component;
      video.current = playbackObject;
      video.current.loadAsync(
        {
          uri: user.stories[activeStory.active].video,
        },
        { progressUpdateIntervalMillis: 1000, shouldPlay: true }
      );
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <VideoArea>
          <StyledVideo
            ref={_handleVideoRef}
            // useNativeControls
            resizeMode="contain"
            shouldPlay={true}
            onPlaybackStatusUpdate={(e) => {
              if (e.didJustFinish) {
                nextVideo();
              }
            }}
          />
          <VideoClickArea>
            <VideoClick
              onPress={() => {
                prevVideo();
              }}
            />
            <VideoClick
              onPress={() => {
                nextVideo();
              }}
            />
          </VideoClickArea>
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
                  >
                    {/* {activeStory.active === index && (
                      <Animated.View
                        style={{
                          backgroundColor: "#fff",
                          width: `${progress}%`,
                        }}
                      />
                    )} */}
                  </StoriesBar>
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
                padding="5px 10px"
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
