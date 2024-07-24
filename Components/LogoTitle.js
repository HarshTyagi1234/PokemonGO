import { View, Text,Image } from "react-native";

export default function LogoTitle() {
  return (
    <View style = {{justifyContent:'center',flexDirection:'row'}}>
        {/* <Image
        source={{ uri: "https://cdn.imgbin.com/20/2/20/imgbin-nick-jr-too-nickelodeon-television-channel-nick-jr-masYPt3p38Zz0KKCtWMnjbpRS.jpg"}}
        style={{height:'30',width:'80' }}
        resizeMode= 'cover'
      /> */}
      
      <Text style={{ color: "#fff",fontSize:'16', fontWeight: "bold" }}>Cartoons</Text>
    </View>
  );
}
