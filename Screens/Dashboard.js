import React, { useEffect, useState } from "react";
import { StatusBar, FlatList, ActivityIndicator } from "react-native";
import Card from "../Components/Card";
import { allCartoons } from "../Components/constant";

export default function Dashboard({ navigation }) {
  const [cartoons, setCartoons] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectedCartoon = (cartoon) => {
    navigation.navigate("detail", {
      data: cartoon,
    });
  };

  useEffect(() => {
  fetch("http://localhost:3000/pokemon")  
    .then((response) => response.json())
    .then((json) => {
      setCartoons(json);
      setLoading(false);  
    })
    .catch((error) => {
      console.warn(error);
      setLoading(false);  
    });
}, []);



  return loading ? (
    <ActivityIndicator size="large" color="#000" />
  ) : (
    <>
      <StatusBar style="dark" />
      <FlatList
        style={{ backgroundColor: "#000", padding: 15 }}
        data={cartoons}
        renderItem={({ item, index }) => {
          return <Card child={item} buttonClick={selectedCartoon}></Card>;
        }}
      ></FlatList>
    </>
  );
}
