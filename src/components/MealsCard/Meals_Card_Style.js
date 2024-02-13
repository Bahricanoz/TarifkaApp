import { StyleSheet, Dimensions } from "react-native";

const widthOfScreen = Dimensions.get('screen').width;
const heightOfScreen = Dimensions.get('screen').height;

export default StyleSheet.create({
    container : {
        margin : 10,
    },
    image : {
        height : heightOfScreen/ 3,
        width :  widthOfScreen / 1.05,
        borderRadius : 10,
        resizeMode :  "cover",
        borderRadius : 20,
    },
    text : {
        color : "#fff",
        textAlign : "right",
        fontSize : 30,
        fontWeight : "bold", 
        padding : 5,
    },
    text_position : {
        position : "absolute",
        backgroundColor: 'rgba(0,0,0,0.5)',
        bottom  : 0,
        right : 0,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        width : "100%",  
    }
})