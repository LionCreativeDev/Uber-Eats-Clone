import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";
import { ScrollView } from 'react-native-gesture-handler';

// export const localRestaurants = [
//   {
//       name: "Beachside Bar",
//       image_url:
//           "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
//       categories: ["Cafe", "Bar"],
//       price: "$$",
//       reviews: 1244,
//       rating: 4.5,
//   },
//   {
//       name: "Benihana",
//       image_url:
//           "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//       categories: ["Cafe", "Bar"],
//       price: "$$",
//       reviews: 1244,
//       rating: 3.7,
//   },
//   {
//       name: "India's Grill",
//       image_url:
//           "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//       categories: ["Indian", "Bar"],
//       price: "$$",
//       reviews: 700,
//       rating: 4.9,
//   },
// ];

//My Yelp Api Key
const YELP_API_KEY = "SZjlbAkznak-y7dD0oqcBwYNY5o3ca-N8jdXhF_yJdjtW5BP2CC7VT6OQneaAML1EF_Usxm846k3-khmviLYGuFoBeHL_bZ4WvVosvHbTqs9ybX83I495lAjcfy3XnYx";

export default function Home() {
  //const [resturants, setresturants] = useState(localRestaurants);
  const [resturants, setresturants] = useState([]);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        'Content-Type': 'application/json'
      },
    };

    return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setresturants(json.businesses));
  };

  useEffect(()=>{
    getRestaurantsFromYelp();
  }, [])

  return (
    <SafeAreaView style={styles.homecontainer}>
      <View style={styles.optionholder}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem resturants={resturants}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: '#eee',
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  optionholder: {
    backgroundColor: "white",
    padding: 15,
  }
});