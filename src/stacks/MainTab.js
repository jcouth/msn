import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabChat from "../screens/Tabs/TabChat";
import TabGroups from "../screens/Tabs/TabGroups";
import TabStories from "../screens/Tabs/TabStories";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabChat"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4E609B",
      }}
    >
      <Tab.Screen
        name="TabChat"
        component={TabChat}
        options={{
          tabBarLabel: "Chat",
          // tabBarIcon: ({ tintColor }) => (
          //   <AntDesign name="stepforward" size={16} color="black" />
          // ),
          // tabBarShowIcon: true,
          // tabBarStyle: {
          //   // transform: [{scale: -1}]
          // }
        }}
      />
      <Tab.Screen
        name="TabGroups"
        component={TabGroups}
        options={{ tabBarLabel: "Groups" }}
      />
      <Tab.Screen
        name="TabStories"
        component={TabStories}
        options={{ tabBarLabel: "Stories" }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
