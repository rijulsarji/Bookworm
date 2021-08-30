import React from 'react';
import {StyleSheet, View, Text, Image, Linking, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Resources({navigation}) {

  function pressHandler() {
    navigation.dispatch(DrawerActions.openDrawer());
    // console.log("pressed");
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <MaterialIcons
          name="menu"
          size={42}
          color="white"
          onPress={pressHandler}
          style={styles.menuIcon}
        />

        <View style={styles.imageContainer}>
          <Image
            source={require("../Assets/ResourcesBG.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>RESOURCES USED</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.paragraph}>
            I have made this project using several sources, and as a token of
            thanks, i would like to mention them here in this page. If any of
            the viewers would like to access the resources, just tap the link,
            it will direct you to the website/documentation of the resources.
          </Text>

          <Text style={styles.heading}> API Used </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://developers.google.com/books/docs/overview?hl=en"
              )
            }
            style={{ width: "45%" }}
          >
            <Text
              style={{
                ...styles.paragraph,
                color: "#009933",
                fontWeight: "bold",
              }}
            >
              {" "}
              Google Books Api{" "}
            </Text>
          </TouchableOpacity>

          <Text style={styles.heading}> Fonts Used </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://fonts.google.com/")}
            style={{ width: "35%" }}
          >
            <Text
              style={{
                ...styles.paragraph,
                color: "#b30000",
                fontWeight: "bold",
              }}
            >
              {" "}
              Google Fonts{" "}
            </Text>
          </TouchableOpacity>

          <Text style={styles.heading}> Images and Backgrounds </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.canva.com/")}
            style={{ width: "20%" }}
          >
            <Text
              style={{
                ...styles.paragraph,
                color: "#1e50ae",
                fontWeight: "bold",
              }}
            >
              {" "}
              Canva{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    marginTop: -290,
  },
  titleContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: "playfair-display",
    textAlign: "center",
    letterSpacing: 1,
  },
  contentContainer: {
    marginTop: 15,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 30,
  },
  heading: {
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: "quicksand",
    lineHeight: 25,
  },
  menuIcon: {
    position: "absolute",
    left: 15,
    top: 15,
    zIndex: 2,
  },
});