import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome.jpg");

const Welcome = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading === false ? (
        <ImageBackground
          imageStyle={{ opacity: 0.7 }}
          source={WelcomeImage}
          style={[containerStyle.container, { width: "100%", height: "100%" }]}>
          <Text
            style={{
              fontSize: 70,
              fontSize: 70,
              fontWeight: "bold",
              color: "black",
              backgroundColor: "#082240",
              paddingHorizontal: 10,
              borderColor: "BLlack",
              borderWidth: 4,
              fontStyle: "italic",
              margin: 8,
              borderRadius: 10,
            }}>
            MOVIE
          </Text>

          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "black",
              borderColor: "black",
              borderWidth: 5,
              width: 240,
              padding: 12,
              borderRadius: 12,
              margin: 4,
              fontStyle: "italic",
              backgroundColor: "Yellow",
              borderRadius: 10,
              justifyContent: "center",
              paddingHorizontal: 10,
              textAlign: "center",
            }}>
            BROWSER
          </Text>
          <View style={{ marginTop: 400 }}>
            <CustomButton
              navigation={navigation}
              title={"Let's explore the app"}></CustomButton>
          </View>
        </ImageBackground>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
