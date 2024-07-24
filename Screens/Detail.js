import { View, Text, Image,StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Detail({ route, navigation }) {
  const cartoon = route.params.data;
  const image =  cartoon.imageUrl;
  const color = cartoon.color;

  return (
    <>
      <StatusBar style="dark" />
      <View
        style={{
          backgroundColor: "#EEEDEB",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: image}}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={{backgroundColor:color,flex:1,padding:10}}>{cartoon.power}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: { flex:2,width:'100%'},
});
