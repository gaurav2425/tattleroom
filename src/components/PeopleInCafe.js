import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const PeopleInCafe = ({ title }) => {
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
      <Text style={styles.heading}>{title}</Text>
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

export default PeopleInCafe;

const styles = StyleSheet.create({
  heading: {
    color: "#723968",
    fontSize: 18,
    fontWeight: "600",
    // marginBottom: 10,
    fontFamily: "DMSansSemiBold",
  },
  img_container: {
    width: 70,
    height: 70,
    borderRadius: 30,
    margin: 5,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 30,
  },
  cafe_people_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cafe_container: {
    paddingVertical: 10,
  },
  people_count: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
