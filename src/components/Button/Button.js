import { TouchableOpacity,Text } from "react-native";
import React from "react";
import styles from './Button_Style'


const Button = ({text,onPress}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button