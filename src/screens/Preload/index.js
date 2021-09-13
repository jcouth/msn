import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { Container, Content, ImageIcon, LoadingIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateToken } from "../../services/api";

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        const isValid = await validateToken(token);
        if (isValid) {
          // valido
        } else {
          navigation.navigate("SignIn");
        }
      } else {
        navigation.navigate("SignIn");
      }
    };

    checkToken();
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
