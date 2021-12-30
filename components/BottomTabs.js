import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function BottomTabs(props) {
    return (
        <View style={{flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 10, padding: 10}}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text>Image</Text>
                <Text>Text</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text>Image</Text>
                <Text>Text</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text>Image</Text>
                <Text>Text</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text>Image</Text>
                <Text>Text</Text>
            </View>
        </View>
    )
}