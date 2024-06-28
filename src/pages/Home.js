import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";
import { containerStyle } from "../styles";

const Home = ({ navigation }) => {
  return (
    <View style={containerStyle.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
