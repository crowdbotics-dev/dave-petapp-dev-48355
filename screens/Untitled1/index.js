import { Text } from "react-native";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.XJGFpTny}>
      <FlatList style={_styles.JnpEapfG} renderItem={() => <View style={_styles.scSXYdYk}></View>} ItemSeparatorComponent={() => <View style={_styles.MgCxlStS} />} data={[1, 2, 3, 4, 5, 6]} keyExtractor={item => item.toString()}></FlatList><Text style={_styles.znLbFyVO}>Customer</Text></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  XJGFpTny: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  JnpEapfG: {
    position: "absolute",
    width: 341,
    height: 340,
    left: 8,
    top: 111
  },
  scSXYdYk: {
    width: 332,
    height: 75,
    backgroundColor: "#FFFFFF"
  },
  MgCxlStS: {
    backgroundColor: "#000000",
    height: 1
  },
  znLbFyVO: {
    width: 100,
    height: 18,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    fontWeight: "700"
  }
});