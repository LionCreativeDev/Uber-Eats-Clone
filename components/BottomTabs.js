import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const icons = [{
    "name": "home",
    "text": "Home"
},{
    "name": "search",
    "text": "Browse"
},{
    "name": "shopping-bag",
    "text": "Grocery"
},{
    "name": "receipt",
    "text": "Order"
},{
    "name": "user",
    "text": "Account"
}];

const Icons = (props) => (
    <TouchableOpacity onPress={()=>{alert(`you pressed ${props.text}`)}}>
        <View>
            <FontAwesome5 name={props.name} size={20} style={{ marginBottom: 3, alignSelf: "center" }} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)

export default function BottomTabs() {
    return (
        <View style={{flexDirection: "row", justifyContent: 'space-between', padding: 10, backgroundColor: "#fff"}}>
            {/* <View style={{ flexDirection: "column", alignItems: "center" }}>
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
            </View> */}

            {icons.map((icon, index) => (
                //console.log("icon===>", icon);
                <Icons name={icon.name} text={icon.text} key={index} />
            ))}
            
            {/* <Icons name="home" text="Home"/>
            <Icons name="search" text="Browse"/>
            <Icons name="shopping-bag" text="Grocery"/>
            <Icons name="receipt" text="Order"/>
            <Icons name="user" text="Account"/> */}
        </View>
    )
}