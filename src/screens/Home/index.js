import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Header from "../../components/Header";
import MainTab from "../../stacks/MainTab";
import { Container, Content } from "./styles";
import firebase from "firebase/app";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snap) => {
          // console.log("user data: ", snap.data());
          setUser(snap.data());
        });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#d8deef" barStyle="dark-content" />
      <Content>
        <Header user={user} />
        <MainTab />
      </Content>
    </Container>
  );
};

export default Home;
