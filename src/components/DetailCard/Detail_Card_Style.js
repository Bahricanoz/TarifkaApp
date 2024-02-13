import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        flex : 1,
    },
    image : {
        height : 250,
        width : "100%",
        resizeMode : "cover"
    },
    text_Meal : {
        fontSize : 30,
        fontWeight : "bold",
        color : "#81172b"
    },
    text_Area : {
        color : "#81172b",
        fontSize : 20,
        fontWeight : "bold"
    },
    text_header : {
        padding : 10,
        borderBottomWidth : 1,
        borderBottomColor : "gray"
    },
    text_description : {
        padding : 10,
        color : "#000",
        fontSize : 16,
    },
    buton_container : {
        padding : 10,
    }
})