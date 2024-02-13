import React from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import styles from './Category_Card_Style'

const Category_Card = ({category,onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri : category.strCategoryThumb}}
                />
                <Text style={styles.text}>{category.strCategory}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Category_Card