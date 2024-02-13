import { View ,Text, FlatList} from "react-native";
import React from "react";
import styles from './Meals_Style'
import Config from "react-native-config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import MealsCard from "../../components/MealsCard";

const Meals = ({route, navigation}) =>{
    const categoryName = route.params

    const { data , loading, error} = useFetch(`${Config.API_MEAL}${categoryName}`)

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }
    
    const renderItem = ({item}) => <MealsCard meals={item} onPress={()=> navigation.navigate("Details", item.strMeal)}/>
    return(
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Meals;
