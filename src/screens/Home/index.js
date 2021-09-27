import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Header from "../../components/Header";
import MainTab from "../../stacks/MainTab";
import { Container, Content } from "./styles";
import firebase from "firebase/app";

const Home = () => {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    status: "",
    uid: "",
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      let _user = {};
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snap) => {
          _user = snap.data();
          _user = { ..._user, status: _user.last_status };
          firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .update({ status: _user.status });
          setUser(_user);
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
