import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Resources from "../Screens/Resources";
import Header from "./Header";

const { Navigator, Screen } = createStackNavigator();

export default function ResourceNavigator(props) {
    const {navigation} = props;
    return (
    <Navigator initialRouteName="Home">
        <Screen 
            name="Resources" 
            component={Resources}
            options={{headerShown: false}}        
        />

    </Navigator>
)}