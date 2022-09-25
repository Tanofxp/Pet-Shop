import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Products = ({ navigation  }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Productos</Text>
            <Button 
                title="Detalles del Producto"
                onPress={() => navigation.navigate("Product")}
            />
        </View>
    )
};

export default Products;