import React from "react";
import { View } from "react-native";

import DefaultButton from "../../components/UI/DefaultButton";
import { ServiceToProvideProps } from "../../navigation/NotAuthNavigator";

const ServiceToProvide = ({ navigation }: ServiceToProvideProps) => {
  return (
    <View testID="ServiceToProvide">
      <DefaultButton
        onPress={() => navigation.navigate("Service Pris Detailjer")}
      >
        Vælg Service
      </DefaultButton>
      <DefaultButton onPress={() => {}}>Udbyd Ny Service</DefaultButton>
    </View>
  );
};

export default ServiceToProvide;
