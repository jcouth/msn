import React from "react";
import {
  StatusBar,
} from "react-native";
import {
  Container,
  Content,
} from "./styles";
import Header from "../../components/Header";
import MainTab from "../../stacks/MainTab";

const Home = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#F9F9F9" barStyle="dark-content" />
      {/* <Content colors={["#F9F9F9", "#FFFFFF", "#F9F9F9"]}> */}
      <Content>
        <Header style={{ padding: 25, paddingBottom: 0 }} />
        <MainTab />
      </Content>
    </Container>
  );
};

export default Home;
