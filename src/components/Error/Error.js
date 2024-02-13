import React from "react";
import LottieView from "lottie-react-native";
import { View,StyleSheet } from "react-native";

const Error = () =>{
    return(
        <View style={style.container}>
            <LottieView
            source={require("..//..//assets/error.json")}
            style= {style.animasyon}
            autoPlay
        />
        </View>
        
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#ff9e12",
    },
    animasyon : {
        width: "50%",
         height: "50%"
    }
})


export default Error