import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../Screens/About";
import Header from "./Header";

const { Navigator, Screen } = createStackNavigator();

export default function AboutNavigator(props) {
    const {navigation} = props;
    return (
    <Navigator initialRouteName="Home">
        <Screen 
            name="About" 
            component={About}
            options={{headerShown: false}}
        />

    </Navigator>
)}