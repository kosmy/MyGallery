import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const clickedImage = ({ route, navigation }) => {
  const imageObj = route.params;
  return (
    <Image
      style={imgStyle.img}
      source={{
        uri: imageObj.links.download,
      }}
    />
  );
};

const imgStyle = StyleSheet.create({
  img: {
    height: "100%",
    resizeMode: "contain",
  },
});

export default clickedImage;
