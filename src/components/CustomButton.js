import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const CustomButton = ({ title, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("BottomTab")}
        style={{
          width: 300,
          height: 50,
          backgroundColor: "#eab676",
          justifyContent: "center",
          borderRadius: 20,
        }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomButton;
