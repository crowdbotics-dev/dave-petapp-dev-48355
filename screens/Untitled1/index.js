import { Pressable } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={_styles.XJGFpTny}>
      <FlatList style={_styles.JnpEapfG} renderItem={() => <View style={_styles.scSXYdYk}><Text style={_styles.rNTgQxrS}>Pet Name</Text><Pressable onPress={() => navigation.navigate(" CustomerInfoCopy")}><Text style={_styles.KsBvkemO}>View Breed Info</Text></Pressable></View>} ItemSeparatorComponent={() => <View style={_styles.MgCxlStS} />} data={[1, 2, 3, 4, 5, 6]} keyExtractor={item => item.toString()}></FlatList><Text style={_styles.hKiyUEmO}>Customer's Pets</Text></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  XJGFpTny: {
    backgroundColor: "#fbbf55",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  JnpEapfG: {
    position: "absolute",
    width: 341,
    height: 340,
    left: 8,
    top: 39
  },
  scSXYdYk: {
    width: 332,
    height: 75,
    backgroundColor: "#e3e7ff"
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
  },
  VhmtkQaL: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 148,
    height: 30
  },
  KKNoHaSM: {
    width: 100,
    height: 21,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    fontWeight: "700",
    top: 58,
    left: 0
  },
  hKiyUEmO: {
    width: 157,
    height: 18,
    lineHeight: 12,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    top: 20,
    left: 9,
    fontWeight: "700"
  },
  yHahizdY: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 148,
    height: 30,
    position: "absolute",
    left: 194,
    top: 28
  },
  NFYeUQeu: {
    width: 107,
    height: 62
  },
  rNTgQxrS: {
    width: 100,
    height: 31,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  dRNxktkb: {
    height: 43,
    width: 140,
    backgroundColor: "#1f92d2",
    borderRadius: 3,
    color: "#777777",
    borderColor: "#0052ff",
    borderWidth: 1
  },
  FrpYCtDH: {
    width: 95,
    height: 35,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff",
    position: "absolute",
    top: 12,
    left: 27
  },
  NssQmazT: {
    height: 43,
    width: 140,
    backgroundColor: "#1f92d2",
    borderRadius: 3,
    color: "#777777",
    borderColor: "#0052ff",
    borderWidth: 1
  },
  aRMPhHTy: {
    width: 95,
    height: 35,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff",
    position: "absolute",
    top: 12,
    left: 27
  },
  KsBvkemO: {
    width: 148,
    height: 29,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#0099ff",
    fontWeight: "700"
  }
});