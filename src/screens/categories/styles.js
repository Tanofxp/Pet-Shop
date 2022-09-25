import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start", 
    },
    title: {
        marginVertical:20,
        marginBottom: 50,
        fontFamily: 'Lato-Bold',
        fontSize:40,
    },
    categoriesContainer:{
        
        flexDirection: "row",
    },
    categories:{
        width:200,
        height:200,
        margin:3,
        color:'#ffff',
        backgroundColor:'#7d1bb2',
    },

})