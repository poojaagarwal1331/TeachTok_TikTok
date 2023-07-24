import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icons from "../../../assets";
import { ScreenNames } from "../../../constants";
import { TabBarButtonLabel } from "../../../constants/Enum";
import { Colors } from "../../../utils";
import { ActivityScreen } from "../../Activity";
import { BookmarksScreen } from "../../Bookmarks";
import { DiscoverScreen } from "../../Discover";
import { HomeScreen } from "../../Home";
import { ProfileScreen } from "../../Profile";
import TabBarIcon from "../components/TabBarIcon";
import { TabBarIconProps } from "../types/TabBarTypes";

const tabs = [
  {
    name: ScreenNames.home,
    label: TabBarButtonLabel.home,
    component: HomeScreen,
    icon: Icons.homeTabBarIcon,
  },
  {
    name: ScreenNames.discover,
    label: TabBarButtonLabel.discover,
    component: DiscoverScreen,
    icon: Icons.discoverTabBarIcon,
  },
  {
    name: ScreenNames.activity,
    label: TabBarButtonLabel.activity,
    component: ActivityScreen,
    icon: Icons.activityTabBarIcon,
  },
  {
    name: ScreenNames.bookmark,
    label: TabBarButtonLabel.bookmark,
    component: BookmarksScreen,
    icon: Icons.bookmarkTabBarIcon,
  },
  {
    name: ScreenNames.profile,
    label: TabBarButtonLabel.profile,
    component: ProfileScreen,
    icon: Icons.profileTabBarIcon,
  },
];

const TabBar = () => {
  const Tab = createBottomTabNavigator();

  const renderTabBarIcon = ({ source, size }: TabBarIconProps) => {
    return (
      <TabBarIcon source={source} size={size} />
    )
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.grey,
        tabBarStyle: {
          backgroundColor: Colors.black,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarLabel: tab.label,
            tabBarIcon: ({ size }) => renderTabBarIcon({ source: tab.icon, size }),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabBar;
