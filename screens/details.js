import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Divider } from "react-native-elements";
import About from '../components/details/about';

export default function Details(){
    return(
        <View>
            <About />
            <Divider width={1}/>
            {/* <Text>Details Screen</Text> */}
        </View>
    )
}