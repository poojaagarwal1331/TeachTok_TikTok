import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ScreenNames, Strings } from '../constants';
import { ActivityScreen } from '../modules/Activity';
import { BookmarksScreen } from '../modules/Bookmarks';
import { DiscoverScreen } from '../modules/Discover';
import { ProfileScreen } from '../modules/Profile';
import { TabBar } from '../modules/TabBar';

const MainStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const DashboardScreens = () => {

  return (
    <MainStack.Navigator initialRouteName={ScreenNames.tabBar}>
      <MainStack.Screen
        name={ScreenNames.tabBar}
        component={TabBar}
        options={{ title: Strings.home, headerShown: false, orientation: 'portrait' }}
      />
      <MainStack.Screen
        name={ScreenNames.discover}
        component={DiscoverScreen}
        options={{ title: Strings.discover, headerShown: false, orientation: 'portrait' }}
      />
      <MainStack.Screen
        name={ScreenNames.activity}
        component={ActivityScreen}
        options={{ title: Strings.activity, headerShown: false, orientation: 'portrait' }}
      />
      <MainStack.Screen
        name={ScreenNames.bookmark}
        component={BookmarksScreen}
        options={{ title: Strings.bookmark, headerShown: false, orientation: 'portrait' }}
      />
      <MainStack.Screen
        name={ScreenNames.profile}
        component={ProfileScreen}
        options={{ title: Strings.profile, headerShown: false, orientation: 'portrait' }}
      />
    </MainStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ScreenNames.app}
        component={DashboardScreens}
        options={{ headerShown: false, orientation: 'portrait' }}
      />
    </RootStack.Navigator>
  );
};

export default AppNavigation;
