import React from "react";
import { Text, StyleSheet } from "react-native";

import * as Standards from "../../constants/Standards";

const DefaultTitle = (props: { children: React.ReactNode }) => {
  const titleText = props.children?.toLocaleString();

  return (
    <Text
      accessibilityRole="header"
      accessibilityLabel={titleText}
      style={styles.title}
      testID={"DefaultTitle - " + titleText}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Standards.Fonts.openSansBold,
    color: Standards.Colors.primary,
    fontSize: Standards.FontSize.large,
  },
});

export default DefaultTitle;
