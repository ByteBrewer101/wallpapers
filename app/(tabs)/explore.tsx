import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../Home";
import Liked from "../Liked";
import Purchased from "../Purchased";

const Tab = createMaterialTopTabNavigator();



export default function Explore() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Purchased" component={Purchased}  />
    </Tab.Navigator>
  );
}


