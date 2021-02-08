import React from "react";
import { Text, StyleSheet } from "react-native";

import * as Standards from "../../constants/Standards";

const DefaultTitle = (props: { children: React.ReactNode }) => {
  return (
    <Text style={styles.title} testID="DefaultTitle">
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Standards.Fonts.openSansBold,
    color: Standards.Colors.primary,
    fontSize: Standards.FontSize.medium,
  },
});

export default DefaultTitle;
