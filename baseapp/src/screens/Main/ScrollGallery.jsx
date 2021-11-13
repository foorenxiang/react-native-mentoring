import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";

const ScrollGallery = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <View>
      {categories.map((category) => (
        <>
          <Image source={{ uri: category.uri }} />
          <Text>category</Text>
        </>
      ))}
    </View>
  );
};

export default ScrollGallery;
