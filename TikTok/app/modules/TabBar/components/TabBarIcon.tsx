import React from "react";
import IconComponent from "./IconComponent";
import { TabBarIconProps } from "../types/TabBarTypes";

const TabBarIcon = ({ source, size }: TabBarIconProps) => {
  return <IconComponent source={source} size={size} />;
};

export default TabBarIcon;
