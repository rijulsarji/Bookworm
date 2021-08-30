import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Button} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

export default function Header(props) {

    function pressHandler() {
        props.navigation.dispatch(DrawerActions.openDrawer());
        // console.log("pressed");
    }

    return (
        <View style={styles.container} >

            <Ionicons name="menu" size={36} color="black" style={styles.icon} onPress={pressHandler}/>
        
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: '100%', 
        width: Dimensions.get('window').width,
        fontFamily: 'style-script',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        marginLeft: -16,
    },
    icon: {
        position: 'absolute',
        left: 10,
    }
})