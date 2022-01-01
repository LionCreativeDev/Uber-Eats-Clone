import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// export const localRestaurants = [
//     {
//         name: "Beachside Bar",
//         image_url:
//             "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
//         categories: ["Cafe", "Bar"],
//         price: "$$",
//         reviews: 1244,
//         rating: 4.5,
//     },
//     {
//         name: "Benihana",
//         image_url:
//             "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//         categories: ["Cafe", "Bar"],
//         price: "$$",
//         reviews: 1244,
//         rating: 3.7,
//     },
//     {
//         name: "India's Grill",
//         image_url:
//             "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//         categories: ["Indian", "Bar"],
//         price: "$$",
//         reviews: 700,
//         rating: 4.9,
//     },
// ];

const ItemImage = ({imageurl}) => (
    <>
        <Image source={{ uri: imageurl }} style={{ width: "100%", height: 180 }}></Image>
        <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color={"#fff"}></MaterialCommunityIcons>
        </TouchableOpacity>
    </>
)

const ItemDetails = ({itemname, estimatedtime, rating}) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{itemname}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>{estimatedtime}</Text>
        </View>
        <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15, }}>
            <Text style={{fontWeight: "bold"}}>{rating}</Text>
        </View>
    </View>
)

export default function RestaurantItem({navigation, resturants, ...props}) {
    return (
        <>
            {resturants.length > 0 && resturants.map((restaurant, index) => (
                 /*style={{marginBottom: 5}}*/
                <TouchableOpacity activeOpacity={1} key={index} onPress={()=>{navigation.navigate("Details", restaurant)}}>
                    <View style={styles.card}>
                        <ItemImage imageurl={restaurant.image_url}/>
                        {/* <Text>Restaurant Item</Text> */}
                        <ItemDetails itemname={restaurant.name} estimatedtime={"35-45 - min"} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        // padding: 10,
        // marginTop: 10,
        // borderRadius: 15,
        // backgroundColor: "#fff"
        marginTop: 10, 
        marginHorizontal: 5,
        padding: 10, 
        backgroundColor: "white"
    }
});