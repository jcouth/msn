import React from "react";
import { StatusBar, Text } from "react-native";
import Header from "../../components/Header";
import { Container, Content } from "./styles";

const Groups = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <Header />
        <Text>Groups</Text>
      </Content>
    </Container>
  );
};

export default Groups;
