# TeachTok-TikTok REACT NATIVE APP
## Dear developers

**Use the VSCode shortcut `⇧⌘B` to start the application**

1. this triggers our custom build task (defined in _./.vscode/tasks.json_)
2. which opens a VSCode terminal to build the app and run the app emulator
3. choose your option (defined in our build script _./run_) and press ENTER to run it
4. this runs `yarn ios`
5. it has a watchers activated (as defined in the certain package.json)

![Parallel Terminals for Building](./README.png)

### Dependencies

You can add the option `i` in the build task to let our build script (defined in _./run_) also install the dependencies, but if you face any difficulties (like with `arch -x86_64` added for Apple M1 MacBooks for `pod install`), just install the dependencies manually.

### Auto-open

You can start the build terminals (our build task) automatically when you open the VSCode app. do allow running a build task on folder-open, press `⇧⌘P` to open the VSCode console and select:

1. Tasks: Manage Automatic Tasks in Folder
2. Allow Automatic Tasks in Folder


### Environment Setup

You can built the environment using the script commands mention in the package.json.

The script is excuted with two arguments: Type of Operation & Version Type

1. Type of Operation:  setup - (setup up environment variables)
                       setupWithBuild - (setup up environment variables with versioning)
2. Version Type: major, minor, code, majorWithCode, minorWithCode, none.

### DO

List of tags added as types (Commit Types):
1. Specify the type of commit:
    1. feat: The new feature you're adding to a particular application
    2. fix: A bug fix
    3. style: Feature and updates related to styling
    4. refactor: Refactoring a specific section of the codebase
    5. test: Everything related to testing
    6. docs: Everything related to documentation
    7. chore: Regular code maintenance.[ You can also use emojis to represent commit types]
2. Separate the subject from the body with a blank line
3. Your commit message should not contain any whitespace errors
4. Remove unnecessary punctuation marks
5. Do not end the subject line with a period
6. Capitalize the subject line and each paragraph
7. Use the imperative mood in the subject line
8. Use the body to explain what changes you have made and why you made them.
9. Do not assume the reviewer understands what the original problem was, ensure you add it.
10. Do not think your code is self-explanatory
11. Follow the commit convention defined by your team

### DON'T

Don't end the summary line with a period -it's a title and titles don't end with a period.

### Tips

If it seems difficult to summarise what your commit does, it may be because it includes several logical changes or bug fixes, and are better split up into several commits.

## List of all dependencies used in the project with their usage

1.  [**@react-native-async-storage/async-storage**](https://github.com/react-native-async-storage/async-storage) for persistent, key-value storage system for React Native.
2.  [**@react-navigation/bottom-tabs**](https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs) is a library for React Navigation integration for tab view component.
3.  [**@react-redux**](https://github.com/reduxjs/react-redux) for state management.
4.  [**@reduxjs/toolkit**](https://github.com/reduxjs/redux-toolkit) for state management.
5.  [**@react-navigation/stack**](https://github.com/react-navigation/stack) for stack navigator for React Navigation.
6.  [**axios**](https://github.com/axios/axios) for promise based HTTP client for the browser and node.js.
7.  [**react**](https://github.com/facebook/react) for web and native user interfaces.
8.  [**npm**](https://github.com/npm) for JavaScript Package Manager.
9.  [**react-native**](https://github.com/facebook/react-native)  for building native applications using React.
10. [**redux**](https://github.com/reduxjs/redux) for Predictable state container for JavaScript apps.
11. [**redux-persist**](https://github.com/rt2zz/redux-persist) For persist and rehydrate a redux store.
12. [**reactotron-redux**](https://github.com/infinitered/reactotron-redux) the redux plugin for reactotron that allows tracking redux actions and state.
13. [**@react-navigation/native-stack**](https://github.com/react-navigation/react-navigation/tree/main/packages/native-stack) for stack navigator for React Native using native primitives for navigation.
14. [**react-native-screens**](https://github.com/software-mansion/react-native-screens) for native navigation primitives for your React Native app.
15. [**react-native-safe-area-context**](https://github.com/th3rdwave/react-native-safe-area-context) a flexible way to handle safe area insets in JS.
16. [**react-native-linear-gradient**](https://github.com/react-native-linear-gradient/react-native-linear-gradient)  is a library for displaying the gradient.
17. [**react-native-gesture-handler**](https://github.com/software-mansion/react-native-gesture-handler) for gesture handling.
18. [**react-native-fast-image**](https://github.com/DylanVann/react-native-fast-image) is a library for handling image caching like browsers.
19. [**react-native-device-info**](https://github.com/react-native-device-info/react-native-device-info) for getting device info like height and width for dynamic styling.