

import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

export default function Enemy() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/coloursText")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return loading ? (
    <ActivityIndicator size="large" color="#000" />
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 0, paddingVertical: 0 }}
        renderItem={({ item }) => (
          <View
            style={{
              aspectRatio:1,
              height:180,
              backgroundColor: item.color,
              alignItems: "center",
              justifyContent: "center",
              margin: 5,
              borderRadius: 10,
            }}
          >
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
