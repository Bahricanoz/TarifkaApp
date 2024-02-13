import React from "react";
import { FlatList, ScrollView,Text } from "react-native";
import styles from './Details_Style'
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import Loading from "../../components/Loading";
import DetailCard from "../../components/DetailCard";

const Details = ({route}) =>{
    const mealName = route.params

    const { data, error, loading} = useFetch(`${Config.API_MEAL_DETAIL}${mealName}`)

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error></Error>
    }

    const renderItem = ({item}) => <DetailCard meal={item}/>
    return(
        <FlatList
            data={data.meals}
            keyExtractor={(item) => item.idMeal}
            renderItem={renderItem}
        />
    )
}

export default Details

