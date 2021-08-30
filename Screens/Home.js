import React from 'react';
import { StyleSheet, View, Text, Button, Image, ImageBackground, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";


export default function Home({ navigation }) {

    function pressHandler() {
        navigation.dispatch(DrawerActions.openDrawer());
      // console.log("pressed");
    }


    return (
        <View style={styles.container}>
            <Image style={styles.bgImage} source={require('../Assets/HomeBG.png')} />

            <View style={styles.textContainer}>

                <Text style={styles.titleText}>BOOKZILLA</Text>

            </View>

            <MaterialIcons name="menu" size={42} color="black" onPress={pressHandler} style={styles.menuIcon} />

            <View>
                        {/* TODO: Add button onclick */}
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SearchTitle')} >
                            <Text style={styles.button}>Search Using Book's Name</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SearchAuthor')} >
                            <Text style={styles.button}>Search Using Author's Name</Text>
                        </TouchableOpacity>
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        width: Dimensions.get("window").width,
        marginTop: -120,
        
    },
    textContainer: {
        alignItems: 'center',
        top: -190,
    },
    titleText: {
        position: 'absolute',   
        fontSize: 35,
        fontFamily: 'playfair-display',
        letterSpacing: 3, 
    },
    buttonContainer: {
        padding: 30,
        backgroundColor: '#153B84',
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '82%',
        borderRadius: 8,

    },
    button: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    menuIcon: {
        position: 'absolute',
        left: 15,
        top: 15,
    }
})