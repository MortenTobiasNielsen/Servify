import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import StartScreen from "../screens/StartScreen";
import ChooseService from "../screens/user/ChooseService";
import ServiceDetails from "../screens/user/ServiceDetails";

// User Navigation Type
type UserStackNavigatorParamList = {
  Start: undefined;
  ChooseService: undefined;
  ServiceDetails: undefined;
};

// Start screen props
type StartScreenRouteProp = RouteProp<UserStackNavigatorParamList, "Start">;

type StartScreenNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "Start"
>;

export type StartScreenProps = {
  route: StartScreenRouteProp;
  navigation: StartScreenNavigationProp;
};

// Choose service screen props
type ChooseServiceScreenRouteProp = RouteProp<
  UserStackNavigatorParamList,
  "Start"
>;

type ChooseServiceNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "Start"
>;

export type ChooseServiceProps = {
  route: ChooseServiceScreenRouteProp;
  navigation: ChooseServiceNavigationProp;
};

// Service details screen props
type ServiceDetailsScreenRouteProp = RouteProp<
  UserStackNavigatorParamList,
  "Start"
>;

type ServiceDetailsNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "Start"
>;

export type ServiceDetailsProps = {
  route: ServiceDetailsScreenRouteProp;
  navigation: ServiceDetailsNavigationProp;
};

const userStackNavigator = createStackNavigator<UserStackNavigatorParamList>();

const NotAuthNavigator = () => {
  return (
    <userStackNavigator.Navigator>
      <userStackNavigator.Screen name="Start" component={StartScreen} />
      <userStackNavigator.Screen
        name="ChooseService"
        component={ChooseService}
      />
      <userStackNavigator.Screen
        name="ServiceDetails"
        component={ServiceDetails}
      />
    </userStackNavigator.Navigator>
  );
};

export default NotAuthNavigator;
