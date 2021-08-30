import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Header from "./Header";
import SearchTitle from "../Screens/SearchTitle";
import SearchAuthor from '../Screens/SearchAuthor';

const { Navigator, Screen } = createStackNavigator();

export default function HomeNavigator(props) {
    const {navigation} = props;
    return (
    <Navigator initialRouteName="Home" >
        <Screen 
            name="My Home" 
            component={Home}
            options={{headerShown: false}}
        />

        <Screen 
            name="SearchTitle"
            component={SearchTitle} 
            
            options={{
                title: 'Title Name',
                headerStyle: {
                    backgroundColor: "#10295B"
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: 'quicksand',
                },
                headerTitleAlign: 'center',
            }
            }
        />

        <Screen 
            name="SearchAuthor"
            component={SearchAuthor}
            

            options={{
                title: "Author's Name",
                headerStyle: {
                    backgroundColor: "#10295B"
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: 'quicksand',
                },
                headerTitleAlign: 'center',
                }
            }
        />
    </Navigator>
)}


