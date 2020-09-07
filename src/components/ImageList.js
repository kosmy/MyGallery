import React, { useEffect } from "react";
import fetchImages from "../store/action";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const imageList = ({ navigation }) => {
  const storeImages = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!storeImages) {
      dispatch(fetchImages());
    }
  });

  let imageObjectsArr = [];

  if (storeImages) {
    imageObjectsArr = storeImages.map((obj) => {
      return (
        <View style={styles.listItem} key={obj.id}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Clicked Image", obj)}
          >
            <Image
              style={styles.img}
              source={{
                uri: obj.links.download,
              }}
            />
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={styles.innerText}>Title: </Text>
              {obj.alt_description ? obj.alt_description : "No Title"}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.innerText}>Author: </Text>
              {obj.user.first_name} {obj.user.last_name}
            </Text>
          </View>
        </View>
      );
    });
  }

  return (
    <ScrollView style={styles.container}>
      {storeImages ? (
        imageObjectsArr
      ) : (
        <ActivityIndicator style={styles.indicator} size="large" />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 10,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  img: {
    width: 180,
    height: 120,
  },
  indicator: {
    marginTop: "50%",
  },
  innerText: {
    fontWeight: "bold",
  },
});

export default imageList;
