import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View } from "react-native"
import AppNavigation from "./app/navigation/AppNavigation"
import { navigationRef } from "./app/navigation/NavigationService"
import { AppStyles } from "./app/utils"

const RootContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={AppStyles.rootContainerStyle}>
        <AppNavigation />
      </View>
    </NavigationContainer>
  )
}

export default RootContainer;