import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () =>{
    return(
        <LottieView
         source={require("../../assets/loading.json")}
         style={{width: "100%", height: "100%",backgroundColor :"#ff9e12"}}
        autoPlay
        />
    )
}

export default Loading;