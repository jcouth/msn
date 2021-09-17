import React from "react";
import { StatusBar } from "react-native";
import Header from "../../components/Header";
import MainTab from "../../stacks/MainTab";
import { Container, Content } from "./styles";

const Home = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#F9F9F9" barStyle="dark-content" />
      <Content>
        <Header style={{ padding: 25, paddingBottom: 0 }} />
        <MainTab />
      </Content>
    </Container>
  );
};

export default Home;
