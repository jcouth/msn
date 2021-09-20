import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabChat from "../screens/Tabs/TabChat";
import TabGroups from "../screens/Tabs/TabGroups";
import TabStories from "../screens/Tabs/TabStories";

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
      <Tab.Screen name="TabChat" component={TabChat} />
      <Tab.Screen name="TabGroups" component={TabGroups} />
      <Tab.Screen name="TabStories" component={TabStories} />
    </Tab.Navigator>
  );
};

export default MainTab;
