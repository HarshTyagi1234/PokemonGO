import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView, StyleSheet } from "react-native";
import ListCard from "../Components/ListCard";
import ListImage from "../Components/ListImage";
import { allCartoons } from "../Components/constant";

export default function NewScreen({ route }) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/animated")
      .then((response) => response.json())
      .then((json) => {
        setMovies(json);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Content Horizontal Scroll*/}

        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={movies} 
              renderItem={({ item, index }) => {
                return <ListImage item={item} />;
              }}
            ></FlatList>
          }
        </ScrollView>

        {/* Content Vertical Scroll*/}
        {allCartoons.map((cartoon) => (
          <ListCard item={cartoon} key={cartoon.id} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  scrollViewContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  box: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});
