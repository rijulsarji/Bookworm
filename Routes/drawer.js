import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutNavigator from "./aboutStack";
import HomeNavigator from "./homeStack";
import ResourceNavigator from './resourceStack'
import React from "react";

const RootDrawContainer = createDrawerNavigator();

export const Navigator = () => {
    return (
        <NavigationContainer>
            <RootDrawContainer.Navigator
                screenOptions={{
                    drawerStyle: {backgroundColor: "#10295B", width: '65%'}, //drawer style
                    drawerActiveTintColor: "white", //active screen option text style
                    drawerActiveBackgroundColor: "#153B84", //active screen option background color 
                    drawerInactiveTintColor: "white", //inactive screen option text style
                    drawerItemStyle: {marginTop: 25}, //inactive screen option background color
                    drawerLabelStyle: {fontSize: 20}, // drawer font edits
                    drawerType: 'front', //what should happen to content when drawer opens
                    swipeEdgeWidth: 100, //distance from edge that activates swipe gesture
                    headerShown: false
                    }}
            >
                <RootDrawContainer.Screen name="Home" component={HomeNavigator} />
                <RootDrawContainer.Screen name="navAbout" component={AboutNavigator} options={{title: 'About The App'}}/>
                <RootDrawContainer.Screen name="Resources Used" component={ResourceNavigator} />
            </RootDrawContainer.Navigator>
        </NavigationContainer>
    )
}