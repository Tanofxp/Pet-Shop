import React from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <View style={styles.categoriesContainer}>
                <View style={styles.categories}>
                    <Button 
                        title="Alimento"
                        color={'#470f65'}
                        onPress={() => navigation.navigate("Products")}
                    />
                    <Image
                        source={{uri: "https://pets-corner.co.uk/wp-content/uploads/2020/05/Raw-Pet-Food-Diet.jpg"}}
                        style={{width: 150, height: 150, marginStart:20,marginTop:8, borderRadius:50,}}
                    />
                </View>
                <View style={styles.categories}>
                    <Button 
                        title="Paseo"
                        color={'#470f65'}
                        onPress={() => navigation.navigate("Products")}
                    />
                    <Image
                        source={{uri: "https://http2.mlstatic.com/D_NQ_NP_2X_656995-MLA45315887434_032021-F.webp"}}
                        style={{width: 150, height: 150, marginStart:20,marginTop:8, borderRadius:50,}}
                    />
                    {/* // */}
                </View>
                </View>
                <View style={styles.categoriesContainer}>
                <View style={styles.categories}>
                    <Button 
                        title="Accesorios"
                        color={'#470f65'}
                        onPress={() => navigation.navigate("Products")}
                    />
                    <Image
                        source={{uri: "https://pyxis.nymag.com/v1/imgs/cfe/0c6/9e86db4238775a4d667aecb95a0ba01f58-astronaut.rhorizontal.w600.jpg"}}
                        style={{width: 150, height: 150, marginStart:25,marginTop:8, borderRadius:50,}}
                    />
                </View>
                <View style={styles.categories}>
                    <Button 
                        title="Estetica"
                        color={'#470f65'}
                        onPress={() => navigation.navigate("Products")}
                    />
                    <Image
                        source={{uri: "https://http2.mlstatic.com/D_NQ_NP_730672-CBT51330879977_082022-W.jpg"}}
                        style={{width: 150, height: 150, marginStart:20, borderRadius:50,marginTop:8,}}
                    />   
                </View>
            </View>
        </View>
    )
};

export default Categories;