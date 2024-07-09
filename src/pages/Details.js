import {
  Appbar,
  Button,
  Card,
  Paragraph,
  Searchbar,
  Title,
} from "react-native-paper";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { COLORS } from "../constants/Colors";
import { WebView } from "react-native-webview";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const API_KEY = "AIzaSyByIp5wVNY_oE0qu5WTSCZ8dYW0givAmoo"; // Replace with your YouTube API key
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";
const IMAGE_BASE_URL = "https://img.youtube.com/vi/";

const Details = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;

    axios
      .get(YOUTUBE_API_URL, {
        params: {
          key: API_KEY,
          part: "snippet",
          q: searchQuery,
          maxResults: 10,
          type: "video",
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePlayVideo(item.id.videoId)}>
      <Card style={styles.card}>
        <Card.Cover
          source={{ uri: `${IMAGE_BASE_URL}${item.id.videoId}/0.jpg` }}
        />
        <Card.Content>
          <Title>{item.snippet.title}</Title>
          <Paragraph>{item.snippet.description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  const handlePlayVideo = (videoId) => {
    navigation.navigate("player", { videoId });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          backgroundColor: COLORS.WHITE,
          elevation: 10,
        }}>
        <Appbar.Content
          titleStyle={{ color: "black" }}
          title="Search Movie Trailer"
        />
      </Appbar.Header>
      <Searchbar
        style={styles.input}
        placeholder="Search videos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      {!searchQuery ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "pink",
              height: 200,
              borderRadius: 20,
              width: 320,
              marginTop: 100,
            }}>
            <Text style={{ textAlign: "center" }}>
              Please add a title that you want to search in the search box.
              Thanks!
            </Text>
          </View>
        </View>
      ) : (
        <FlatList
          data={videos}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.id.videoId}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  input: {
    marginTop: 60,
  },
  card: {
    marginBottom: 10,
  },
});

export default Details;
