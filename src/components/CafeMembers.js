import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const CafeMembers = () => {
  const peopleImages = [
    {
      imageUrl: require("../../assets/people/people11.jpg"),
    },
    {
      imageUrl: require("../../assets/people/people12.jpg"),
    },
    {
      imageUrl: require("../../assets/people/people13.jpg"),
    },
    {
      imageUrl: require("../../assets/people/people17.jpg"),
    },
    {
      imageUrl: require("../../assets/people/people15.jpg"),
    },
    {
      imageUrl: require("../../assets/people/people16.jpg"),
    },
  ];

  return (
    <View style={styles.cafe_container}>
      <Text style={styles.heading}>CafeMembers</Text>
      <View style={styles.cafe_people_container}>
        {peopleImages?.map((people, index) => {
          return (
            <View key={index} style={styles.img_container}>
              <Image style={styles.img} source={people?.imageUrl}></Image>
            </View>
          );
        })}
        <View
          style={[
            styles.img_container,
            {
              backgroundColor: "#61204E",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            },
          ]}
        >
          <Text style={styles.people_count}>20+</Text>
        </View>
      </View>
    </View>
  );
};

export default CafeMembers;

const styles = StyleSheet.create({
  heading: {
    color: "#723968",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  img_container: {
    width: 80,
    height: 80,
    borderRadius: 30,
    margin: 5,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
  cafe_people_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cafe_container: {
    paddingVertical: 20,
  },
  people_count: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
