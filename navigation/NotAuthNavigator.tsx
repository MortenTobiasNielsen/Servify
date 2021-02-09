import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import StartScreen from "../screens/StartScreen";
import ChooseService from "../screens/user/ChooseService";
import ServiceDetails from "../screens/user/ServiceDetails";
import ChooseServiceProvider from "../screens/user/ChooseServiceProvider";
import ServiceProviderDetails from "../screens/user/ServiceProviderDetails";

import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

// User stack navigation type
type UserStackNavigatorParamList = {
  "Start Side": undefined;
  "Find Service": undefined;
  "Service Detaljer": undefined;
  "Vælg Service Udbyder": undefined;
  "Udbyder Detaljer": undefined;
};

// User tabs navigation type
type TabNavigatorParamList = {
  "Start Side": UserStackNavigatorParamList;
  "Log ind": undefined;
  "Opret Bruger": undefined;
};

type LoginStackNavigatorParamList = {
  "Log ind": undefined;
};

type RegisterStackNavigatorParamList = {
  "Opret Bruger": undefined;
};

// Start screen props
type StartScreenRouteProp = RouteProp<
  UserStackNavigatorParamList,
  "Start Side"
>;

type StartScreenNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "Start Side"
>;

export type StartScreenProps = {
  route: StartScreenRouteProp;
  navigation: StartScreenNavigationProp;
};

// Choose service screen props
type ChooseServiceScreenRouteProp = RouteProp<
  UserStackNavigatorParamList,
  "Find Service"
>;

type ChooseServiceNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "Find Service"
>;

export type ChooseServiceProps = {
  route: ChooseServiceScreenRouteProp;
  navigation: ChooseServiceNavigationProp;
};

// Service details screen props
type ServiceDetailsScreenRouteProp = RouteProp<
  UserStackNavigatorParamList,
  "Service Detaljer"
>;

type ServiceDetailsNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "Service Detaljer"
>;

export type ServiceDetailsProps = {
  route: ServiceDetailsScreenRouteProp;
  navigation: ServiceDetailsNavigationProp;
};

// Choose service provider screen props
type ChooseServiceProviderScreenRouteProp = RouteProp<
  UserStackNavigatorParamList,
  "Vælg Service Udbyder"
>;

type ChooseServiceProviderNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "Vælg Service Udbyder"
>;

export type ChooseServiceProviderProps = {
  route: ChooseServiceProviderScreenRouteProp;
  navigation: ChooseServiceProviderNavigationProp;
};

// Service Provider Details screen props
type ServiceProviderDetailsScreenRouteProp = RouteProp<
  UserStackNavigatorParamList,
  "Udbyder Detaljer"
>;

type ServiceProviderDetailNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "Udbyder Detaljer"
>;

export type ServiceProviderDetailProps = {
  route: ServiceProviderDetailsScreenRouteProp;
  navigation: ServiceProviderDetailNavigationProp;
};

const UserStackNavigator = createStackNavigator<UserStackNavigatorParamList>();

const NotAuthStackNavigator = () => {
  return (
    <UserStackNavigator.Navigator>
      <UserStackNavigator.Screen name="Start Side" component={StartScreen} />
      <UserStackNavigator.Screen
        name="Find Service"
        component={ChooseService}
      />
      <UserStackNavigator.Screen
        name="Service Detaljer"
        component={ServiceDetails}
      />
      <UserStackNavigator.Screen
        name="Vælg Service Udbyder"
        component={ChooseServiceProvider}
      />
      <UserStackNavigator.Screen
        name="Udbyder Detaljer"
        component={ServiceProviderDetails}
      />
    </UserStackNavigator.Navigator>
  );
};

const NotAuthLoginStackNavigator = createStackNavigator<LoginStackNavigatorParamList>();

const LoginStackNavigator = () => {
  return (
    <NotAuthLoginStackNavigator.Navigator>
      <NotAuthLoginStackNavigator.Screen name="Log ind" component={Login} />
    </NotAuthLoginStackNavigator.Navigator>
  );
};

const NotAuthRegisterStackNavigator = createStackNavigator<RegisterStackNavigatorParamList>();

const RegisterStackNavigator = () => {
  return (
    <NotAuthRegisterStackNavigator.Navigator>
      <NotAuthRegisterStackNavigator.Screen
        name="Opret Bruger"
        component={Register}
      />
    </NotAuthRegisterStackNavigator.Navigator>
  );
};

const TabNavigator = createBottomTabNavigator<TabNavigatorParamList>();

const NotAuthTabNavigation = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Start Side") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Log ind") {
            iconName = focused ? "md-list" : "ios-list";
          } else {
            iconName = focused ? "md-create" : "ios-create";
          }

          // You can return any component that you like here!
          // @ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <TabNavigator.Screen
        name="Start Side"
        component={NotAuthStackNavigator}
      />
      <TabNavigator.Screen name="Log ind" component={LoginStackNavigator} />
      <TabNavigator.Screen
        name="Opret Bruger"
        component={RegisterStackNavigator}
      />
    </TabNavigator.Navigator>
  );
};

export default NotAuthTabNavigation;
