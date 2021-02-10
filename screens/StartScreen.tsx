import React from "react";
import { View, StyleSheet } from "react-native";

import { StartScreenProps } from "../navigation/NotAuthNavigator";
import DefaultButton from "../components/UI/DefaultButton";
import DefaultAddRemoveButton from "../components/UI/DefaultAddRemoveButton";

import * as Standards from "../constants/Standards";

const StartScreen = ({ navigation }: StartScreenProps) => {
  return (
    <View style={styles.container} testID="StartScreen">
      <View style={styles.screenContainer}>
        <View style={styles.buttonContainer}>
          <DefaultButton onPress={() => navigation.navigate("Find Service")}>
            Find Service
          </DefaultButton>
          <DefaultButton onPress={() => navigation.navigate("Udbyd Service")}>
            Udbyd Service
          </DefaultButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingVertical: Standards.Padding.medium,
    width: "80%",
  },
});

export default StartScreen;
