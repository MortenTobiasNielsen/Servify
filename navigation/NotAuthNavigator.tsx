import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../screens/StartScreen";
import ChooseService from "../screens/user/ChooseService";

const userStackNavigator = createStackNavigator();

const NotAuthNavigator = () => {
  return (
    <userStackNavigator.Navigator>
      <userStackNavigator.Screen name="Start" component={StartScreen} />
      <userStackNavigator.Screen
        name="ChooseService"
        component={ChooseService}
      />
    </userStackNavigator.Navigator>
  );
};

export default NotAuthNavigator;
