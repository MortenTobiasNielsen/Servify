import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import DefaultChooseLogo from "../../components/UI/DefaultChooseLogo";
import DefaultTitle from "../../components/UI/DefaultTitle";
import DefaultAddRemoveButton from "../../components/UI/DefaultAddRemoveButton";
import { ServiceProviderProfileProps } from "../../navigation/NotAuthNavigator";
import * as Standards from "../../constants/Standards";

const ServiceProviderProfile = ({
  navigation,
}: ServiceProviderProfileProps) => {
  return (
    <ScrollView testID="ScrollView">
      <View style={styles.container}>
        <DefaultChooseLogo />
        <View style={styles.serviceList}>
          <View style={styles.serviceListHeading}>
            <DefaultTitle>Services</DefaultTitle>
            <DefaultAddRemoveButton
              Type="Add"
              Name="AddNewService"
              Handler={() => navigation.navigate("Service Pris Detailjer")}
            ></DefaultAddRemoveButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  serviceList: {
    width: "90%",
    borderBottomWidth: Standards.Border.small,
    borderBottomColor: Standards.Colors.borders,
    alignItems: "center",
  },
  serviceListHeading: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ServiceProviderProfile;
