import React from "react";
import {  Image, Text, View ,Linking} from "react-native";
import styles from './Detail_Card_Style'
import Button from "../Button";


const Detail_Card = ({meal}) =>{

    const text = "Watch on Youtube";

    const handleLinking = (url) =>{
        Linking.openURL(url)
    }
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri : meal.strMealThumb}}
            />
            <View>
                <View style={styles.text_header}>
                    <Text style={styles.text_Meal}>{meal.strMeal}</Text>
                    <Text style={styles.text_Area}>{meal.strArea}</Text>
                </View>
                <Text style={styles.text_description}>{meal.strInstructions}</Text>
            </View>
            <View style={styles.buton_container}>
                <Button text={text} onPress={() =>handleLinking(meal.strYoutube)}/>
            </View>
        </View>
    )
}

export default Detail_Card