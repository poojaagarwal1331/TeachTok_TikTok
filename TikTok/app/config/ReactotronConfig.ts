import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

let packagerHostname = 'localhost';

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  packagerHostname = scriptURL.split('://')[1].split(':')[0];
}

// https://github.com/infinitered/reactotron for more options!
const reactotron = Reactotron.configure({ name: 'TikTok', host: packagerHostname })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

// Let's clear Reactotron on every time we load the app
Reactotron.clear();

// Totally hacky, but this allows you to not both importing reactotron-react-native
// on every file.  This is just DEV mode, so no big deal.
console.tron = Reactotron;

export default reactotron;
