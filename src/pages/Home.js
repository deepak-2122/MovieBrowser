import { Appbar, Button, Card, Paragraph, Title } from "react-native-paper";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS } from "../constants/Colors";
import Video from "react-native-video";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const API_KEY = "94d884ec3c8f76e47133ffe5296d68e9";
const TMDB_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(TMDB_API_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePlayVideo = (videoId) => {
    navigation.navigate("player", { videoId });
  };

  const handleWatchTrailer = (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        const trailers = response.data.results.filter(
          (video) => video.type === "Trailer"
        );
        if (trailers.length > 0) {
          handlePlayVideo(trailers[0].key);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("selected");

  const renderMovieItem = ({ item }) => (
    <Card style={styles.card}>
      <TouchableOpacity onPress={() => handleWatchTrailer(item.id)}>
        <Card.Cover source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }} />
      </TouchableOpacity>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.overview}</Paragraph>
        <Paragraph>
          <Text style={{ fontWeight: "bold" }}>Release Date:</Text>{" "}
          {item.release_date}
        </Paragraph>
        {/* <Paragraph>Movie Type: {item.genre_ids.join(", ")}</Paragraph> */}
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={() => handleWatchTrailer(item.id)}>
          Watch Trailer
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          backgroundColor: COLORS.WHITE,
          elevation: 10,
        }}>
        <Appbar.Content titleStyle={{ color: "black" }} title="Latest Movies" />
      </Appbar.Header>
      <FlatList
        style={{ marginTop: 5 }}
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TOP_BAR_COLOR,
  },
  card: {
    marginBottom: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  video: {
    width: "100%",
    height: 200,
  },
});

export default HomeScreen;
