import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import MainTab from "./MainTab";
import Story from "../screens/Story";
import Chat from "../screens/Chat";
import VerifyEmail from "../screens/VerifyEmail";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Story" component={Story} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
    </Stack.Navigator>
  );
};

export default MainStack;
