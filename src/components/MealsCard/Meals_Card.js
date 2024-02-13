import React from "react";
import { View,Text,Image, TouchableOpacity} from "react-native";
import styles from './Meals_Card_Style'

const Meals_Card = ({meals, onPress}) =>{
    const text = meals.strMeal.length < 22 ?  meals.strMeal :`${meals.strMeal.slice(0,22)}...`
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: meals.strMealThumb}}
                />
                <View style={styles.text_position}>
                    <Text style={styles.text}>{text}</Text>
                </View>
             </View>
        </TouchableOpacity>
    )
}

export default Meals_Card