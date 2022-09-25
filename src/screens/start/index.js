import React from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "./styles";

const Start = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenidos al Pet Shop</Text>
            <View>
                <Image
                source={{uri: "https://st2.depositphotos.com/5020929/12032/v/450/depositphotos_120326762-stock-illustration-cute-flat-style-pet-store.jpg"}}
                style={{width: 300, height: 300, marginBottom:30, borderRadius:50,}}
                />
            </View>
            <View>
                <Button 
                    title="Ver Categorias"
                    onPress={() => navigation.navigate("Categories")}
                />
            </View>
        </View>
    )
};

export default Start;