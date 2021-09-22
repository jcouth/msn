import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, ImageIcon, LoadingIcon } from "./styles";
import firebase from "firebase/app";

const Preload = () => {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (currentUser) {
        navigation.reset({
          routes: [{ name: "Home" }],
        });
      } else {
        navigation.reset({
          routes: [{ name: "SignIn" }],
        });
      }
    });
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <ImageIcon
          style={{ resizeMode: "contain" }}
          source={require("../../assets/msn_icon.png")}
        />
        <LoadingIcon size="large" color="#FFFFFF" />
      </Content>
    </Container>
  );
};

export default Preload;
