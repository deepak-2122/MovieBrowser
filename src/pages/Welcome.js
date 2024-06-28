import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome.jpg");

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading === false ? (
        <ImageBackground
          imageStyle={{ opacity: 0.7 }}
          source={WelcomeImage}
          style={[containerStyle.container, { width: "100%", height: "100%" }]}
        >
          <Text
            style={{
              fontSize: 70,
              fontWeight: "bold",
              color: "black",
              fontFamily: "Inter-Black",
              backgroundColor: "#eab676",
              paddingHorizontal: 10,
              borderColor: "BLlack",
              borderWidth: 4,
              fontStyle: "italic",
              margin: 8,
              borderRadius: 10,
            }}
          >
            MOVIE
          </Text>
          <View
            style={{
              borderWidth: 5,
              borderColor: "black",
              width: 260,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "black",
                fontFamily: "Inter-Black",
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
              }}
            >
              BROWSER
            </Text>
          </View>

          <View style={{ marginTop: 200 }}>
            <CustomButton title={"Get Started"}></CustomButton>
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
