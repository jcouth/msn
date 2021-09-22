// @refresh reset
import React from "react";
// import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";

import UserContextProvider from "./src/contexts/UserContext";

import firebase from "firebase";
require("firebase/auth");
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBAWPi4oWABSl3O0CYsTS7CthQI16YM3w",
  authDomain: "compassomsn.firebaseapp.com",
  databaseURL: "https://compassomsn-default-rtdb.firebaseio.com",
  projectId: "compassomsn",
  storageBucket: "compassomsn.appspot.com",
  messagingSenderId: "670419367941",
  appId: "1:670419367941:web:9d8370a5afeaf4d067046c",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// LogBox.ignoreAllLogs([
//   "Setting a timer for a long period of time",
//   "The email address is already in use by another account.",
// ]);

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}
