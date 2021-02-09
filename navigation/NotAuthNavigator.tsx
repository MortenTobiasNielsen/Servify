import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import StartScreen from "../screens/StartScreen";
import ChooseService from "../screens/user/ChooseService";
import ServiceDetails from "../screens/user/ServiceDetails";
import EstimatePrice from "../screens/user/EstimatePrice";

// User Navigation Type
type UserStackNavigatorParamList = {
  Start: undefined;
  ChooseService: undefined;
  ServiceDetails: undefined;
  EstimatePrice: undefined;
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
  "ChooseService"
>;

type ChooseServiceNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "ChooseService"
>;

export type ChooseServiceProps = {
  route: ChooseServiceScreenRouteProp;
  navigation: ChooseServiceNavigationProp;
};

// Service details screen props
type ServiceDetailsScreenRouteProp = RouteProp<
  UserStackNavigatorParamList,
  "ServiceDetails"
>;

type ServiceDetailsNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "ServiceDetails"
>;

export type ServiceDetailsProps = {
  route: ServiceDetailsScreenRouteProp;
  navigation: ServiceDetailsNavigationProp;
};

// Service details screen props
type EstimatePriceScreenRouteProp = RouteProp<
  UserStackNavigatorParamList,
  "ServiceDetails"
>;

type EstimatePriceNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "ServiceDetails"
>;

export type EstimatePriceProps = {
  route: EstimatePriceScreenRouteProp;
  navigation: EstimatePriceNavigationProp;
};

const UserStackNavigator = createStackNavigator<UserStackNavigatorParamList>();

const NotAuthNavigator = () => {
  return (
    <UserStackNavigator.Navigator>
      <UserStackNavigator.Screen name="Start" component={StartScreen} />
      <UserStackNavigator.Screen
        name="ChooseService"
        component={ChooseService}
      />
      <UserStackNavigator.Screen
        name="ServiceDetails"
        component={ServiceDetails}
      />
      <UserStackNavigator.Screen
        name="EstimatePrice"
        component={EstimatePrice}
      />
    </UserStackNavigator.Navigator>
  );
};

export default NotAuthNavigator;
