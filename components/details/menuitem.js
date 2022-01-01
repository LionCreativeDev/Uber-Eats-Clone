import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Divider } from "react-native-elements";

export default function MenuItem({foods}) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={{ flex: 1, flexDirection: 'row', margin: 10, justifyContent: "space-between" }}>
                        <View style={{ width: 240, justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 19, fontWeight: "600" }}>{food.title}</Text>
                            <Text>{food.description}</Text>
                            <Text>{food.price}</Text>
                        </View>
                        <Image source={{ uri: food.image }} style={{ width: 100, height: 100, borderRadius: 10 }}></Image>
                    </View>
                    <Divider width={0.5} />
                </View>
            ))}
        </ScrollView>
    )
}
