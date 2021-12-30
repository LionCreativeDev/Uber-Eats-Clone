import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const searchResults = [
  {
    "description": "Chicago, IL, USA",
    "id": "53eeb015d61056c54245a909c79862532fc953ad",
    "place_id": "ChIJ7cv00DwsDogRAMDACa2m4K8",
  },
  {
    "description": "China",
    "id": "10bfe2265f06933baf8c2f1e35bf3bf132d74377",
    "place_id": "ChIJwULG5WSOUDERbzafNHyqHZU",
  },
  {
    "description": "Chihuahua, Mexico",
    "id": "26f4ee675aa61f33dd0ffc296b582baf2e08fa3e",
    "place_id": "ChIJM0BIXZ1E6oYRex3dBqen8bc",
  },
  {
    "description": "Chile",
    "id": "c33bb522167791f4bf271ef9151c1d13a1dd1092",
    "place_id": "ChIJL68lBEHFYpYRHbkCERPhBQU",
  }
];

export default function SearchBarNew(props) {
  const [search, setSearch] = useState();
  const [result, setResults] = useState();
  const [showResults, setshowResults] = useState(false);

  //console.log("this is search==>", search);
  // console.log("this is result==>", result);

  const handleSelection = (item) =>{
    setSearch(item.formatted);
    setshowResults(false);
    props.setSelected(item.formatted);
  }

  const getSearchSuggestions = async (text) => {
    setSearch(text);

    if (text !== '') {
      let temp = [];
      fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&apiKey=28cbce92d6654ceabb1cb7a55728a90c`).then((res) => res.json()).then((json) => {
        //console.log("result==>", json["features"]);

        setshowResults(false);
        setResults([]);

        if (json["features"].length > 0) {
          json["features"].map((feature) => {
            //console.log(feature["properties"]["formatted"]);
            temp.push({ "city": feature["properties"]["city"], "county": feature["properties"]["county"], "country": feature["properties"]["country"], "formatted": feature["properties"]["formatted"] })
          })
          setshowResults(true);
          setResults(temp);
        }
      });
    }
  };
  return (
    <>
      <View style={{ marginTop: 10, flexDirection: "row", alignContent: 'space-between', backgroundColor: "#eee", padding: 10, borderRadius: 30 }}>
        <View style={{ marginLeft: 5 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>
        {/* <TextInput style={styles.input} onChangeText={onChangeText} value={text} /> */}
        <TextInput style={{ borderRadius: 25, width: "100%", paddingLeft: 10 }} value={search} onChangeText={(text) => { getSearchSuggestions(text) }} showSoftInputOnFocus={true} />
        <View style={{ flexDirection: "row", backgroundColor: "white", padding: 6, borderRadius: 30, alignItems: "center", marginLeft: 5, marginRight: 5 }}>
          <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
          <Text>Search</Text>
        </View>
      </View>
      {showResults && (
        <FlatList
          data={result}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: '100%',
                  justifyContent: 'space-around',
                  // height: 40,
                  paddingVertical: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  // paddingLeft: 15,
                }}
                onPress={() => handleSelection(item)}>
                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 5, marginRight: 5 }}>
                  <Ionicons name="location-sharp" size={24} style={{ paddingRight: 5 }} />
                  <Text style={{ fontWeight: 500 }}>{item.formatted}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.formatted}
          style={{
            width: "90%",
            marginLeft: "5%",
            // height: "30%",
            // backgroundColor: '#eee',
            //   position: 'absolute',
            //   top: 65,
          }}
        />)
      }
    </>
  )
}