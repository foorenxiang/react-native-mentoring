import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";

const Category = ({ title }) => {
  return <></>;
};

const Categories = () => {
  return categories.map((category) => (
    <Category title={category} key={category} />
  ));
};

export default Categories;
