import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabChat from "../screens/Tabs/TabChat";
import TabGroups from "../screens/Tabs/TabGroups";
import TabStories from "../screens/Tabs/TabStories";

const Tab = createMaterialTopTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Chat" component={TabChat} />
      <Tab.Screen name="Groups" component={TabGroups} />
      <Tab.Screen name="Stories" component={TabStories} />
    </Tab.Navigator>
  );
};

export default MainTab;
