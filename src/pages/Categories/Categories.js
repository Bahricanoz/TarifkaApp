import { View,Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from './Categories_Styles'
import Config from "react-native-config";
import axios from "axios";
import CategoryCard from "../../components/CategoryCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";


const Categories = ({navigation}) =>{
    const { data, loading , error} = useFetch(Config.API_CATEGORY)

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }
    const renderItem = ({item}) => <CategoryCard category={item} onPress={ () => navigation.navigate("Meals", item.strCategory)}/>

    return(
        <View style={styles.container}>
        
            <FlatList
                data={data.categories}
                keyExtractor={(item) => item.idCategory}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Categories