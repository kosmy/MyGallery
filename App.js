import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageList from "./src/components/ImageList";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./src/store/reducer";
import thunk from "redux-thunk";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ClickedImage from "./src/components/ClickedImage";

const store = createStore(reducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Image List">
          <Stack.Screen name="Image List" component={ImageList} />
          <Stack.Screen name="Clicked Image" component={ClickedImage} />
        </Stack.Navigator>
        <View style={styles.container}>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
