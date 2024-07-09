import { StyleSheet, View } from "react-native";

import React from "react";
import { WebView } from "react-native-webview";

const VideoPlayerScreen = ({ route }) => {
  const { videoId } = route.params;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  webview: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default VideoPlayerScreen;
