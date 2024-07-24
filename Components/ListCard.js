import { Text, View, StyleSheet } from "react-native";

export default function ListCard(props) {
  const cartoon = props.item;
  return (
    <View
      key={cartoon.id}
      style={[styles.box, { backgroundColor: cartoon.color }]}
    >
      <Text style={styles.name}>{cartoon.name}</Text>
      <Text style={styles.description}>{cartoon.power}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
