// import React, { useState, useEffect } from "react";
// import { View, FlatList, StyleSheet } from "react-native";
// import ListCard from "../Components/ListCard";
// import ListImage from "../Components/ListImage";
// import { allCartoons } from "../Components/constant";

// export default function NewScreen({ route }) {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/animated")
//       .then((response) => response.json())
//       .then((json) => {
//         setMovies(json);
//       })
//       .catch((error) => {
//         console.warn(error);
//       });
//   }, []);

//   const renderListItem = ({ item, index }) => {
//     if (index === 0) {
      
//       return (
//         <FlatList
//           horizontal
//           data={movies}
//           renderItem={({ item }) => <ListImage item={item} />}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//         />
//       );
//     } else {
     
//       return <ListCard item={item} />;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[{ key: "horizontalList" }, ...allCartoons]}
//         renderItem={renderListItem}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//     paddingHorizontal: 10,
//     paddingTop: 5,
//   },
// });



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
              data={movies}
              renderItem={({ item, index }) => {
                return <ListImage item={item} />;
              }}
            ></FlatList>
          }
        </ScrollView>

        {/* Content Vertical Scroll*/}
        {allCartoons.map((cartoon) => (
          <ListCard item={cartoon} />
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
    paddingBottom:10

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
