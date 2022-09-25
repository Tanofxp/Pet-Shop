import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Start, Categories, Products, Product } from "../screens";

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}

export default ShopNavigator;