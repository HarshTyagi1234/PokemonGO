import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Card(props) {
  const color = props.child.color;
  const direction = props.child.id % 2 == 0 ? "row" : "row-reverse";

  return (
    <TouchableOpacity
      onPress={() => {
        props.buttonClick(props.child);
      }}
    >
      <View
        key={props.child.id}
        style={[
          styles.card,
          { backgroundColor: color, flexDirection: direction },
        ]}
      >
        <Image
          source={{ uri: props.child.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.title}>{props.child.name}</Text>
          <Text style={styles.description}>{props.child.power}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#FEF3E2",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  description: {
    fontSize: "12",
    color: "#000",
    fontWeight: "500",
    fontStyle: "normal",
    marginTop: 8,
  },
  title: {
    fontSize: "16",
    fontWeight: "500",
  },
  image: { flex: 1, borderRadius: 8 },
  content: { flex: 1, marginRight: 10, marginLeft: 10 },
});
