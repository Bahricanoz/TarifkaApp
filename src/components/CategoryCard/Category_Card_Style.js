import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        flexDirection : "row",
       alignItems : "center",
        backgroundColor : "#fffaf2",
        margin : 10,
        borderTopLeftRadius : 50,
        borderBottomLeftRadius : 50,
    },
    image : {
        width : 100,
        height : 100,
        resizeMode : "contain",
        backgroundColor :"#fff",
        borderRadius : 50,
    },
    text : {
        paddingLeft : 10, 
        fontSize : 20,
        fontWeight : "bold",
        color : "#000",
    }
})