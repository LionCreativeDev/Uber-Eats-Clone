import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';

export default function About({resturantImage, resturantTitle, resturantDescription}){
    return(
        // // style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25, backgroundColor: "#eee" }}
        // <View>
        //     <Image source={{ uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-pizza-index-1591135484.jpg?crop=0.830xw:0.391xh;0.170xw,0.196xh&resize=640:*" }} style={{ width: "100%", height: 180 }}></Image>            
        //     <View style={{paddingVertical: 10}}>
        //         {/* <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 10, color: "#000000aa" }}>Recipe Name Goes Here</Text> */}
        //         <Text style={{ fontSize: 24, fontWeight: '600', marginTop: 10, marginHorizontal: 15 }}>Farmhouse kitchen Thai Cuisine</Text>
        //         <View style={{ flexDirection: "row" }}>
        //             <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>Thai</Text>
        //             <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>Comfort Food</Text>
        //             <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>$$</Text>
        //             <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>4</Text>
        //             <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>100+</Text>
        //         </View>
        //     </View>
        // </View>
        // // <Text>About Component</Text>

        <View>
            <Image source={{ uri: resturantImage }} style={{ width: "100%", height: 180 }}></Image>            
            <View style={{paddingVertical: 10}}>
                {/* <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 10, color: "#000000aa" }}>Recipe Name Goes Here</Text> */}
                <Text style={{ fontSize: 24, fontWeight: '600', marginTop: 10, marginHorizontal: 15 }}>{resturantTitle}</Text>
                <Text style={{ fontSize: 15.5, fontWeight: "500", marginTop: 10, marginHorizontal: 15, color: "#000000aa" }}>{resturantDescription}</Text>
            </View>
        </View>
    )
}