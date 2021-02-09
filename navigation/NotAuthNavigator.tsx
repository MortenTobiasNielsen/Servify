import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

import StartScreen from "../screens/StartScreen";
import ChooseService from "../screens/user/ChooseService";
import ServiceDetails from "../screens/user/ServiceDetails";
import EstimatePrice from "../screens/user/EstimatePrice";

import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

// User stack navigation type
type UserStackNavigatorParamList = {
  Start: undefined;
  ChooseService: undefined;
  ServiceDetails: undefined;
  EstimatePrice: undefined;
};

// User tabs navigation type
type TabNavigatorParamList = {
  Home: UserStackNavigatorParamList;
  Login: undefined;
  Register: undefined;
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

const NotAuthStackNavigator = () => {
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

const NotAuthLoginStackNavigator = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <NotAuthLoginStackNavigator.Navigator>
      <NotAuthLoginStackNavigator.Screen name="Login" component={Login} />
    </NotAuthLoginStackNavigator.Navigator>
  );
};

const NotAuthRegisterStackNavigator = createStackNavigator();

const RegisterStackNavigator = () => {
  return (
    <NotAuthRegisterStackNavigator.Navigator>
      <NotAuthRegisterStackNavigator.Screen
        name="Register"
        component={Register}
      />
    </NotAuthRegisterStackNavigator.Navigator>
  );
};

const TabNavigator = createBottomTabNavigator<TabNavigatorParamList>();

const NotAuthTabNavigation = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="Home" component={NotAuthStackNavigator} />
      <TabNavigator.Screen name="Login" component={LoginStackNavigator} />
      <TabNavigator.Screen name="Register" component={RegisterStackNavigator} />
    </TabNavigator.Navigator>
  );
};

export default NotAuthTabNavigation;
