import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HeaderButton = (props) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}>
      <Text style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default function HeaderTabs(props) {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text={"Delivery"} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HeaderButton text={"Pickup"} activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flexDirection: "row", alignSelf: "center"
    /*flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {

  }
});
*/