import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBarNew from '../components/home/SearchBarNew';
import Categories from "../components/home/Categories";
import BottomTabs from '../components/home/BottomTabs';
import RestaurantItem from "../components/home/RestaurantItem";
import { ScrollView } from 'react-native-gesture-handler';

import { Divider } from "react-native-elements";

export const business = [{
  "id": "Sa_qcnc7ZgzSOylf3plTRA",
  "alias": "c-level-san-diego",
  "name": "C Level",
  "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/rE2Ti2kPJTW_xv2FkW-8Lg/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/c-level-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 3499,
  "categories": [{
    "alias": "newamerican",
    "title": "American (New)"
  }, {
    "alias": "seafood",
    "title": "Seafood"
  }, {
    "alias": "steak",
    "title": "Steakhouses"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.7241827616904,
    "longitude": -117.188347987279
  },
  "transactions": [],
  "price": "$$",
  "location": {
    "address1": "880 Harbor Island Dr",
    "address2": "",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92101",
    "country": "US",
    "state": "CA",
    "display_address": ["880 Harbor Island Dr", "San Diego, CA 92101"]
  },
  "phone": "+16192986802",
  "display_phone": "(619) 298-6802",
  "distance": 8047.249566972773
}, {
  "id": "iyLfem8zE0fLWTf-4WdqaA",
  "alias": "steamy-piggy-san-diego-2",
  "name": "Steamy Piggy",
  "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/CVqqVnRmASxe9B2Oaa5fxg/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/steamy-piggy-san-diego-2?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 2734,
  "categories": [{
    "alias": "chinese",
    "title": "Chinese"
  }, {
    "alias": "asianfusion",
    "title": "Asian Fusion"
  }, {
    "alias": "ramen",
    "title": "Ramen"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.8256099801121,
    "longitude": -117.154518795069
  },
  "transactions": ["delivery", "pickup"],
  "price": "$$",
  "location": {
    "address1": "4681 Convoy St",
    "address2": "",
    "address3": null,
    "city": "San Diego",
    "zip_code": "92111",
    "country": "US",
    "state": "CA",
    "display_address": ["4681 Convoy St", "San Diego, CA 92111"]
  },
  "phone": "+18584920401",
  "display_phone": "(858) 492-0401",
  "distance": 3896.543638537019
}, {
  "id": "aY_z6z6at7wyoW7sFhf4bA",
  "alias": "cucina-urbana-san-diego-4",
  "name": "CUCINA urbana",
  "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/slDz6cm5w2kR9S2XbjngNQ/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/cucina-urbana-san-diego-4?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 4131,
  "categories": [{
    "alias": "italian",
    "title": "Italian"
  }, {
    "alias": "pizza",
    "title": "Pizza"
  }, {
    "alias": "wine_bars",
    "title": "Wine Bars"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.731246262774796,
    "longitude": -117.16009352882612
  },
  "transactions": ["delivery", "pickup"],
  "price": "$$",
  "location": {
    "address1": "505 Laurel St",
    "address2": "",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92101",
    "country": "US",
    "state": "CA",
    "display_address": ["505 Laurel St", "San Diego, CA 92101"]
  },
  "phone": "+16192392222",
  "display_phone": "(619) 239-2222",
  "distance": 6620.3218396033
}, {
  "id": "Ve1N_Y3lwtI4UYwDvUEtZg",
  "alias": "cross-street-san-diego",
  "name": "Cross Street",
  "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/6_qyHE810GL_ZSkmR118OQ/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/cross-street-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 1868,
  "categories": [{
    "alias": "korean",
    "title": "Korean"
  }, {
    "alias": "beerbar",
    "title": "Beer Bar"
  }, {
    "alias": "chicken_wings",
    "title": "Chicken Wings"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.820203,
    "longitude": -117.154722
  },
  "transactions": ["delivery", "pickup"],
  "price": "$$",
  "location": {
    "address1": "4403 Convoy St",
    "address2": "",
    "address3": null,
    "city": "San Diego",
    "zip_code": "92111",
    "country": "US",
    "state": "CA",
    "display_address": ["4403 Convoy St", "San Diego, CA 92111"]
  },
  "phone": "+18584306001",
  "display_phone": "(858) 430-6001",
  "distance": 3293.775226071546
}, {
  "id": "2xk5-PGE4PoYElkHrHqdHA",
  "alias": "wormwood-san-diego",
  "name": "Wormwood",
  "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/CoOLmKkFkRuv-qjpyRd8Cw/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/wormwood-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 20,
  "categories": [{
    "alias": "french",
    "title": "French"
  }, {
    "alias": "cocktailbars",
    "title": "Cocktail Bars"
  }],
  "rating": 5.0,
  "coordinates": {
    "latitude": 32.76247,
    "longitude": -117.12998
  },
  "transactions": [],
  "price": "$$",
  "location": {
    "address1": "4677 30th St",
    "address2": null,
    "address3": "",
    "city": "San Diego",
    "zip_code": "92116",
    "country": "US",
    "state": "CA",
    "display_address": ["4677 30th St", "San Diego, CA 92116"]
  },
  "phone": "+16199156706",
  "display_phone": "(619) 915-6706",
  "distance": 3851.403341560964
}, {
  "id": "IuX5vCDzmHzjbNi3wRD5Nw",
  "alias": "werewolf-san-diego",
  "name": "Werewolf",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/8DEQmOj6EVDhBd_GQGSixg/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/werewolf-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 4092,
  "categories": [{
    "alias": "bars",
    "title": "Bars"
  }, {
    "alias": "breakfast_brunch",
    "title": "Breakfast & Brunch"
  }, {
    "alias": "burgers",
    "title": "Burgers"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.711957844778865,
    "longitude": -117.16087715952452
  },
  "transactions": ["delivery"],
  "price": "$$",
  "location": {
    "address1": "627 Fourth Ave",
    "address2": null,
    "address3": "",
    "city": "San Diego",
    "zip_code": "92101",
    "country": "US",
    "state": "CA",
    "display_address": ["627 Fourth Ave", "San Diego, CA 92101"]
  },
  "phone": "+16192340094",
  "display_phone": "(619) 234-0094",
  "distance": 8764.255571925607
}, {
  "id": "_jLmYZ77ikTnEzUh6X5Qgg",
  "alias": "eastern-dynasty-san-diego-2",
  "name": "Eastern Dynasty",
  "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/UZFmzBkfcpOXLecXkC08yg/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/eastern-dynasty-san-diego-2?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 104,
  "categories": [{
    "alias": "cantonese",
    "title": "Cantonese"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.82665,
    "longitude": -117.15581
  },
  "transactions": [],
  "price": "$$",
  "location": {
    "address1": "4690 Convoy St",
    "address2": "B109",
    "address3": null,
    "city": "San Diego",
    "zip_code": "92111",
    "country": "US",
    "state": "CA",
    "display_address": ["4690 Convoy St", "B109", "San Diego, CA 92111"]
  },
  "phone": "+18588361168",
  "display_phone": "(858) 836-1168",
  "distance": 4017.8922054273908
}, {
  "id": "pTNcDnsNvEu9lFZbJmqw_g",
  "alias": "dumpling-inn-san-diego-6",
  "name": "Dumpling Inn",
  "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/PgquCTDVNYB2HPrcJ1z-mg/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/dumpling-inn-san-diego-6?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 3066,
  "categories": [{
    "alias": "chinese",
    "title": "Chinese"
  }, {
    "alias": "bars",
    "title": "Bars"
  }],
  "rating": 4.0,
  "coordinates": {
    "latitude": 32.824255,
    "longitude": -117.154314
  },
  "transactions": ["delivery"],
  "price": "$$",
  "location": {
    "address1": "4625 Convoy St",
    "address2": "",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92111",
    "country": "US",
    "state": "CA",
    "display_address": ["4625 Convoy St", "San Diego, CA 92111"]
  },
  "phone": "+18582689638",
  "display_phone": "(858) 268-9638",
  "distance": 3745.7263544682764
}, {
  "id": "a3yfBL2Nlm6Z6-1Yzl4ncw",
  "alias": "din-tai-fung-san-diego-3",
  "name": "Din Tai Fung",
  "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/UMHHQ2NXSwc4iO_nGj832Q/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/din-tai-fung-san-diego-3?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 3417,
  "categories": [{
    "alias": "taiwanese",
    "title": "Taiwanese"
  }, {
    "alias": "dimsum",
    "title": "Dim Sum"
  }, {
    "alias": "shanghainese",
    "title": "Shanghainese"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.872344,
    "longitude": -117.212553
  },
  "transactions": ["delivery", "pickup"],
  "price": "$$",
  "location": {
    "address1": "4301 La Jolla Village Dr",
    "address2": "Bldg P Unit 2000",
    "address3": null,
    "city": "San Diego",
    "zip_code": "92122",
    "country": "US",
    "state": "CA",
    "display_address": ["4301 La Jolla Village Dr", "Bldg P Unit 2000", "San Diego, CA 92122"]
  },
  "phone": "+18583755988",
  "display_phone": "(858) 375-5988",
  "distance": 10607.81727943139
}, {
  "id": "4DNTpzO26vDfLk99C4P4MQ",
  "alias": "havana-grill-san-diego",
  "name": "Havana Grill",
  "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/sJJ0qqLHEPvacQbvi7n2ww/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/havana-grill-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 1363,
  "categories": [{
    "alias": "cuban",
    "title": "Cuban"
  }, {
    "alias": "seafood",
    "title": "Seafood"
  }, {
    "alias": "sandwiches",
    "title": "Sandwiches"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.834598,
    "longitude": -117.173584754457
  },
  "transactions": ["delivery", "pickup"],
  "price": "$$",
  "location": {
    "address1": "5450 Clairemont Mesa Blvd",
    "address2": "Ste G",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92117",
    "country": "US",
    "state": "CA",
    "display_address": ["5450 Clairemont Mesa Blvd", "Ste G", "San Diego, CA 92117"]
  },
  "phone": "+18584306878",
  "display_phone": "(858) 430-6878",
  "distance": 5223.966745763293
}, {
  "id": "AS--bXkiFStoRkwoLqkJEg",
  "alias": "buds-louisiana-cafe-san-diego",
  "name": "Bud's Louisiana Cafe",
  "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JZxUzZxbbsxKbG1bK9Bqhg/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/buds-louisiana-cafe-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 2392,
  "categories": [{
    "alias": "cajun",
    "title": "Cajun/Creole"
  }, {
    "alias": "breakfast_brunch",
    "title": "Breakfast & Brunch"
  }, {
    "alias": "wine_bars",
    "title": "Wine Bars"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.821062910211,
    "longitude": -117.124669642923
  },
  "transactions": ["delivery"],
  "price": "$$",
  "location": {
    "address1": "4320 Viewridge Ave",
    "address2": "Ste A",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92123",
    "country": "US",
    "state": "CA",
    "display_address": ["4320 Viewridge Ave", "Ste A", "San Diego, CA 92123"]
  },
  "phone": "+18585732837",
  "display_phone": "(858) 573-2837",
  "distance": 4365.094267885721
}, {
  "id": "mbG2JAAQ33kKuO3PMPUObg",
  "alias": "ironside-fish-and-oyster-san-diego",
  "name": "Ironside Fish & Oyster",
  "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/szWt0qdpHNN01YK-G5mtWw/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/ironside-fish-and-oyster-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 4309,
  "categories": [{
    "alias": "seafood",
    "title": "Seafood"
  }, {
    "alias": "raw_food",
    "title": "Live/Raw Food"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.72267,
    "longitude": -117.16856
  },
  "transactions": ["delivery"],
  "price": "$$",
  "location": {
    "address1": "1654 India St",
    "address2": "",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92101",
    "country": "US",
    "state": "CA",
    "display_address": ["1654 India St", "San Diego, CA 92101"]
  },
  "phone": "+16192693033",
  "display_phone": "(619) 269-3033",
  "distance": 7667.801632500451
}, {
  "id": "7CjC7lj7bXvjPPRb_HqM3g",
  "alias": "ee-nami-tonkatsu-izakaya-san-diego",
  "name": "EE NAMI Tonkatsu Izakaya",
  "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/VBp_4kKkjFlQv1GkHaC21A/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/ee-nami-tonkatsu-izakaya-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 230,
  "categories": [{
    "alias": "izakaya",
    "title": "Izakaya"
  }, {
    "alias": "seafood",
    "title": "Seafood"
  }, {
    "alias": "cocktailbars",
    "title": "Cocktail Bars"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.835515,
    "longitude": -117.189242
  },
  "transactions": ["delivery", "pickup"],
  "price": "$$",
  "location": {
    "address1": "4706 Clairemont Mesa Blvd",
    "address2": null,
    "address3": "",
    "city": "San Diego",
    "zip_code": "92117",
    "country": "US",
    "state": "CA",
    "display_address": ["4706 Clairemont Mesa Blvd", "San Diego, CA 92117"]
  },
  "phone": "+18582466903",
  "display_phone": "(858) 246-6903",
  "distance": 5977.992750190915
}, {
  "id": "gh1r0PvTWoTpjcj2JW4c8w",
  "alias": "common-theory-san-diego-3",
  "name": "Common Theory",
  "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/u5S738CUnRNEYNYto12njg/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/common-theory-san-diego-3?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 1322,
  "categories": [{
    "alias": "gastropubs",
    "title": "Gastropubs"
  }, {
    "alias": "newamerican",
    "title": "American (New)"
  }, {
    "alias": "beerbar",
    "title": "Beer Bar"
  }],
  "rating": 4.0,
  "coordinates": {
    "latitude": 32.8293223613103,
    "longitude": -117.152758134918
  },
  "transactions": ["delivery"],
  "price": "$$",
  "location": {
    "address1": "4805 Convoy St",
    "address2": "",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92111",
    "country": "US",
    "state": "CA",
    "display_address": ["4805 Convoy St", "San Diego, CA 92111"]
  },
  "phone": "+16197806689",
  "display_phone": "(619) 780-6689",
  "distance": 4310.907679952882
}, {
  "id": "gADjT0GBotVBNRWgHyebdg",
  "alias": "tasty-noodle-house-san-diego",
  "name": "Tasty Noodle House",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/HmGDGzkhZNT0Ryb_mdxcxw/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/tasty-noodle-house-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 1170,
  "categories": [{
    "alias": "chinese",
    "title": "Chinese"
  }, {
    "alias": "noodles",
    "title": "Noodles"
  }, {
    "alias": "soup",
    "title": "Soup"
  }],
  "rating": 4.0,
  "coordinates": {
    "latitude": 32.8249206542969,
    "longitude": -117.155700683594
  },
  "transactions": ["delivery", "pickup"],
  "price": "$$",
  "location": {
    "address1": "4646 Convoy St",
    "address2": "Ste 110",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92111",
    "country": "US",
    "state": "CA",
    "display_address": ["4646 Convoy St", "Ste 110", "San Diego, CA 92111"]
  },
  "phone": "+18584306876",
  "display_phone": "(858) 430-6876",
  "distance": 3816.5306971354303
}, {
  "id": "OfjUGieDXyPB8jWa0pvehA",
  "alias": "homestyle-hawaiian-san-diego",
  "name": "Homestyle Hawaiian",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CGv32yBM01C2dUt-UL_LBA/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/homestyle-hawaiian-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 1835,
  "categories": [{
    "alias": "hawaiian",
    "title": "Hawaiian"
  }, {
    "alias": "salad",
    "title": "Salad"
  }, {
    "alias": "seafood",
    "title": "Seafood"
  }],
  "rating": 4.0,
  "coordinates": {
    "latitude": 32.801671968633,
    "longitude": -117.159088104705
  },
  "transactions": ["delivery"],
  "price": "$$",
  "location": {
    "address1": "7524 Mesa College Dr",
    "address2": "",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92111",
    "country": "US",
    "state": "CA",
    "display_address": ["7524 Mesa College Dr", "San Diego, CA 92111"]
  },
  "phone": "+18585715828",
  "display_phone": "(858) 571-5828",
  "distance": 1320.2097003677886
}, {
  "id": "X-PkyvYRNv3rRpykhq4avQ",
  "alias": "the-fire-spot-san-diego",
  "name": "The Fire Spot",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/z9KHISnFyUbNtv6CHFmIQQ/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/the-fire-spot-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 299,
  "categories": [{
    "alias": "bbq",
    "title": "Barbeque"
  }, {
    "alias": "chinese",
    "title": "Chinese"
  }, {
    "alias": "korean",
    "title": "Korean"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 32.824764,
    "longitude": -117.155865
  },
  "transactions": ["delivery"],
  "price": "$$",
  "location": {
    "address1": "4646 Convoy St",
    "address2": "Ste 108",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92111",
    "country": "US",
    "state": "CA",
    "display_address": ["4646 Convoy St", "Ste 108", "San Diego, CA 92111"]
  },
  "phone": "+18587374135",
  "display_phone": "(858) 737-4135",
  "distance": 3816.5306971354303
}, {
  "id": "PudSXGES4Xg2O1Q5Y0UWnw",
  "alias": "beach-house-grill-san-diego",
  "name": "Beach House Grill",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/-x0WlrjRMAKaH710uoAlwA/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/beach-house-grill-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 914,
  "categories": [{
    "alias": "bars",
    "title": "Bars"
  }, {
    "alias": "tradamerican",
    "title": "American (Traditional)"
  }, {
    "alias": "musicvenues",
    "title": "Music Venues"
  }],
  "rating": 3.5,
  "coordinates": {
    "latitude": 32.7705652980916,
    "longitude": -117.252706364557
  },
  "transactions": [],
  "price": "$$",
  "location": {
    "address1": "3125 Ocean Front Walk",
    "address2": "",
    "address3": "",
    "city": "San Diego",
    "zip_code": "92190",
    "country": "US",
    "state": "CA",
    "display_address": ["3125 Ocean Front Walk", "San Diego, CA 92190"]
  },
  "phone": "+18582289283",
  "display_phone": "(858) 228-9283",
  "distance": 9484.506136006361
}, {
  "id": "0qMYBzJUjXa8_MIm5mkjKA",
  "alias": "el-viej\u00f3n-seafood-san-diego",
  "name": "El Viej\u00f3n Seafood",
  "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/1p5RxMaXo8nI6TyQi1jiWQ/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/el-viej%C3%B3n-seafood-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 39,
  "categories": [{
    "alias": "seafood",
    "title": "Seafood"
  }],
  "rating": 5.0,
  "coordinates": {
    "latitude": 32.82443848417913,
    "longitude": -117.15478099999996
  },
  "transactions": ["delivery", "pickup"],
  "location": {
    "address1": "4619 Convoy St",
    "address2": "Ste A3",
    "address3": null,
    "city": "San Diego",
    "zip_code": "92111",
    "country": "US",
    "state": "CA",
    "display_address": ["4619 Convoy St", "Ste A3", "San Diego, CA 92111"]
  },
  "phone": "+18587379192",
  "display_phone": "(858) 737-9192",
  "distance": 3766.6312907295464
}, {
  "id": "h78sYKXRg-zVf6pVD4urUQ",
  "alias": "mikes-red-tacos-san-diego",
  "name": "Mike's Red Tacos",
  "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/bns6RD6Luh_N0b1Hwfw6Pg/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/mikes-red-tacos-san-diego?adjust_creative=HfjLecPSoEnpzJ4KT6NZLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HfjLecPSoEnpzJ4KT6NZLA",
  "review_count": 57,
  "categories": [{
    "alias": "tacos",
    "title": "Tacos"
  }, {
    "alias": "foodtrucks",
    "title": "Food Trucks"
  }],
  "rating": 5.0,
  "coordinates": {
    "latitude": 32.78663455672024,
    "longitude": -117.20599201810093
  },
  "transactions": [],
  "price": "$$",
  "location": {
    "address1": "2335 Morena Blvd",
    "address2": null,
    "address3": null,
    "city": "San Diego",
    "zip_code": "92110",
    "country": "US",
    "state": "CA",
    "display_address": ["2335 Morena Blvd", "San Diego, CA 92110"]
  },
  "phone": "",
  "display_phone": "",
  "distance": 4872.045821638958
}];

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

export default function Home({navigation}) {
  ////const [resturants, setresturants] = useState(localRestaurants);
  //const [resturants, setresturants] = useState([]);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [selectedCity, setSelectedCity] = useState("San Diego, CA");
  const [allResturants, setAllResturants] = useState(business);
  const [resturants, setresturants] = useState(allResturants.filter((resturant) => resturant.transactions.includes(activeTab.toLowerCase())));

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${selectedCity}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        'Content-Type': 'application/json'
      },
    };

    return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => {
      if(json["businesses"] !== undefined && json["businesses"].length > 0){
        setAllResturants(json.businesses);
        setresturants(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())));
      }
      else{
        setAllResturants([]);
        setresturants([]);
      }
    });
  };

  const filterResturantByType = () => {
    setresturants(allResturants.filter((business) => business.transactions.includes(activeTab.toLowerCase())));
  }

  useEffect(()=>{
    getRestaurantsFromYelp();
  }, [selectedCity])

  useEffect(()=>{
    filterResturantByType();
  }, [activeTab])

  return (
    <SafeAreaView style={styles.homecontainer}>
      <View style={styles.optionholder}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBarNew selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
      </View>
      <Divider width={1}/>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom: 10}}>
        <Categories />
        <RestaurantItem resturants={resturants} navigation={navigation}/>
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  optionholder: {
    backgroundColor: "white",
    padding: 15,
  }
});