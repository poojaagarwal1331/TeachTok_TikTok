import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

const customNavigate = (screen: any, params?: any) => {
  try {
    navigationRef.current?.navigate(screen, params);
  } catch (e) {
    // TODO handle this error because we were unable to navigate to the right screen.
  }
};

const navigate = (stack: { name: any; screen: any; }, params: any) => {
  if (navigationRef?.current) {
    return navigationRef.current.navigate(stack.name, {
      screen: stack.screen,
      params
    });
  } else {
    // TODO handle this error because there is no ref for the current navigation.
  }
};

const reset = (stackName: any, screenName: any, params: any) => {
  if (navigationRef.current) {
    return navigationRef.current.reset({
      index: 0,
      routes: [
        {
          name: stackName,
          params,
          state: {
            routes: [
              {
                name: screenName,
                params
              }
            ]
          }
        }
      ]
    });
  } else {
  }
};

function goBack() {
  navigationRef.current?.goBack();
}

const replace = (name: string, params: object | undefined) =>
  navigationRef.current?.dispatch(StackActions.replace(name, params));

const custom = (params: any) => {
  if (navigationRef.current) {
    return navigationRef.current.setParams(params);
  } else {
  }
};

const pop = (count: number) => {
  navigationRef?.current?.dispatch(StackActions.pop(count));
};

export { navigate, reset, goBack, customNavigate, replace, custom, pop };
