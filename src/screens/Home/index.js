import React from "react";
import { StatusBar } from "react-native";
import Header from "../../components/Header";
import MainTab from "../../stacks/MainTab";
import { Container, Content } from "./styles";

const Home = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#d8deef" barStyle="dark-content" />
      <Content>
        <Header />
        <MainTab />
      </Content>
    </Container>
  );
};

export default Home;
