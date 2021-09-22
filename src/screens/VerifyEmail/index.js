import React, { useCallback, useEffect, useRef } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import {
  Container,
  Content,
  ImageIcon,
  TextArea,
  PrimaryText,
  SecondaryText,
  TextBold,
  ButtonArea,
  Button,
  ButtonText,
} from "./styles";
import firebase from "firebase/app";

const Preload = ({ route: { params } }) => {
  const { user = { email: "user@domain.com" } } = params;
  let { justCreated = false } = params;
  const navigation = useNavigation();
  const toastRef = useRef(null);

  useEffect(() => {
    if (justCreated) {
      toastRef.current.show({
        type: "success",
        position: "bottom",
        text1: "Usuário criado com sucesso!",
        text2: "Agora só falta confirmar o seu e-mail :)",
      });
      justCreated = false;
    }
  }, []);

  const handleVerify = useCallback(() => {
    if (user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((signData) => {
          if (signData.user.emailVerified) {
            navigation.reset({
              routes: [{ name: "Home" }],
            });
            // set no context as info do user
          } else {
            firebase.auth().signOut();
            toastRef.current.show({
              type: "error",
              position: "bottom",
              text1: "E-mail não foi verificado",
              text2: "Parece que você não verificou seu e-mail ainda :(",
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <Toast
          ref={toastRef}
          //   ref={(ref) => Toast.setRef(ref)}
          style={{ zIndex: 1, elevation: 1 }}
        />
        <ImageIcon
          style={{ resizeMode: "contain" }}
          source={require("../../assets/msn_icon.png")}
        />
        <TextArea>
          <PrimaryText>Enviamos um e-mail para:</PrimaryText>
          <TextBold>{user.email}</TextBold>
          <SecondaryText>Verifique o e-mail para prosseguir</SecondaryText>
        </TextArea>
        <ButtonArea>
          <Button primary onPress={handleVerify}>
            <ButtonText>Já verifiquei minha conta</ButtonText>
          </Button>
          <Button
            onPress={() => {
              navigation.reset({
                routes: [{ name: "SignIn" }],
              });
            }}
          >
            <ButtonText>Sair</ButtonText>
          </Button>
        </ButtonArea>
      </Content>
    </Container>
  );
};

export default Preload;
