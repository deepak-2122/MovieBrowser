import AnDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";
import Home from "../../pages/Home";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  const [tabBackground, setTabBackground] = useState("cyan");
  const [textColor, setTextColor] = useState("black");
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="black"
        inactiveColor="#3e2465"
        barStyle={{
          backgroundColor: tabBackground,
        }}
      >
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
          component={Home}
          listeners={{
            tabPress() {
              setTabBackground("pink");
            },
          }}
          options={{
            tabBarLabel: "New",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="new-box" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Home}
          listeners={{
            tabPress() {
              setTabBackground("lightgreen");
            },
          }}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
