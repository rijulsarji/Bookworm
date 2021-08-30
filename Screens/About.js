import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function About({navigation}) {

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
          color="#196619"
          onPress={pressHandler}
          style={styles.menuIcon}
        />

        <View style={styles.imageContainer}>
          <Image source={require("../Assets/AboutBG.png")} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>ABOUT THE APP</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.paragraph}>
            This is an app for all the people who want to know about a specific
            book but don't have the time to research from various websites. This
            app alone has enough information to let you know whatever you need
            to. It is connected with Google Books API, so you never have to
            worry about the credibility of the information provided. You can
            just search for the book without any hassle. Don't remember the book
            but remember the author's name? Well, you can search using just the
            author's name as well! After installing this app, you'll never have
            to worry about searching for a book in your life! Hope you enjoy the
            app! Any and every feedback is most welcomed. {"\n\n"}Link to Google
            Form for your reviews:{" "}
          </Text>
          <TouchableOpacity
            style={{ width: "35%" }}
            onPress={() =>
              Linking.openURL("https://forms.gle/ex3vqTemkpe9j9eQ8")
            }
          >
            <Text style={{ ...styles.paragraph, color: "#1e50ae" }}>
              Click Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    marginTop: -295,
    marginLeft: -100,
  },
  titleContainer: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: 'playfair-display',
    textAlign: 'center',
    letterSpacing: 1,
  },
  
  contentContainer: {
    marginTop: 15,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 30,
  }, 
  paragraph: {
    fontSize: 16,
    fontFamily: 'quicksand',
    lineHeight: 25,
  },
  menuIcon: {
      position: 'absolute',
      left: 15,
      top: 15,
      zIndex: 2,
  }
})