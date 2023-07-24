import { combineReducers } from 'redux';
import HomeSlice from './Home/HomeSlice';

const rootReducer = combineReducers({
  homeData: HomeSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
