import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

/*const HeaderButton = (props) => {
  return ()
}*/

export default function SearchBar(props) {
  /*const [activeTab, setActiveTab] = useState("Delivery");*/
  
  return (
    <View style={{marginTop: 10, flexDirection: "row"}}>
      <GooglePlacesAutocomplete placeholder="search" styles={{
        textInput: 
        {
          backgroundColor: "#eee", 
          borderRadius: 20, 
          fontWeight: 700, 
          marginTop: 7
        }, 
        textInputContainer:{
          backgroundColor: "#eee", 
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          paddingRight: 10,
          // marginRight: 10
        }
        }} 
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={()=> (
          <View style={{flexDirection: "row", backgroundColor: "white", padding: 6, borderRadius: 30, alignItems: "center", marginLeft: 5, marginRight: 10}}>
            <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
            <Text>Search</Text>
          </View>
        )}
        />
    </View>
  );
}