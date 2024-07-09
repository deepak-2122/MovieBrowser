import AnDesign from "react-native-vector-icons/AntDesign";
import Details from "../../pages/Details";
import Home from "../../pages/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../../pages/ProfileScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  const [tabBackground, setTabBackground] = useState("cyan");
  const [textColor, setTextColor] = useState("black");
  return (
    <Tab.Navigator
      activeColor="black"
      inactiveColor="#3e2465"
      barStyle={{
        backgroundColor: tabBackground,
      }}>
      <Tab.Screen
        name="Feed"
        component={Home}
        listeners={{
          tabPress() {
            setTabBackground("lightblue");
          },
        }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AnDesign name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={Details}
        listeners={{
          tabPress() {
            setTabBackground("pink");
          },
        }}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={Profile}
        listeners={{
          tabPress() {
            setTabBackground("lightgreen");
          },
        }}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
