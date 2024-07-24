import { Image, View, StyleSheet, Text } from "react-native";

export default function ListImage(props) {
  const movie = props.item;
  return (
    <View key={movie.id} style={[styles.box, { backgroundColor: "#EDEDED" }]}>
      <Image
        source={{ uri: movie.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{ alignItems: "center", marginBottom: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{movie.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 220,
    height: 220,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    margin: 5,
  },
  image: { flex: 1, borderRadius: 8, margin: 2 },
});
