import * as React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

import Home from "./screens/home";
import Details from "./screens/details";

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function App() {
  return (
    /**<View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
    </View>**/
    // <Home />
    <Details />
  );
}
