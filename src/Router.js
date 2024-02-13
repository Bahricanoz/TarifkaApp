import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Details from "./pages/Details";


const Stack = createNativeStackNavigator();

const Router = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign : "center", headerTintColor  :"#ff9e12"}}>
                <Stack.Screen name="Categories" component={Categories}></Stack.Screen>
                <Stack.Screen name="Meals" component={Meals}></Stack.Screen>
                <Stack.Screen name="Details" component={Details}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router