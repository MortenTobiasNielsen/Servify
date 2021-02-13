import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import * as Standards from "../../constants/Standards";

const DefaultAddButton = (props: { Type: "Add" | "Remove"; name: string }) => {
  // To make it work on web
  const styles = StyleSheet.create({
    circle: {
      width: Standards.AddRemoveButton.size,
      height: Standards.AddRemoveButton.size,
      borderRadius: Standards.AddRemoveButton.Radius,
      backgroundColor: props.Type === "Add" ? "green" : "red",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: Standards.Padding.medium,
    },
    horizontal: {
      position: "absolute",
      width: Standards.AddRemoveButton.LineLength,
      height: Standards.AddRemoveButton.LineWidth,
      backgroundColor: "white",
      borderRadius: Standards.AddRemoveButton.Radius,
    },
    vertical: {
      position: "absolute",
      width: Standards.AddRemoveButton.LineWidth,
      height: Standards.AddRemoveButton.LineLength,
      backgroundColor: "white",
      borderRadius: Standards.AddRemoveButton.Radius,
    },
  });

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={props.Type + " - " + props.name}
      activeOpacity={0.6}
      onPress={() => {}}
      testID={"DefaultButton - " + props.Type}
    >
      <View style={styles.circle}>
        <View style={styles.horizontal}></View>
        {props.Type === "Add" ? <View style={styles.vertical}></View> : null}
      </View>
    </TouchableOpacity>
  );
};

export default DefaultAddButton;
