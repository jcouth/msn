import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, ImageIcon, LoadingIcon } from "./styles";
import firebase from "firebase/app";

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    let isMounted = true;
    firebase.auth().onAuthStateChanged((user) => {
      if (isMounted) {
        if (user) {
          navigation.reset({
            routes: [{ name: "Home" }],
          });
        } else {
          navigation.reset({
            routes: [{ name: "SignIn" }],
          });
        }
      }
    });
    return () => {
      isMounted = false;
    };
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
